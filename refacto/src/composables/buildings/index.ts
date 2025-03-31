import { BuildingService } from './services/buildingService'
import { ResourceService } from './services/resourceService'
import { MapService } from './services/mapService'

// Create singleton instances
const buildingService = new BuildingService()
const resourceService = new ResourceService()
const mapService = new MapService()

// Export instances
export { buildingService, resourceService, mapService }

// Export types and interfaces
export * from './models/Building'
export * from './models/Resources'

// Export configurations
export * from './config/buildingConfigs'
export * from './config/buildingImages'
