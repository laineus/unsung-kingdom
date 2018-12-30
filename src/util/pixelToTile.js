import config from '../data/config'
export default tile => Math.floor(tile / config.TILE_SIZE)
