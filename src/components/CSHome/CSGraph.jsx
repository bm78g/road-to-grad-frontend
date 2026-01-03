import NodeGraph from "../Graph/NodeGraph"

export default function CSGraph() {
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

    return (
        <NodeGraph nodes={csHomeGraph} />
    )
}