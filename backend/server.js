import express from "express";
import cors from "cors";

const app = express();

// app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "This is a sample Joke",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "This is another sample Joke",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "This is yet another sample Joke",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "This is yet another sample Joke",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "This is yet another sample Joke",
    },
  ];

  res.send(jokes); // Use json-formatter to see nicer output for bigger apis
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
