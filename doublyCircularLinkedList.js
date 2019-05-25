function ClinkedList() {
  this.head = null;
}

ClinkedList.prototype.createNode = function(id) {
  var newNode = {};
  newNode.id = id;
  newNode.card = [];
  newNode.next = null;
  newNode.previous = null;
  return newNode;
}

ClinkedList.prototype.push = function(id) {
  var newNode = this.createNode(id);
  if (!this.head) {
    newNode.next = newNode.previous = newNode;
    this.head = newNode;
  } else {
    var last = this.head.previous;
    newNode.next = this.head;
    newNode.previous = last;
    last.next = newNode;
    this.head.previous = newNode;
  }
}

module.exports.ClinkedList = ClinkedList;
