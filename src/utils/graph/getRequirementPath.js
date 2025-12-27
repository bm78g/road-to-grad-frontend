function getNode(id, nodes) {
    return nodes.find(n => n.id === id)
}

// Returns an array of all associated nodes with the clicked course.
export default function getPathTo(id, nodes) {
    if (nodes === undefined)
        return

    const courseObj = getNode(id, nodes)
    let coursePath = []
    
    pushRequirements(courseObj, coursePath, nodes)  // Returns an array of array of requirement courses from each pre-requisite courses.
    coursePath = coursePath.flat()                  // Array.flat() to get a flat list of all requirements.
    coursePath.push(nodes.find(n => n.id === id))

    return coursePath
}

// Recursive function that visits and logs all pre-requisite nodes.
function pushRequirements(node, coursePath, nodes) {
    const prevNodes = nodes.filter(n => {
        return n.edges.includes(node.id)
    })
    coursePath.push(prevNodes)
    for (const prev of prevNodes) {
        pushRequirements(prev, coursePath, nodes)
    }
}