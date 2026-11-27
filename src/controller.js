let books = [
  {
    id: 1,
    title: "book 1",
  },

  {
    id: 2,
    title: "book 2",
  },

  {
    id: 3,
    title: "book 3",
  },
];

const getBooks = async (req, res) => {
  res.status(200).json({
    message: "Books fetched successfully",
    data: books,
  });
};

const getBookById = async (req, res) => {
  const book = books.find(item => item.id == req.params.id);

  if (book) {
    res.status(200).json({
      message: "Books fetched successfully",
      data: book,
    });
  } else {
    req.status(404).json({
      message: "Books not found",
    });
  }
};

const createBook = async (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: req.body.title,
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book created successfully",
    data: newBook,
  });
};

const updateBook = async (req, res) => {
  const findBook = books.find((item) => item.id === Number(req.params.id));

  if (findBook) {
    findBook.title = req.body.title || findBook.title;

    res.status(200).json({
      message: "Book update successfully",
      data: findBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
};

const deleteBook = async (req, res) => {
  const findBook = books.find((item) => item.id === Number(req.params.id));

  if (findBook) {
    const deleteBook = books.splice(findBook, 1);

    res.status(204);
  } else {
    (res.status(404),
      json({
        message: "Book not found",
      }));
  }
};

export{
    getBooks,
    getBookById,
    updateBook,
    createBook,
    deleteBook
}