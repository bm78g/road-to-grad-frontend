// Factory function for handling clicking on either a node or the background.

import * as d3 from 'd3'

import getPathTo from '../graph/getRequirementPath'

export default function nodeSelectHandler(nodes) {
    return function (event, d) {
        event.stopPropagation()

        // Removes selected effect from all nodes and links.
        const nonSelected = d3.selectAll('.course-node').classed('selected', false)
        nonSelected
            .attr('stroke-width', 0.4)
            .attr('stroke-opacity', 0.5)
            .attr('stroke', '#AAAAAA')
        d3.selectAll('.link').classed('selected', false)
            .attr('stroke-width', 2)
            .attr('stroke-opacity', 0.1)
            .attr('stroke', '#999')

        // Applies 'selected' class to all related nodes.
        const selected = d3.select(this)
        selected.classed('selected', true)

        if (d === undefined)
            return
        // Adds an effect to all nodes with the 'selected' class.
        const coursePath = getPathTo(d.id, nodes)
        for (const course of coursePath) {
            const selector = `.${course.id.toLowerCase()}`
            if (selector !== '.') {
                const selected = d3.selectAll(selector).classed('selected', true)
                selected
                    .attr('stroke-width', 3)
                    .attr('stroke-opacity', 1)
                    .attr('stroke', '#CCCCCC')
            }
        }
    }
}