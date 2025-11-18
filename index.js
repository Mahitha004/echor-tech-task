const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/transform", (req, res) => {
  const { sentence } = req.body;

  if (!sentence) {
    return res.status(400).json({ error: "Sentence is required" });
  }

  const words = sentence.trim().split(/\s+/);
  const wordCount = words.length;
  const uniqueWords = [...new Set(words.map(w => w.toLowerCase()))];
  const reversedSentence = words.reverse().join(" ");

  res.json({
    word_count: wordCount,
    unique_words: uniqueWords,
    reversed_sentence: reversedSentence
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
