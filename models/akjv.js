const mongoose = require ( "mongoose")
const AKJV = mongoose.Schema({
    verse_id : Number,
    verse : String,
    book_no : Number,
    chapter_no : Number,
    verse_no : Number,
    book : String,
});

module.exports = mongoose.model("akjv", AKJV, "akjv")