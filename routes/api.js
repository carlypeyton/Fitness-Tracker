//Require router and workout.js model
const router = require("express").Router();
const db = require("../models");

//Get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

//Create new workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });
});

//Post range
router.post("/api/workouts/range", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//Find workout by ID and update
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//Export Router
module.exports = router;