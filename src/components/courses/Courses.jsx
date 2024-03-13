import Course from "./Course";

function Courses({courses,handleSelect}) {
    return (
        <>
            {
                courses.map((course,i) => <Course key={i} handleSelect={handleSelect}  course={course} />)
            }
 
        </>
    );
}

export default Courses;