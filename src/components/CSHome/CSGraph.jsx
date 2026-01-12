// Main component for CS Graphs.

import { useEffect, useState } from "react"
import axios from "axios"

import NodeGraph from "../Graph/NodeGraph"

export default function CSGraph() {
    // Graph for home page.
    const csHomeGraph = [
        {
            id: 'major',
            name: 'Major Requirements',
            requirement: {},
            edges: [],
            dist: 0,
            showId: false,
            isDir: true
        },
        {
            id: 'tech',
            name: 'Technical Electives',
            requirement: {},
            edges: [],
            dist: 0,
            showId: false,
            isDir: true
        },
        {
            id: 'debug',
            name: 'Non-dir node for debug',
            requirement: {},
            edges: [],
            dist: 0,
            showId: true,
            isDir: false
        }
    ]

    // Graph for course data.
    const baseUrl = 'http://localhost:3001/api/catalog/cs'
    const [csGraph, setCsGraph] = useState()

    useEffect(() => {
        axios.get(baseUrl).then(res => {
            setCsGraph(res.data)
        })
    }, [])

    const changeGraph = (id) => {
        setCsGraphs(prev => 
            prev.map(graph => ({
                ...graph,
                visible: graph.id === id
            }))
        )
    }

    return (
        <>
            {csGraph ? (
                <div id="graph-container">
                    <NodeGraph nodes={ csGraph } />
                </div>
            ) : (
                'Loading...'
            )}
        </>        
    )
}