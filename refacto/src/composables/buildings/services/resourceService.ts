import type { Cost } from '@/interfaces/buildings.interface'
import type { Resources } from '../models/Resources'

export class ResourceService {
  checkIfEnoughResources(
    upgradedBuildingCost: Cost,
    actualResources: Resources,
  ): boolean {
    return (
      actualResources.food >= upgradedBuildingCost.food &&
      actualResources.wood >= upgradedBuildingCost.wood &&
      actualResources.stone >= upgradedBuildingCost.stone &&
      actualResources.gold >= upgradedBuildingCost.gold
    )
  }

  deductResources(resources: Resources, cost: Cost): Resources {
    return {
      food: resources.food - cost.food,
      wood: resources.wood - cost.wood,
      stone: resources.stone - cost.stone,
      gold: resources.gold - cost.gold,
    }
  }
}
