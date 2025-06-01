// connect to MongoDB and export the collection
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        return client.db('bookstore').collection('books');
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

module.exports = connectDB;
