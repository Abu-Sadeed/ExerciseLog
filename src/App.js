import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar.component";
import ExerciseList from "./component/exercise-list.component";
import CreateExercise from "./component/create-exercise.component";
import CreateUser from "./component/create-user.component";
import EditExercise from "./component/edit-exercise.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/exercises/edit/:id" component={EditExercise} />
      <Route path="/exercises/add" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>

  );
}

export default App;
