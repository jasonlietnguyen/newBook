function BookController() {
  var bookService = new BookService()

  this.createBook = function (e) {
    e.preventDefault()
    var book = {
      title: event.target.title.value,
      aurthor: event.target.aurthor.value,
      publish: event.target.publish.value,
      rating: event.target.rating.value
    }

    bookService.createBook(book)
  }


}