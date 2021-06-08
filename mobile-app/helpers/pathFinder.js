import fromDot from 'ngraph.fromdot'
import path from 'ngraph.path'
import mapGraph from 'assets/data/mapGraph'

const graph = fromDot(mapGraph)

export default function pathFinder(from, to) {
  const ngraphPathFinder = path.aStar(graph)
  const result = ngraphPathFinder.find(from, to)
  return result.map((node) => node.id).reverse()
}
