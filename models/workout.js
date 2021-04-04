const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Please enter workout type.",
        trim: true
      },
      name: {
        type: String,
        required: "Please enter workout name.",
        trim: true
      },
      distance: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 0,
        required: "Please enter workout duration (minutes)."
      },
      weight: {
        type: Number,
        default: 0,
      },
      sets: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;