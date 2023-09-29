class LinkedList{
    constructor() {
        this.head = null;
    }
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            // If the list is empty, the new node becomes the head.
            this.head = newNode;
        } else{
            let current = this.head;
            while(current.nextNode != null){
                // Traverse the list to find the last node.
                current = current.nextNode;
            }
            //Set the nextNode of the last node to the new node.
            current.nextNode = newNode;
        }
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size(){
        let count = 0;
        let current = this.head;
        while(current != null){
            current = current.nextNode;
            count++;
        }
        return count;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        let current = this.head;
        while(current.nextNode != null){
            current = current.nextNode;
        }
        return current;
    }

    at(index){
        if(index < 0){
            return null;
        }
        let current = this.head;
        for(let i =0; i<index; i++){
            current = current.nextNode;
        }
        return current;
    }

    pop(){
        if(!this.head){
            return;
        }

        if(!this.head.nextNode){
            // If there's only one node in the list, set the head to null.
            this.head = null;
            return;
        }

        let current = this.head;
        while(current.nextNode.nextNode != null){
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value){
        let current = this.head;
        while(current.nextNode != null){
            if(current.value === value){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value){
        let current = this.head;
        let count = 0;
        while(current != null){
            if(current.value === value){
                return count;
            }
            current = current.nextNode;
            count++;
        }
        return -1;
    }

    toString(){
        let current = this.head;
        let result = '';
        while (current != null){
            result += `(${current.value}) ->`;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }
}

class Node{
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}