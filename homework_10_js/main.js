
const products = [
    {
        title : "Harry Poter 1-7",
        author: "J.K. Rowling",
        year: 1997,
        pages: 4192
     },
     {
        title : "Der Fremde",
        author: "Albert Campus",
        year: 1955,
        pages: 160
     },
     {
        title : "Der Prozess",
        author: "Franz Kafka",
        year: 1925,
        pages: 208
     },
     {
        title : "Der kleine Prinz",
        author: "Antonie de Saint-Exupery",
        year: 1955,
        pages: 92
     },
     {
        title : "Früchte des Zorns",
        author: "John Stenbeck",
        year: 1939,
        pages: 530
     },

]
console.log(products);

const book = prompt("Which book to add to the list?");
let newbook = {
    title : book,
    author: null,
    year: null,
    pages: null
};
products.push(newbook)