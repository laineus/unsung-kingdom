import config from '../data/config'
export const pixelToTile = px => Math.floor(px / config.TILE_SIZE)
export const tileToPixel = (tile, origin = 0.5) => (tile * config.TILE_SIZE) + (origin * config.TILE_SIZE)
export const positionByRight = px => config.WIDTH - px
export const positionByBottom = px => config.HEIGHT - px
