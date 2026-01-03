// Renders the node graph with the given data.

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

import './CSGraph.css'
import setNodePositions from '../../../utils/svg/nodePositions'
import setGraphDefs from '../../../utils/svg/graphDefinitions'
import setNodeAttributes from '../../../utils/svg/nodeAttributes'
import setLinkAttributes from '../../../utils/svg/linkAttributes'
import setLabelAttributes from '../../../utils/svg/labelAttributes'
import setSimulation from '../../../utils/svg/graphSimulation'
import nodeSelectHandler from '../../../utils/graph/nodeSelectHandler'

import assignNodeProps from '../../../utils/graph/assignNodeProps'

export default function NodeGraph({ nodes }) {
    const svgRef = useRef(null)
    const links = []

    // Imports link information from nodes.
    for (const node of nodes) {
        const source = node.id
        for (const edge of node.edges) {
            const link = {
                source: source,
                target: edge
            }
            links.push(link)
        }
    }

    // Pre-computes each nodes' positions.
    setNodePositions(nodes)
    assignNodeProps(nodes)

    useEffect(() => {
        // Root SVG.
        const svg = d3
            .select(svgRef.current)
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('class', 'svg-root')

        svg.selectAll('*').remove() // Cleanup on rerender.
        svg.on('click', nodeSelectHandler(nodes))

        // Container under root for panning and zoom.
        const container = svg.append('g')
            .attr('class', 'graph-container')
        const zoom = d3.zoom()
            .scaleExtent([0.25, 4])
            .on('zoom', event => {
                container.attr('transform', event.transform)
            })
        svg.call(zoom)

        // Initializes graph simulation.
        const simulation = d3.forceSimulation(nodes)
        // Creates edges between nodes based on edges[], only logical(not visible).
        .force('link',
            d3.forceLink(links)
            .id(d => d.id)
        )

        // Sets SVG attributes.
        setGraphDefs(svg)
        const link = setLinkAttributes(container, links)

        const nodeHeight = 60
        const node = setNodeAttributes(container, nodes, nodeHeight)

        const [nameLabel, idLabel] = setLabelAttributes(container, nodes)

        // Dynamically scales width according to text length.
        const padding = 20;
        nameLabel.each(function(d) {
            const textWidth = this.getBBox().width
            d.dynamicWidth = Math.max(nodeHeight, textWidth + padding)
        })
        node.attr('width', d => d.dynamicWidth)

        // Graph simulation tick update.
        setSimulation(simulation, nodeHeight, [link, node, nameLabel, idLabel])

        return () => simulation.stop()
    }, [])

    return <svg ref={svgRef} id='svg-elem'/>
}
