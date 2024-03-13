import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Courses from "./components/courses/Courses";

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    fetch('./courses.json')
    .then(res => res.json())
    .then(courses => setCourses(courses))
  },[])
  return (
    <div className="bg-slate-200">
      <h1 className="text-3xl text-center py-10">Course Registration</h1>
      <div className="grid grid-cols-12 justify-between gap-3">
        <div className="grid col-span-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Courses courses={courses}/>
        </div>
        <div className="col-span-2">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
