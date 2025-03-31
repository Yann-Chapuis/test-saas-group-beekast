import type { Tile } from '@/interfaces/tile.interface'
import { calculateDistance } from '@/composables/utils'
import { revealTile } from '@/composables/map'

export class MapService {
  getBuildableRadius(
    cityhallPosition: number,
    cityhallType: string,
    sizeMap: number,
    tiles: Tile[],
  ): number {
    const radius = this.getRadius(cityhallType)
    this.applyBuildableRadius(cityhallPosition, radius, sizeMap, tiles)
    return radius
  }

  private applyBuildableRadius(
    cityhallPosition: number,
    radius: number,
    sizeMap: number,
    tiles: Tile[],
  ): void {
    tiles.forEach((tile, index) => {
      const distance = calculateDistance(sizeMap, cityhallPosition, index)
      if (distance <= radius) {
        // Révèle la tuile
        revealTile(index, sizeMap, tiles)
        // Marque la tuile comme constructible uniquement si elle n'est pas déjà marquée
        if (!tile.isBuildable) {
          tile.isBuildable = true
        }
      }
    })
  }

  private getRadius(cityhallType: string): number {
    switch (cityhallType) {
      case 'cityhall_t1':
        return 1
      case 'cityhall_t2':
        return 2
      case 'cityhall_t3':
        return 3
      case 'cityhall_t4':
        return 4
      default:
        return 1
    }
  }
}
