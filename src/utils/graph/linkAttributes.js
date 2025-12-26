export default function setLinkAttributes(container, links) {
    const link = container.append('g')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.5)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', 2)
        .attr('marker-end', 'url(#arrow)')

    return link
}