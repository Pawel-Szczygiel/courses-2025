import React from 'react'
import Course from './Course'

const Courses = ({ courses }) => {
  return (
    <section>
       <div className='title'>
            <h2>our courses</h2>
            <div className='underline'></div>
        </div> 
        <div>
            {courses.map(course => <Course key={course.id} {...course}/>)}
        </div>
    </section>
  )
}

export default Courses 