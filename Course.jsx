import React from "react";
const Course=(props)=>{
    // return <h1>hello</h1>
    if (props.courseDetails.CourseAvail===true)
    {  
        return(
        <>
        <h1>{props.courseDetails.CourseName}</h1>
        <h2>{props.courseDetails.CourseDuration}</h2>
        <button style={{color:"green"}}>Available</button>
        </>
        )
    } 


// else{
//     return(
//         <>
//         <h1>{props.CourseDetails.CourseName}</h1>
//         <h2>{props.CourseDetails.CourseDuration}</h2>
//         <button style={{color:"red"}}> Not Available</button>
//         </>
//         )
//     } 


}
export default Course;
