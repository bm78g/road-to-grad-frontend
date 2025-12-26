// Assigns position values based on distance from starting node.

export default function setNodePositions(nodes) {
    const maxDist = nodes.reduce((max, n) => {
        if (n.dist > max)
            return n.dist
        return max
    }, 0)
    const cols = Array(maxDist + 1).fill(0)

    const xSpacing = 325
    const ySpacing = 125
    const xIntercept = 0
    const yIntercept = 0
    for (let node of nodes) {
        const fx = (node.dist + 1) * xSpacing + xIntercept
        const fy = (cols[node.dist] + 1) * ySpacing + yIntercept
        node.fx = fx
        node.fy = fy
        cols[node.dist]++
    }
}