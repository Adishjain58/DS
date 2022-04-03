package Graph;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Graph<T> {
    int length;
    Map<T, List<T>> map;

    Graph() {
        this.length = 0;
        this.map = new HashMap<>();
    }

    void addVertex(T data) {
        List<T> list = new ArrayList<>();
        this.map.put(data, list);
        this.length++;
    }

    void addEdge(T node1, T node2) {
        if (this.map.get(node1) != null && this.map.get(node2) != null) {
            map.get(node1).add(node2);
            map.get(node2).add(node1);
        } else {
            System.out.println("Either one or both of the nodes are not present in the graph");
        }
    }

    void showConnections() {
        for (Map.Entry<T, List<T>> entry : this.map.entrySet()) {
            List<T> adjacent = map.get(entry.getKey());
            StringBuilder connections = new StringBuilder();
            for (T connection : adjacent) {
                connections.append("" + connection + " ");
            }
            System.out.println(entry.getKey() + "-->" + connections.toString());
        }

    }

    public static void main(String[] args) {
        Graph<String> myGraph = new Graph<String>();
        myGraph.addVertex("0");
        myGraph.addVertex("1");
        myGraph.addVertex("2");
        myGraph.addVertex("3");
        myGraph.addVertex("4");
        myGraph.addVertex("5");
        myGraph.addVertex("6");
        myGraph.addEdge("3", "1");
        myGraph.addEdge("3", "4");
        myGraph.addEdge("4", "2");
        myGraph.addEdge("4", "5");
        myGraph.addEdge("1", "2");
        myGraph.addEdge("1", "0");
        myGraph.addEdge("0", "2");
        myGraph.addEdge("6", "5");

        myGraph.showConnections();
        // Answer:
        // 0-->1 2
        // 1-->3 2 0
        // 2-->4 1 0
        // 3-->1 4
        // 4-->3 2 5
        // 5-->4 6
        // 6-->5
    }

}
