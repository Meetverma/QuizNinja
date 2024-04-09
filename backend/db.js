import express, { application } from 'express';
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

app.post('/login', async (req, res) => {
  console.log("Login API hit")
  const { email, password } = req.body;
  const client = await MongoClient.connect(uri);
  const db = client.db('QuizNinja');
  try {
    // Find user by email in the users collection
    const user = await db.collection('users').findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password with provided password
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // If passwords match, return success message
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate name, email, and password
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db('QuizNinja');

    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      await client.close();
      return res.status(400).json({ message: 'User already exists' });
    }

    // Insert new user into the database
    await db.collection('users').insertOne({ name, email, password });

    // Close the connection
    await client.close();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/user/:email', async (req, res) => {
  const email = req.params.email;
  console.log("user profile api hit")
  console.log("Email: ", email)

  const client = await MongoClient.connect(uri);
  const db = client.db('QuizNinja');

  try {
    // Fetch user profile data from the database based on email
    const userProfile = await db.collection('userprofile').findOne({ email });

    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    res.json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
