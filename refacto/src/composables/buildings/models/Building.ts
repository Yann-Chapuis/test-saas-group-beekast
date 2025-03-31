import type { TranslateResult } from 'vue-i18n'
import type { Cost } from '@/interfaces/buildings.interface'

export interface Building {
  type: string
  name: TranslateResult
  level: number
  cost: Cost
  img: string
}

export interface BuildingConfig {
  type: string
  images: string[]
  loot: boolean
  group: string
  canMoveOnIt: boolean
}

export type BuildingType =
  | 'cityhall'
  | 'archerycamp'
  | 'barracks'
  | 'blacksmith'
  | 'farm'
  | 'market'
  | 'mine'
  | 'outpost'
  | 'residence'
  | 'sawmill'
  | 'warhouse'
