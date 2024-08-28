'use strict';

const booksStorage = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    booksCount: 5,
    bookingsCount: 10,
  },
  {
    author: 'Bill Gates',
    title: 'Slow Horses',
    booksCount: 12,
    bookingsCount: 21,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    booksCount: 0,
    bookingsCount: 5,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    booksCount: 2,
    bookingsCount: 7,
  },
  {
    author: 'Taras Shevchenko',
    title: 'Kobzar',
    booksCount: 0,
    bookingsCount: 10,
  },
];

/**
 * @param {string} author
 * @return {object[]}
 */
// function getAvailableBooks(author) {
//   const bookedBooks = booksStorage.filter(book => book.booksCount > 0);

//   if (author) {
//     return bookedBooks
//       .filter(book => book.author === author)
//       .map(book => ({ author: book[author], title: book[title] }));
//   }

//   return bookedBooks.map(book => ({ author: book[author], title: book[title] }));
// }

function getAvailableBooks(author) {
  if (author) {
    return booksStorage
      .filter(book => book.author === author)
      .map(book => ({ author: book.author, title: book.title }));
  }

  return booksStorage
    .filter(book => book.booksCount > 0)
    .map(book => ({ author: book.author, title: book.title }));
}

// examples
// #1
console.log(getAvailableBooks('Bill Gates'));
// ===> returns
// [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//   },
//   {
//     author: 'Bill Gates',
//     title: 'Slow Horses',
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//   },
// ];

// #2
console.log(getAvailableBooks('Taras Shevchenko'));
// ===> returns
// [
//   {
//     author: 'Taras Shevchenko',
//     title: 'Kobzar',
//   },
// ];
