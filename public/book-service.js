function BookService() {
  var url = 'http://localhost:4545/books'

  this.createBook = function (book) {
    $.post(url, book).then(function (data) {
      console.log(data)
    })
  }
  
  this.getBook = function () {
    $.get(url).then(function (books) {
      return books
    })
  }

}