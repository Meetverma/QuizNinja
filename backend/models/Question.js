import mongoose from 'mongoose';

const { Schema } = mongoose;

const questionSchema = new Schema({
  // quizId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Quiz',
  //   required: true
  // },
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctOptionIndex: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: function(value) {
        return value < this.options.length;
      },
      message: 'Correct option index is out of bounds.'
    }
  },
  explanation: {
    type: String
  }
});

const Question = mongoose.model('Question', questionSchema);

export { Question };
