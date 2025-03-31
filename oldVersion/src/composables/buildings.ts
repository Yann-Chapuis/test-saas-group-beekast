import type { Composer, TranslateResult } from 'vue-i18n'
import { soundBuild } from '@/composables/volume'
import { applyTileConfig } from '@/composables/tiles'
import type { Tile } from '@/interfaces/tile.interface'

/* CityHall */
import cityhall_t1 from '@/assets/buildings/cityhall_t1.png'
import cityhall_t2 from '@/assets/buildings/cityhall_t2.png'
import cityhall_t3 from '@/assets/buildings/cityhall_t3.png'
import cityhall_t4 from '@/assets/buildings/cityhall_t4.png'
/* Archerycamp */
import archerycamp_t1 from '@/assets/buildings/archerycamp_t1.png'
import archerycamp_t2 from '@/assets/buildings/archerycamp_t2.png'
import archerycamp_t3 from '@/assets/buildings/archerycamp_t3.png'
import archerycamp_t4 from '@/assets/buildings/archerycamp_t4.png'
/* Barrack */
import barracks_t1 from '@/assets/buildings/barracks_t1.png'
import barracks_t2 from '@/assets/buildings/barracks_t2.png'
import barracks_t3 from '@/assets/buildings/barracks_t3.png'
import barracks_t4 from '@/assets/buildings/barracks_t4.png'
/* Blacksmith */
import blacksmith_t1 from '@/assets/buildings/blacksmith_t1.png'
import blacksmith_t2 from '@/assets/buildings/blacksmith_t2.png'
import blacksmith_t3 from '@/assets/buildings/blacksmith_t3.png'
import blacksmith_t4 from '@/assets/buildings/blacksmith_t4.png'
/* Farm */
import farm_t1 from '@/assets/buildings/farm_t1.png'
import farm_t2 from '@/assets/buildings/farm_t2.png'
import farm_t3 from '@/assets/buildings/farm_t3.png'
import farm_t4 from '@/assets/buildings/farm_t4.png'
/* Market */
import market_t1 from '@/assets/buildings/market_t1.png'
import market_t2 from '@/assets/buildings/market_t2.png'
import market_t3 from '@/assets/buildings/market_t3.png'
import market_t4 from '@/assets/buildings/market_t4.png'
/* Mine */
import mine_t1 from '@/assets/buildings/mine_t1.png'
import mine_t2 from '@/assets/buildings/mine_t2.png'
import mine_t3 from '@/assets/buildings/mine_t3.png'
import mine_t4 from '@/assets/buildings/mine_t4.png'
/* Outpost */
import outpost_t1 from '@/assets/buildings/outpost_t1.png'
import outpost_t2 from '@/assets/buildings/outpost_t2.png'
import outpost_t3 from '@/assets/buildings/outpost_t3.png'
import outpost_t4 from '@/assets/buildings/outpost_t4.png'
/* Residence */
import residence_t1 from '@/assets/buildings/residence_t1.png'
import residence_t2 from '@/assets/buildings/residence_t2.png'
import residence_t3 from '@/assets/buildings/residence_t3.png'
import residence_t4 from '@/assets/buildings/residence_t4.png'
/* Sawmill */
import sawmill_t1 from '@/assets/buildings/sawmill_t1.png'
import sawmill_t2 from '@/assets/buildings/sawmill_t2.png'
import sawmill_t3 from '@/assets/buildings/sawmill_t3.png'
import sawmill_t4 from '@/assets/buildings/sawmill_t4.png'
/* Warhouse */
import warhouse_t1 from '@/assets/buildings/warhouse_t1.png'
import warhouse_t2 from '@/assets/buildings/warhouse_t2.png'
import warhouse_t3 from '@/assets/buildings/warhouse_t3.png'
import warhouse_t4 from '@/assets/buildings/warhouse_t4.png'
/* Interfaces */
import type { Cost } from '@/interfaces/buildings.interface'

type TranslatorFunction = Composer['t']

interface Resources {
  food: number
  wood: number
  stone: number
  gold: number
}

