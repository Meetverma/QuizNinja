import mongoose from 'mongoose';
import { Quiz } from './models/Quiz.js';
import { Question } from './models/Question.js';

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhigyanchakraborty61:VYJAtIELhGjHkI9L@cluster0.4ixhrs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error to Database"));
db.once("open", async () => {
  console.log("DATABASE CONNECTED SUCCESSFULLY");

  try {
    await seed();
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
});

const seed = async () => {
  try {
    // Questions for the businessquiz
    const businessQuestions = [
      {
        question: 'What is the currency of Japan?',
        options: ['Yen', 'Dollar', 'Euro', 'Pound'],
        correctOptionIndex: 0,
        explanation: 'The currency of Japan is Yen.'
      },
      {
        question: 'Who is the founder of Amazon?',
        options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Mark Zuckerberg'],
        correctOptionIndex: 0,
        explanation: 'Jeff Bezos is the founder of Amazon.'
      },
      {
        question: 'Which company is known for its search engine?',
        options: ['Google', 'Facebook', 'Amazon', 'Microsoft'],
        correctOptionIndex: 0,
        explanation: 'Google is known for its search engine.'
      },
      {
        question: 'What does "CEO" stand for?',
        options: ['Chief Executive Officer', 'Chief Engineering Officer', 'Customer Experience Officer', 'Corporate Executive Officer'],
        correctOptionIndex: 0,
        explanation: 'CEO stands for Chief Executive Officer.'
      },
      {
        question: 'Which city is known as the financial capital of the world?',
        options: ['New York City', 'London', 'Tokyo', 'Hong Kong'],
        correctOptionIndex: 0,
        explanation: 'New York City is known as the financial capital of the world.'
      },
      {
        question: 'What is the largest e-commerce company in the world?',
        options: ['Amazon', 'Alibaba', 'eBay', 'Walmart'],
        correctOptionIndex: 1,
        explanation: 'Alibaba is the largest e-commerce company in the world.'
      },
      {
        question: 'Which tech company\'s headquarters is located in Cupertino, California?',
        options: ['Apple', 'Microsoft', 'Google', 'Facebook'],
        correctOptionIndex: 0,
        explanation: 'Apple Inc. has its headquarters located in Cupertino, California.'
      },
      {
        question: 'What does "NASDAQ" stand for?',
        options: ['National Association of Securities Dealers Automated Quotations', 'New York Stock Exchange', 'North American Securities Dealers Association', 'National Association of Securities and Derivatives'],
        correctOptionIndex: 0,
        explanation: 'NASDAQ stands for National Association of Securities Dealers Automated Quotations.'
      },
      {
        question: 'Who is the founder of Tesla?',
        options: ['Elon Musk', 'Bill Gates', 'Jeff Bezos', 'Mark Zuckerberg'],
        correctOptionIndex: 0,
        explanation: 'Elon Musk is the founder of Tesla.'
      },
      {
        question: 'Which country is home to the headquarters of the World Bank?',
        options: ['United States', 'United Kingdom', 'France', 'China'],
        correctOptionIndex: 0,
        explanation: 'The headquarters of the World Bank is located in the United States (Washington, D.C.).'
      }
    ];

    // Save all the questions to the database and collect their _ids
    const savedQuestions = await Question.insertMany(businessQuestions);

    // Get the _ids of saved questions
    const questionIds = savedQuestions.map(question => question._id);

    // Create the quiz object with the saved questions' _ids
    const businessData = new Quiz({
      title: "businessquiz",
      questions: questionIds
    });

    // Save the quiz object to the database
    await businessData.save();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};
