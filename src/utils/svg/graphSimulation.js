export default function setSimulation(simulation, nodeHeight, [link, node, nameLabel, idLabel]) {
    simulation.on('tick', () => {
    link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)

    node
        .attr('x', d => d.x - d.dynamicWidth / 2)
        .attr('y', d => d.y - nodeHeight / 2)

    nameLabel
        .attr('x', d => d.x)
        .attr('y', d => {
            if (d.showId)
                return d.y + 11
            return d.y
        })

    idLabel
        .attr('x', d => d.x)
        .attr('y', d => {
            if (d.logic !== undefined)
                return d.y
            return d.y - 11
        })
    })
}