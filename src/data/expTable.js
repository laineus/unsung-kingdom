const indexes = (50).toArray()
const table = indexes.map(v => v * 3)
export default indexes.map(i => Math.sum(...table.slice(0, i + 1)))
