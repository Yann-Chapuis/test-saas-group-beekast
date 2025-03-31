import type { Composer } from 'vue-i18n'
import type { Building } from '@/composables/buildings/models/Building'
import type { Tile } from '@/interfaces/tile.interface'
import { BUILDING_CONFIGS } from '@/composables/buildings/config/buildingConfigs'
import { buildingImages } from '@/composables/buildings/config/buildingImages'
import { soundBuild } from '@/composables/volume'
import { applyTileConfig } from '@/composables/tiles'
import type { Resources } from '@/composables/buildings/models/Resources'
import { ResourceService } from '@/composables/buildings/services/resourceService'

export type TranslatorFunction = Composer['t']

export class BuildingService {
  public resourceService: ResourceService

  constructor() {
    this.resourceService = new ResourceService()
  }

  canUpgrade(type: string, t: TranslatorFunction): Building | null {
    const match = type.match(/^(.*)_t(\d+)$/)
    if (!match) return null

    const baseType = match[1]
    const currentLevel = parseInt(match[2])
    const newLevel = currentLevel + 1
    const upgradedType = `${baseType}_t${newLevel}`

    const config =
      BUILDING_CONFIGS[baseType as keyof typeof BUILDING_CONFIGS]?.levels[
        `t${newLevel}` as keyof typeof config.levels
      ]
    if (!config) return null

    return {
      type: upgradedType,
      name: t(upgradedType),
      level: newLevel,
      cost: config.cost,
      img: buildingImages[baseType as keyof typeof buildingImages][
        `t${newLevel}`
      ],
    }
  }

  upgradeBuilding(
    type: string,
    tile: Tile,
    t: TranslatorFunction,
  ): Building | null {
    const upgradedBuilding = this.canUpgrade(type, t)

    if (upgradedBuilding && tile) {
      const baseType = type.split('_')[0]
      if (baseType === 'cityhall') {
        return upgradedBuilding
      }
    }
    return null
  }

  setUpgradeBuilding(
    type: string,
    tile: Tile,
    tileIndex: number,
    resources: Resources,
    t: TranslatorFunction,
    updateResources: (cost: Resources) => void,
    addEvent: (message: string) => void,
    updateBuildableArea: (
      position: number,
      type: string,
      size: number,
      tiles: Tile[],
    ) => void,
    sizeMap: number,
    tiles: Tile[],
  ): void {
    const upgradedBuilding = this.upgradeBuilding(type, tile, t)

    if (!upgradedBuilding) {
      addEvent(`Building ${type} can't be upgraded anymore`)
      return
    }

    const enoughResources = this.resourceService.checkIfEnoughResources(
      upgradedBuilding.cost,
      resources,
    )

    if (!enoughResources) {
      addEvent(`Not enough resources to upgrade ${type}`)
      return
    }

    soundBuild()
    applyTileConfig(tile, upgradedBuilding.type)
    updateBuildableArea(tileIndex, upgradedBuilding.type, sizeMap, tiles)
    updateResources(
      this.resourceService.deductResources(resources, upgradedBuilding.cost),
    )
    addEvent(`Building ${type} upgraded to ${upgradedBuilding.type}`)
  }

  getBuildingImage(type: string, t: TranslatorFunction): string {
    const match = type.match(/^(.*)_t(\d+)$/)
    if (!match) return ''

    const baseType = match[1]
    const level = match[2]

    return buildingImages[baseType as keyof typeof buildingImages][
      `t${level}` as keyof (typeof buildingImages)[typeof baseType]
    ]
  }
}
