import nodeSelectHandler from '../graph/nodeSelectHandler'

export default function setNodeAttributes(container, nodes, height, setShowInfo, setInfo) {
    const node = container.append('g')
        .attr('stroke', '#fff')
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
            if (n.logic === undefined) {
                switch (n.type) {
                    case "major_prep":
                        return 'url(#major_prep)'
                    case 'major_core':
                        return 'url(#major_core)'
                    case 'tech_elective':
                        return 'url(#tech_elective)'
                    default:
                        return 'url(#major_prep)'
                }
            }
            else {
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
        .attr('class', d => {
            return 'course-node ' + d.id.toLowerCase()
        })

    node.on('click', nodeSelectHandler(nodes, setShowInfo, setInfo))

    return node
}