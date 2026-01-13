export default function setGraphDefs(svg) {
    const defs = svg.append('defs')

    // Arrow definition.
    defs.append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 30)
        .attr('refY', 0)
        .attr('markerWidth', 10)
        .attr('markerHeight', 8)
        .attr('orient', 'auto')
        .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#999')

    // Gradient based on node type.
    const gradients = {
        major_core: ['#242a3b', '#2a3645'],
        major_prep: ['#292a47', '#322947'],
        tech_elective: ['#2a453d', '#294733'],
        and: ['#a46449', '#a46449'],
        or: ['#3c593e', '#3c593e'],
        courseSelected: ['#383d6e', '#4d386e']
    }

    // Node linear gradient definition.
    Object.entries(gradients).forEach(([id, [start, end]]) => {
        const gradient = defs.append('linearGradient')
            .attr('id', id)
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '100%')
            .attr('y2', '0%')
        gradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', start)
        gradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', end)
    })

    return defs
}