export const getBuildings = (t: TranslatorFunction) => [
  // CityHall
  {
    type: 'cityhall_t1',
    name: t('cityhall_t1') as TranslateResult,
    level: 1,
    cost: { food: 51, wood: 50, stone: 50, gold: 50 },
    img: cityhall_t1,
  },
  {
    type: 'cityhall_t2',
    name: t('cityhall_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: cityhall_t2,
  },
  {
    type: 'cityhall_t3',
    name: t('cityhall_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: cityhall_t3,
  },
  {
    type: 'cityhall_t4',
    name: t('cityhall_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: cityhall_t4,
  },

  // Archery Camp
  {
    type: 'archerycamp_t1',
    name: t('archerycamp_t1') as TranslateResult,
    level: 1,
    cost: { food: 50, wood: 52, stone: 50, gold: 50 },
    img: archerycamp_t1,
  },
  {
    type: 'archerycamp_t2',
    name: t('archerycamp_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: archerycamp_t2,
  },
  {
    type: 'archerycamp_t3',
    name: t('archerycamp_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: archerycamp_t3,
  },
  {
    type: 'archerycamp_t4',
    name: t('archerycamp_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: archerycamp_t4,
  },

  // Barrack
  {
    type: 'barracks_t1',
    name: t('barracks_t1') as TranslateResult,
    level: 1,
    cost: { food: 50, wood: 54, stone: 50, gold: 50 },
    img: barracks_t1,
  },
  {
    type: 'barracks_t2',
    name: t('barracks_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: barracks_t2,
  },
  {
    type: 'barracks_t3',
    name: t('barracks_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: barracks_t3,
  },
  {
    type: 'barracks_t4',
    name: t('barracks_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: barracks_t4,
  },

  // Blacksmith
  {
    type: 'blacksmith_t1',
    name: t('blacksmith_t1') as TranslateResult,
    level: 1,
    cost: { food: 50, wood: 50, stone: 52, gold: 50 },
    img: blacksmith_t1,
  },
  {
    type: 'blacksmith_t2',
    name: t('blacksmith_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: blacksmith_t2,
  },
  {
    type: 'blacksmith_t3',
    name: t('blacksmith_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: blacksmith_t3,
  },
  {
    type: 'blacksmith_t4',
    name: t('blacksmith_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: blacksmith_t4,
  },

  // Farm
  {
    type: 'farm_t1',
    name: t('farm_t1') as TranslateResult,
    level: 1,
    cost: { food: 59, wood: 50, stone: 50, gold: 50 },
    img: farm_t1,
  },
  {
    type: 'farm_t2',
    name: t('farm_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: farm_t2,
  },
  {
    type: 'farm_t3',
    name: t('farm_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: farm_t3,
  },
  {
    type: 'farm_t4',
    name: t('farm_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: farm_t4,
  },

  // Market
  {
    type: 'market_t1',
    name: t('market_t1') as TranslateResult,
    level: 1,
    cost: { food: 50, wood: 58, stone: 50, gold: 50 },
    img: market_t1,
  },
  {
    type: 'market_t2',
    name: t('market_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: market_t2,
  },
  {
    type: 'market_t3',
    name: t('market_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: market_t3,
  },
  {
    type: 'market_t4',
    name: t('market_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: market_t4,
  },

  // Mine
  {
    type: 'mine_t1',
    name: t('mine_t1') as TranslateResult,
    level: 1,
    cost: { food: 50, wood: 50, stone: 57, gold: 50 },
    img: mine_t1,
  },
  {
    type: 'mine_t2',
    name: t('mine_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: mine_t2,
  },
  {
    type: 'mine_t3',
    name: t('mine_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: mine_t3,
  },
  {
    type: 'mine_t4',
    name: t('mine_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: mine_t4,
  },

  // Outpost
  {
    type: 'outpost_t1',
    name: t('outpost_t1') as TranslateResult,
    level: 1,
    cost: { food: 50, wood: 56, stone: 50, gold: 50 },
    img: outpost_t1,
  },
  {
    type: 'outpost_t2',
    name: t('outpost_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: outpost_t2,
  },
  {
    type: 'outpost_t3',
    name: t('outpost_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: outpost_t3,
  },
  {
    type: 'outpost_t4',
    name: t('outpost_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: outpost_t4,
  },

  // Residence
  {
    type: 'residence_t1',
    name: t('residence_t1') as TranslateResult,
    level: 1,
    cost: { food: 50, wood: 55, stone: 50, gold: 50 },
    img: residence_t1,
  },
  {
    type: 'residence_t2',
    name: t('residence_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: residence_t2,
  },
  {
    type: 'residence_t3',
    name: t('residence_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: residence_t3,
  },
  {
    type: 'residence_t4',
    name: t('residence_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: residence_t4,
  },

  // Sawmill
  {
    type: 'sawmill_t1',
    name: t('sawmill_t1') as TranslateResult,
    level: 1,
    cost: { food: 58, wood: 50, stone: 50, gold: 50 },
    img: sawmill_t1,
  },
  {
    type: 'sawmill_t2',
    name: t('sawmill_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: sawmill_t2,
  },
  {
    type: 'sawmill_t3',
    name: t('sawmill_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: sawmill_t3,
  },
  {
    type: 'sawmill_t4',
    name: t('sawmill_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: sawmill_t4,
  },

  // Warhouse
  {
    type: 'warhouse_t1',
    name: t('warhouse_t1') as TranslateResult,
    level: 1,
    cost: { food: 50, wood: 57, stone: 50, gold: 50 },
    img: warhouse_t1,
  },
  {
    type: 'warhouse_t2',
    name: t('warhouse_t2') as TranslateResult,
    level: 1,
    cost: { food: 100, wood: 100, stone: 100, gold: 100 },
    img: warhouse_t2,
  },
  {
    type: 'warhouse_t3',
    name: t('warhouse_t3') as TranslateResult,
    level: 1,
    cost: { food: 150, wood: 150, stone: 150, gold: 150 },
    img: warhouse_t3,
  },
  {
    type: 'warhouse_t4',
    name: t('warhouse_t4') as TranslateResult,
    level: 1,
    cost: { food: 200, wood: 200, stone: 200, gold: 200 },
    img: warhouse_t4,
  },
]

export const canUpgrade = (type: string, t: TranslatorFunction) => {
  // Extraction du nom du bâtiment et du niveau actuel
  const match = type.match(/^(.*)_t(\d+)$/)
  if (!match) return null // Retourne null si le format n'est pas valide

  const baseType = match[1] // Exemple : "cityhall"
  const currentLevel = parseInt(match[2]) // Exemple : 1

  // Incrémente le niveau
  const newLevel = currentLevel + 1
  const upgradedType = `${baseType}_t${newLevel}`

  // Recherche du bâtiment amélioré dans la liste
  const buildings = getBuildings(t)
  return buildings.find(building => building.type === upgradedType)
}

export const upgradeBuilding = (
  type: string,
  tile: Tile,
  t: TranslatorFunction,
) => {
  const upgradedBuilding = canUpgrade(type, t)

  if (upgradedBuilding && tile) {
    if (
      ['cityhall_t1', 'cityhall_t2', 'cityhall_t3', 'cityhall_t4'].includes(
        type,
      )
    ) {
      return upgradedBuilding
    } else {
      return false
    }
  }
}

export const getBuildableRadius = (cityhallType: string) => {
  let radius = 1
  switch (cityhallType) {
    case 'cityhall_t1':
      return (radius = 1)
    case 'cityhall_t2':
      return (radius = 2)
    case 'cityhall_t3':
      return (radius = 3)
    case 'cityhall_t4':
      return (radius = 4)
    default:
      return radius // Par défaut pour les niveaux non spécifiés
  }
}

export const getBuildingImage = (type: string, t: TranslatorFunction) => {
  const buildings = getBuildings(t)
  const building = buildings.find(building => building.type === type)
  return building ? building.img : undefined
}

export const checkIfEnoughResources = (
  upgradedBuildingCost: Cost,
  actualResources: Cost,
): boolean => {
  return (
    actualResources.food >= upgradedBuildingCost.food &&
    actualResources.wood >= upgradedBuildingCost.wood &&
    actualResources.stone >= upgradedBuildingCost.stone &&
    actualResources.gold >= upgradedBuildingCost.gold
  )
}

export const setUpgradeBuilding = (
  type: string,
  tile: Tile,
  tileIndex: number,
  resources: Resources,
  t: TranslatorFunction,
  updateResources: (cost: Cost) => void,
  addEvent: (message: string) => void,
  updateBuildableArea: (
    position: number,
    type: string,
    size: number,
    tiles: Tile[],
  ) => void,
  sizeMap: number,
  tiles: Tile[],
): void => {
  const upgradedBuilding = upgradeBuilding(type, tile, t)
  let enoughResources = false

  if (upgradedBuilding) {
    enoughResources = checkIfEnoughResources(upgradedBuilding.cost, resources)
  }

  if (upgradedBuilding) {
    if (enoughResources) {
      soundBuild()
      applyTileConfig(tile, upgradedBuilding.type)
      updateBuildableArea(tileIndex, upgradedBuilding.type, sizeMap, tiles)
      updateResources(upgradedBuilding.cost)
      addEvent(`Building ${type} upgraded to ${upgradedBuilding.type}`)
    } else {
      addEvent(`Not enough resources to upgrade ${type}`)
    }
  } else {
    addEvent(`Building ${type} can't be upgraded anymore`)
  }
}