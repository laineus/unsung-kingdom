import config from '../data/config'
export default (tile, origin = 0.5) => (tile * config.TILE_SIZE) + (origin * config.TILE_SIZE)
