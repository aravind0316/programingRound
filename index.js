class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertFirst(data){
        this.head = new Node(data,this.head)
    }
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertFirst(4);
ll.insertFirst(5);
ll.insertFirst(6);


function reverseList(inp){
    let prev =null;
    let next = null;

    while(inp != null){
        next = inp.next;
        inp.next = prev;
        prev = inp;
        inp = next;
    }
    console.log(prev)
    return prev;
}

reverseList(ll);