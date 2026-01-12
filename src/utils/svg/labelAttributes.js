export default function setLabelAttributes(container, nodes) {
    const nameLabel = container.append('g')
        .selectAll('text')
        .data(nodes)
        .join('text')
        .text(d => d.name)
        .attr('font-size', 12)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', '#c5c4ca')
        .attr('class', 'name-label')

    const idLabel = container.append('g')
        .selectAll('text')
        .data(nodes)
        .join('text')
        .text(d => {
            if (!d.showId && d.logic === undefined)
                return ''
            if (d.name !== undefined)
                return d.id.toUpperCase()
            return d.logic
        })
        .attr('font-size', 12)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', '#c5c4ca')
        .attr('class', 'id-label')

    return [nameLabel, idLabel]
}