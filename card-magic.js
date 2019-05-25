const scanf = require('scanf');
const ClinkedList = require('./doublyCircularLinkedList.js').ClinkedList;

const createDeck = () => {
  var deck = [];
  for (var i = 0; i < 21; i++) {
    var num = randomize(deck);
    deck.push(num);
  }
  return deck;
}

const cardMagic = () => {
  var deck = createDeck();
  for (var i = 0; i < 4; i++) {
    var head = distributeCard(deck);
    print(head);
    console.log("\nWhich Group has your card? ");
    let group = scanf('%d');
    head = changeHead(head, group);
    deck = takeBackTheCards(head);
  }
  console.log("The moment of the truth.. are you READY ???");
  scanf('%s');
  console.log("Easy Guess, your card is.... [",deck[10],"]")
}

const distributeCard = (deck) => {
  var head = createCLink();
  for (var i = 0; i < deck.length; i++) {
    head.card.push(deck[i]);
    head = head.next;
  }
  return head;
}
function createCLink () {
  var Clink = new ClinkedList();
  Clink.push(1);
  Clink.push(2);
  Clink.push(3);
  return Clink.head;
}

function takeBackTheCards (head) {
  var deck = [];
  var temp = head;
  do {
    deck = deck.concat(temp.card);
    temp = temp.next;
  } while (temp != head);
  return deck;
}

function print(head) {
  var temp = head;
  var array = [];
  do {
    array.push(temp);
    temp = temp.next;
  } while (temp != head);
  console.log("________________________\n");
  console.log("Group1\t|Group2\t|Group3\t|\n________________________")
  for (var i = 0; i < head.card.length; i++) {
    console.log(array[0].card[i]+ '\t|' + array[1].card[i] + '\t|' +array[2].card[i] + '\t|');
  }
  console.log("________________________");
}
function randomize(array){
  var num = generateRandomNum(1, 200);
  if (array.includes(num)) {
    num = randomize(array);
  }
  return num;
}
function generateRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function changeHead(head, num) {
  var temp = head;
  for (var i = 1; i < num; i++) {
    temp = temp.next;
  }
  head = temp.previous;
  return head;
}
module.exports.cardMagic = cardMagic;