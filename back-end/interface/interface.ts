export interface GraphRoute {
    [node: number]: {
        [neighbor: number]: number;
    };
}

export function addNode(graph: GraphRoute, node: number): void {
    if (!graph[node]) {
        graph[node] = {};
    }
}

export function addEdge(graph: GraphRoute, from: number, to: number, weight: number): void {
    addNode(graph, from);
    addNode(graph, to);
    graph[from][to] = weight;
}

export interface Locale {
    x: number;
    y: number;
};