import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { Cost } from '@/interfaces/buildings.interface'
import { buildingService, mapService } from '@/composables/buildings/index'

describe('buildings', () => {
  describe('getBuildableRadius', () => {
    it('returns correct radius for cityhall_t1', () => {
      expect(mapService.getBuildableRadius(0, 'cityhall_t1', 30, [])).toBe(1)
      console.log('✅ Rayon correct pour HDV niveau 1 ')
    })

    it('returns correct radius for cityhall_t2', () => {
      expect(mapService.getBuildableRadius(0, 'cityhall_t2', 30, [])).toBe(2)
      console.log('✅ Rayon correct pour HDV niveau 2 ')
    })

    it('returns correct radius for cityhall_t3', () => {
      expect(mapService.getBuildableRadius(0, 'cityhall_t3', 30, [])).toBe(3)
      console.log('✅ Rayon correct pour HDV niveau 3 ')
    })

    it('returns correct radius for cityhall_t4', () => {
      expect(mapService.getBuildableRadius(0, 'cityhall_t4', 30, [])).toBe(4)
      console.log('✅ Rayon correct pour HDV niveau 4 ')
    })

    it('returns default radius for unknown building type', () => {
      expect(mapService.getBuildableRadius(0, 'unknown', 30, [])).toBe(1)
      console.log('✅ Rayon par défaut pour bâtiment inconnu ')
    })
  })

  describe('canUpgrade', () => {
    const mockTranslate = vi.fn((key: string) => key)

    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('returns building info for valid upgrade', () => {
      const building = buildingService.canUpgrade('cityhall_t1', mockTranslate)

      expect(building).not.toBeNull()
      expect(building).toHaveProperty('type', 'cityhall_t2')
      expect(building).toHaveProperty('name')
      expect(building).toHaveProperty('cost')
      expect(building).toHaveProperty('img')
      expect(mockTranslate).toHaveBeenCalledWith('cityhall_t2')
      console.log('✅ Informations correctes pour amélioration valide ')
    })

    it('returns null for invalid building type', () => {
      const building = buildingService.canUpgrade('invalid_t1', mockTranslate)
      expect(building).toBeNull()
      expect(mockTranslate).not.toHaveBeenCalled()
      console.log('✅ Gestion des types de bâtiments invalides ')
    })

    it('returns null for max level building', () => {
      const building = buildingService.canUpgrade('cityhall_t4', mockTranslate)
      expect(building).toBeNull()
      expect(mockTranslate).not.toHaveBeenCalled()
      console.log('✅ Gestion du niveau maximum des bâtiments ')
    })
  })

  describe('checkIfEnoughResources', () => {
    const cost: Cost = {
      food: 100,
      wood: 100,
      stone: 100,
      gold: 100,
    }

    it('returns true when enough resources', () => {
      const resources = {
        food: 200,
        wood: 200,
        stone: 200,
        gold: 200,
      }
      expect(
        buildingService.resourceService.checkIfEnoughResources(cost, resources),
      ).toBe(true)
      console.log('✅ Vérification des ressources suffisantes ')
    })

    it('returns false when not enough resources', () => {
      const resources = {
        food: 50,
        wood: 50,
        stone: 50,
        gold: 50,
      }
      expect(
        buildingService.resourceService.checkIfEnoughResources(cost, resources),
      ).toBe(false)
      console.log('✅ Vérification des ressources insuffisantes ')
    })

    it('returns false when some resources are missing', () => {
      const resources = {
        food: 200,
        wood: 50,
        stone: 200,
        gold: 200,
      }
      expect(
        buildingService.resourceService.checkIfEnoughResources(cost, resources),
      ).toBe(false)
      console.log('✅ Vérification des ressources partiellement manquantes ')
    })
  })
})
