const array = [
  {index: 0, id: 11, type: "https://cdn2.thecatapi.com/images/ei0.jpg%22%7D"},
  {index: 1, id: 2, type: "https://cdn2.thecatapi.com/images/7h1.jpg%22%7D"},
  {index: 2, id: 0, type: "https://cdn2.thecatapi.com/images/20e.png%22%7D"},
  {index: 3, id: 3, type: "https://cdn2.thecatapi.com/images/7h1.jpg%22%7D"},
  {index: 4, id: 9, type: "https://cdn2.thecatapi.com/images/e30.jpg%22%7D"},
  {index: 5, id: 10, type: "https://cdn2.thecatapi.com/images/ei0.jpg%22%7D"},
  {index: 6, id: 5, type: "https://cdn2.thecatapi.com/images/bdd.jpg%22%7D"},
  {index: 7, id: 4, type: "https://cdn2.thecatapi.com/images/bdd.jpg%22%7D"},
  {index: 8, id: 12, type: "https://cdn2.thecatapi.com/images/MTY1MjExMA.jpg%22%7D"},
  {index: 9, id: 6, type: "https://cdn2.thecatapi.com/images/c2f.jpg%22%7D"},
  {index: 10, id: 8, type: "https://cdn2.thecatapi.com/images/e30.jpg%22%7D"},
  {index: 11, id: 14, type: "https://cdn2.thecatapi.com/images/kL7-Jkqgg.jpg%22%7D"},
  {index: 12, id: 13, type: "https://cdn2.thecatapi.com/images/MTY1MjExMA.jpg%22%7D"},
  {index: 13, id: 7, type: "https://cdn2.thecatapi.com/images/c2f.jpg%22%7D"},
  {index: 14, id: 1, type: "https://cdn2.thecatapi.com/images/20e.png%22%7D"},
  {index: 15, id: 15, type: "https://cdn2.thecatapi.com/images/kL7-Jkqgg.jpg%22%7D"}
]

function potatoes(array) {
  array.map((item) => {
    console.log(item.index)
    console.log(item.id)
    console.log(item.type)
  })
}

potatoes(array)
