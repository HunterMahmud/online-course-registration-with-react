import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Courses from "./components/courses/Courses";

let totalCreditRemaining = 15;

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((courses) => setCourses(courses))
      .catch((err) => console.log("An Error occurt when fatching data", err));
  }, []);
  const [carts, setCarts] = useState([]);
  const handleSelect = (course) => {
    const isExists = carts.find((item) => item.id === course.id);
    if(totalCreditRemaining-course.credit<0){
      alert("Total credit limit exceeded.");
    }
    else if (isExists) {
      alert("This course already Selected.");
    } else {
      totalCreditRemaining-=course.credit;
      setCarts([...carts, course]);
    }
  };
  return (
    <div className=" w-[95%] mx-auto">
      <h1 className="text-3xl text-center py-10">Course Registration</h1>
      <div className="grid grid-cols-12 justify-between gap-3">
        <div className="grid h-min col-span-12 lg:col-span-9 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Courses courses={courses} handleSelect={handleSelect} />
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-2 mb-7">
          <Card carts={carts} />
        </div>
      </div>
    </div>
  );
}

export default App;
