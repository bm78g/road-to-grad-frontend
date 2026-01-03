// Assigns 'showId' and 'isDir' properties to nodes if they are not already assigned.

export default function assignNodeProps(nodes) {
    let modified = nodes
    // Assigns showId without overriding pre-existing values.
    modified = modified.map(node => {
        if (!('showId' in node)) {
            return {
                ...node,
                showId: true
            }
        }
        return node
    })
    modified = modified.map(node => {
        if (!('isDir' in node)) {
            return {
                ...node,
                isDir: false
            }
        }
        return node
    })
    return modified
}