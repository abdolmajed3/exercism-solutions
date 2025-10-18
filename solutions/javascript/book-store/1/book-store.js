//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let price = books.length * 800
  let discounts = {5: .25, 4: .2, 3: .1, 2:.05}
  let bookset = []

  while (books.length > 0) {
    bookset.push(new Set(books).size)
    for (let book of new Set(books)) {
      books.splice(books.indexOf(book), 1)
    }
  }
  while (bookset.includes(3) && bookset.includes(5)) {
    bookset.splice(bookset.indexOf(3), 1)
    bookset.splice(bookset.indexOf(5), 1)
    bookset.push(4, 4)
  }
  return price - bookset.reduce((prev, curr) => prev + (discounts[curr] || 0) * 800 * curr, 0)
}