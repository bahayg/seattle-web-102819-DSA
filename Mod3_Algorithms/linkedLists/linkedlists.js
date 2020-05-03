class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.root = null
  }
  addNode(data){
    let node = new Node(data)
    if(this.root === null){
     return this.root = node
    }
    let current = this.root
    while(current.next){
      current = current.next 
    }
    current.next = node;
    return this.root
  }
  removeNodeEnd(){
    if(this.root === null) return false 
    if(this.root.next === null){
      this.root = null
    }
    let current = this.root
    while(current.next.next){
      current = current.next
    }
    console.log(current)
    current.next = null
    return this.root
  }
  removeNode(data){
    if(this.root === null) return false 
    let current = this.root 
    while(current.next.data !== data && current !== null){
      current = current.next 
    }
    if(!current) return false 
    current.next = current.next.next
    return this.root
  }
  removeNodeAtK(){

  }
  removeOddNodes(){

  }
  listLength(){

  }
  printEveryNodeValue(){

  }
  removeDups(){

  }
  
  isCircular(){
    
  } 

}

let ll = new LinkedList()
ll.addNode('a')
ll.addNode('b')
ll.addNode('c')
ll.removeNode('b')