import mongoose from 'mongoose';
import { Quiz } from './models/Quiz.js';
import { Question } from './models/Question.js';

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhigyanchakraborty61:VYJAtIELhGjHkI9L@cluster0.4ixhrs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error to Database"));
db.once("open", async () => {
  console.log("DATABASE CONNECTED SUCCESSFULLY");

  try {
    // seed()
    console.log('Database seeded successfully!');
    // const d = await db.collections.findOne({title:"sportsquiz"})
    const qn = await db.collection('QuizNinja')
    console.log(sq);



    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
});

const seed = async () => {
  try {
    // First, create the question object
    const sportsQuestion = new Question({
      question: 'Which sport does Serena Williams play?',
      options: ['Tennis', 'Golf', 'Basketball', 'Football'],
      correctOptionIndex: 0,
      explanation: 'Serena Williams is a professional tennis player, widely regarded as one of the greatest of all time.'
    });

    // Save the question object to the database
    const savedQuestion = await sportsQuestion.save();

    // Create the quiz object with the saved question's _id
    const sportsData = new Quiz({
      title: "sportsquiz",
      questions: [savedQuestion._id] // Ensure to use the _id of the saved question
    });

    // Save the quiz object to the database
    await sportsData.save();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};