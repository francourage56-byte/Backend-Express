import express from "express";

const app = express();

app.use(express.json());

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

app.get("/api/books", (req, res) => {
  res.status(200).json({
    message: "Books fetched successfully",
    data: "books",
  });
});

app.get("/api/books/:id", (req, res) => {
  console.log("getin books");
  const book = books.find((item) => item.id == req.params.id);

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
});

app.post("/api/books", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: req.body.title,
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book created successfully",
    data: newBook,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
