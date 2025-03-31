import type { BuildingType } from '@/composables/buildings/models/Building'
import type { Cost } from '@/interfaces/buildings.interface'

interface LevelConfig {
  cost: Cost
}

interface BuildingTypeConfig {
  levels: {
    t1: LevelConfig
    t2: LevelConfig
    t3: LevelConfig
    t4: LevelConfig
  }
}

export const BUILDING_CONFIGS: Record<BuildingType, BuildingTypeConfig> = {
  cityhall: {
    levels: {
      t1: { cost: { food: 51, wood: 50, stone: 50, gold: 50 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  archerycamp: {
    levels: {
      t1: { cost: { food: 50, wood: 52, stone: 50, gold: 50 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  barracks: {
    levels: {
      t1: { cost: { food: 50, wood: 54, stone: 50, gold: 50 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  blacksmith: {
    levels: {
      t1: { cost: { food: 50, wood: 50, stone: 52, gold: 50 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  farm: {
    levels: {
      t1: { cost: { food: 59, wood: 50, stone: 50, gold: 50 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  market: {
    levels: {
      t1: { cost: { food: 50, wood: 58, stone: 50, gold: 50 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  mine: {
    levels: {
      t1: { cost: { food: 50, wood: 50, stone: 56, gold: 50 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  outpost: {
    levels: {
      t1: { cost: { food: 50, wood: 50, stone: 50, gold: 53 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  residence: {
    levels: {
      t1: { cost: { food: 50, wood: 50, stone: 50, gold: 55 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  sawmill: {
    levels: {
      t1: { cost: { food: 50, wood: 57, stone: 50, gold: 50 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
  warhouse: {
    levels: {
      t1: { cost: { food: 50, wood: 50, stone: 50, gold: 54 } },
      t2: { cost: { food: 100, wood: 100, stone: 100, gold: 100 } },
      t3: { cost: { food: 150, wood: 150, stone: 150, gold: 150 } },
      t4: { cost: { food: 200, wood: 200, stone: 200, gold: 200 } },
    },
  },
}
