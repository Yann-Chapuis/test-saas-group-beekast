import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MapService } from '@/composables/buildings/services/mapService'
import type { Tile } from '@/interfaces/tile.interface'
import * as mapUtils from '@/composables/map'

describe('MapService', () => {
  let mapService: MapService
  let mockTiles: Tile[]
  const sizeMap = 5 // Une taille réduite pour les tests

  beforeEach(() => {
    mapService = new MapService()
    // Créer une grille 5x5 de tuiles non constructibles
    mockTiles = Array(sizeMap * sizeMap)
      .fill(null)
      .map(() => ({
        type: 'plains',
        isBuildable: false,
        revealed: false,
        imageClass: '',
        loot: false,
        group: '',
        canMoveOnIt: true,
      }))

    // Mock de la fonction revealTile
    vi.spyOn(mapUtils, 'revealTile').mockImplementation(
      (index, sizeMap, tiles) => {
        tiles[index].revealed = true
      },
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('getBuildableRadius', () => {
    it('devrait marquer les tuiles correctes comme constructibles pour un hôtel de ville niveau 1', () => {
      const centerPosition = 12 // Position centrale dans une grille 5x5

      mapService.getBuildableRadius(
        centerPosition,
        'cityhall_t1',
        sizeMap,
        mockTiles,
      )

      // Pour un rayon de 1, seules 5 tuiles devraient être constructibles
      // (la tuile centrale et ses 4 voisins directs)
      const buildableTiles = mockTiles.filter(tile => tile.isBuildable)
      expect(buildableTiles.length).toBe(5)
      console.log('✅ Marquage des tuiles constructibles pour HDV niveau 1 ')
    })

    it('devrait gérer correctement les bords de la carte', () => {
      const cornerPosition = 0 // Position dans le coin supérieur gauche

      mapService.getBuildableRadius(
        cornerPosition,
        'cityhall_t2',
        sizeMap,
        mockTiles,
      )

      // Dans un coin avec rayon 2, on devrait avoir moins de tuiles constructibles
      // qu'au centre à cause des limites de la carte
      const buildableTiles = mockTiles.filter(tile => tile.isBuildable)
      expect(buildableTiles.length).toBeLessThan(13) // 13 est le nombre max de tuiles pour r=2
      console.log('✅ Gestion des bords de la carte ')
    })

    it('ne devrait pas rendre constructible une tuile déjà constructible', () => {
      const centerPosition = 12
      // Marquer une tuile comme déjà constructible
      mockTiles[13].isBuildable = true
      const initialBuildableCount = mockTiles.filter(
        tile => tile.isBuildable,
      ).length

      mapService.getBuildableRadius(
        centerPosition,
        'cityhall_t1',
        sizeMap,
        mockTiles,
      )

      const finalBuildableCount = mockTiles.filter(
        tile => tile.isBuildable,
      ).length
      expect(finalBuildableCount).toBe(initialBuildableCount + 4) // 4 nouvelles tuiles + 1 déjà constructible
      console.log('✅ Gestion des tuiles déjà constructibles ')
    })

    it('devrait révéler toutes les tuiles dans le rayon', () => {
      const centerPosition = 12

      mapService.getBuildableRadius(
        centerPosition,
        'cityhall_t1',
        sizeMap,
        mockTiles,
      )

      const revealedTiles = mockTiles.filter(tile => tile.revealed)
      expect(revealedTiles.length).toBe(5) // Les mêmes 5 tuiles devraient être révélées
      console.log('✅ Révélation des tuiles dans le rayon ')
    })

    it("devrait retourner le bon rayon pour chaque niveau d'hôtel de ville", () => {
      const position = 0
      const levels = [
        'cityhall_t1',
        'cityhall_t2',
        'cityhall_t3',
        'cityhall_t4',
      ]

      levels.forEach((level, index) => {
        const radius = mapService.getBuildableRadius(
          position,
          level,
          sizeMap,
          [],
        )
        expect(radius).toBe(index + 1)
      })
      console.log("✅ Rayons corrects pour chaque niveau d'HDV ")
    })

    it('devrait gérer les types de bâtiments invalides', () => {
      const position = 0
      const radius = mapService.getBuildableRadius(
        position,
        'invalid_building',
        sizeMap,
        mockTiles,
      )

      expect(radius).toBe(1) // Devrait retourner le rayon par défaut
      console.log('✅ Gestion des types de bâtiments invalides ')
    })
  })
})
