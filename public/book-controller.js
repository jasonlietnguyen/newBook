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
      .then(function () {
        draw()
        // return bookService.drawBook();
      })
      .then(function (data) {
        draw(data);
      })
      .catch(function (noWeather) {
      });
  }


  function draw() {
    debugger
    var data = bookService.getBook()
    console.log(data)
    var template = ''
    var elem = document.getElementById("container")
    for (var i = 0; i < data.length; i++) {
      template += `
      <h1>${data[i].title}</h1>
      <h1>${data[i].aurthor}</h1>
      <h1>${data[i].publish}</h1>
      <h1>${data[i].rating}</h1>
        `
    }
    return elem.innerHTML = template
  }

  draw()
}