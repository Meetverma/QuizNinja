import { MongoClient } from 'mongodb';
import { Quiz } from './models/Quiz.js';
import { Question } from './models/Question.js';


// MongoDB Connection URI
const uri = "mongodb+srv://abhigyanchakraborty61:VYJAtIELhGjHkI9L@cluster0.4ixhrs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function seed() {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    const db = client.db('QuizNinja');

    // First, create the question object
    const sportsQuestion = new Question({
      question: 'Which sport does Cristiano Ronaldo play?',
      options: ['Tennis', 'Golf', 'Basketball', 'Football'],
      correctOptionIndex: 3,
      explanation: 'Ronaldo is the Goat'
    });

    // Save the question object to the database
    const savedQuestion = await db.collection('Question').insertOne(sportsQuestion);

    console.log("NEW saved question ka id hai ",savedQuestion.insertedId);
    // Create the quiz object with the saved question's _id

    // const sportsData = new Quiz({
    //   title: "sportsquiz",
    //   questions: [savedQuestion.insertedId] // Use the _id of the saved question
    // });

    const existingQuiz = await db.collection('Quiz').findOne({ title: 'sportsquiz' });


    await db.collection('Quiz').updateOne(
      { _id: existingQuiz._id },
      { $push: { questions: savedQuestion.insertedId } }
    );


    // Save the quiz object to the database
    // await db.collection('Quiz').insertOne(sportsData);

    // Close the connection
    await client.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Call the function to seed the database
seed();
