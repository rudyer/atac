import { addEdge, GraphRoute, Locale } from "../interface/interface";

function findNextRoute(graph: GraphRoute, current: number, visited: Set<number>) {
    let nearest = null;
    let nearestDistance = Infinity;

    for (const neighbor in graph[current]) {
        if (!visited.has(parseInt(neighbor)) && graph[current][neighbor] < nearestDistance) {
            nearest = parseInt(neighbor);
            nearestDistance = graph[current][neighbor];
        }
    }

    return nearest;
}

function getRoute(graph: GraphRoute, start: number) {
    const visited = new Set<number>();
    const track = [start];
    let current = start;
    let totalDistance = 0;

    visited.add(start);

    while (visited.size < Object.keys(graph).length) {
        const nearest = findNextRoute(graph, current, visited);

        if (nearest !== null) {
            totalDistance += graph[current][nearest];
            current = nearest;
            track.push(current);
            visited.add(current);
        } else {
            break;
        }
    }

    return { track, totalDistance };
}


function calculateDist(x1: number, y1: number, x2: number, y2: number) {
    var x = x1 - x2;
    var y = y1 - y2;
    if (x < 0) {
        x = -x;

    } if (y < 0) {
        y = -y;
    }
    return x + y;
}
function createDataList(data: Locale[]) {
    var dist = Array.from<unknown, number[]>({ length: data.length + 1 }, () => []);
    for (let index = 0; index < data.length; index++) {
        const calculate: number = data[index].x + data[index].y;
        dist[0].push(calculate)
    }
    for (let index = 0; index < data.length; index++) {
        for (let j = 0; j < data.length; j++) {
            const calculate = calculateDist(data[index].x, data[index].y, data[j].x, data[j].y);
            dist[index + 1].push(calculate)
        }

    }
    return dist;
}

export function getRouteUsers(users: Locale[]): number[] {
    const dataList = createDataList(users);
    const dataGraph: GraphRoute = {};
    dataList.forEach((row, i) => {
        row.forEach((weight, j) => {
            if (weight !== 0) {
                addEdge(dataGraph, i, j + 1, weight)
            }
        });
    });
    const result = getRoute(dataGraph, 0);
    return result.track;
}
