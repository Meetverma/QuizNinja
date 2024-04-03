import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors'

const app = express();
const port = 3000;
app.use(cors());
// MongoDB Connection URI
const uri = "mongodb+srv://abhigyanchakraborty61:VYJAtIELhGjHkI9L@cluster0.4ixhrs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware to parse JSON requests

app.use(express.json());

// Connect to MongoDB


// Endpoint to retrieve quiz data by title
app.get('/quiz/sportsquiz', async (req, res) => {
  const client = await MongoClient.connect(uri);
  const db = client.db('QuizNinja');
  console.log("Endpoint got hit");
  try {
    // Find the quiz data with the specified title
    const quizdata = await db.collection('Quiz').findOne({ title: 'sportsquiz' });

    if (!quizdata) {
      await client.close();
      return res.status(404).json({ message: 'Quiz data not found' });
    }

    const questionIds = quizdata.questions //return a [] of ObjectId()

    // console.log("the question id is: "+questionId);

    // Find questions related to the quiz
    let questionsArray = []; // This will store all the questions

    // Assuming questionId.array is the array of ObjectIds
    for (const element of questionIds) {
      const questionsCursor = await db.collection("Question").find({_id: element});
      const questions = await questionsCursor.toArray();
      questionsArray=questionsArray.concat(questions);
      // questionsArray.push(questions)
    }
    
    // Now questionsArray contains all the questions
    console.log(questionsArray);
    

    // const questionsCursor = await db.collection("Question").find({_id:questionId});
    // console.log(questionsCursor);
    // const questions = await questionsCursor.toArray();

    // Close the connection
    await client.close();

    // If no questions are found, return 404
    if (questionsArray.length === 0) {
      return res.status(404).json({ message: 'Question data not found' });
    }

    // Otherwise, return the questions
    res.json(questionsArray);
  } catch (error) {
    console.error('Error fetching sports quiz data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
