// CRUD helpers
const connectDB = require('./db');
const { ObjectId } = require('mongodb');

// creating
async function addBook(book) {
  const books =await connectDB();
  const result = await books.insertOne(book);
  console.log('Book added:', result.insertedId);       
}

// fetching
async function listBooks(){
    const books = await connectDB();
const allBooks = await books.find({}).toArray();
console.log ('All books:', allBooks);
}

// update
async function updateBook(id, updates) {
  const books = await connectDB();
  const result = await books.updateOne(
    { _id:new ObjectId(id) },
    { $set: updates }
  );
  console.log('Book updated:', result.modifiedCount);
}

// delete
async function deleteBook(id) {
  const books = await connectDB();
  const result = await books.deleteOne({ _id: new ObjectId(id) });
  console.log('Book deleted:', result.deletedCount);
}
module.exports ={addBook,listBooks,updateBook,deleteBook};