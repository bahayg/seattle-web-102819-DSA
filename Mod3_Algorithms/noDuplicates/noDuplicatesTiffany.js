function addNodeAtIndex(data, index, ll){
    let node = new Node(data)
    if (ll.root === null && index !== 0) {
      return null
    } else if (index >= 100) {
      return null
    }
    let i = 0
    let current = ll.root
    //move through the list up to BEFORE the index!!
    while (i < index-1 && current != null) {
      current = current.next;
      i++;
    }
    if (i !== index -1 ){
      //if our list was short!
      return null
    }
    if (i == index-1) {
      //if we are ready to add node at the NEXT index (which is desired index)
      node.next = current.next
      current.next = node
      return ll.root
    } else {
      return null
    }
    return false
  }