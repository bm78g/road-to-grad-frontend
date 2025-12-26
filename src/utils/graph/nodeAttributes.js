export default function setNodeAttributes(container, nodes, height) {
    const node = container.append('g')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5)
        .selectAll('rect')
        .data(nodes)
        .join('rect')
        .attr('width', 0) // Set later dynamically.
        .attr('height', height)
        .attr('rx', n => {
            if (n.logic === undefined)
                return 5
            return height
        })
        .attr('ry', n => {
            if (n.logic === undefined)
                return 5
            return height
        })
        .attr('fill', n => {
            if (n.requirement !== undefined) {
                return 'url(#course)'
            }
            if (n.logic !== undefined) {
                switch (n.logic) {
                    case "AND":
                        return 'url(#and)'
                    case "OR":
                        return 'url(#or)'
                    default:
                        return '#FFFFFF'
                }
            }
        })
        .attr('stroke', '#AAAAAA')
        .attr('stroke-width', 0.4)
        .attr('stroke-opacity', 0.5)
        .attr('class', 'course-node')

    return node
}