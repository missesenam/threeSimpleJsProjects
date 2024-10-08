let bestSellingBooks = [
    { 
        title: "Don Quixote",
        author: "Miguel de Cervantes" 
    },
    { 
        title: "A Tale of Two Cities", author: "Charles Dickens"
    },
    { 
        title: "The Lord of the Rings", author: "J.R.R. Tolkien"
    },
    { 
        title: "The Little Prince", author: "Antoine de Saint-Exupéry"
    },
    { 
        title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling"
    },
    { 
        title: "The Hobbit", author: "J.R.R. Tolkien"
    },
    { 
        title: "And Then There Were None", author: "Agatha Christie"
    },
    { 
        title: "Dream of the Red Chamber", author: "Cao Xueqin"
    },
    { 
        title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis"
    },
    { 
        title: "The Da Vinci Code", author: "Dan Brown"
    }
];

let booksBox = document.getElementById('books')
const bestSellingBooksname = bestSellingBooks.map(book =>{
    // return book.author 
    return '<div>'
     + 
    '<h1>' + '<span>' +'Title: '+'</span>' + book.title + '<h1>' 
    + '\n' +
    '<h2>' + '<span>' +'Author: '+'</span>'  + book.author + '</h2>'
     + 
     '</div>'
})
booksBox.innerHTML = bestSellingBooksname.join('\n')