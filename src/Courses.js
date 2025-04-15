import React from 'react'
import Course from './Course'

const Courses = ({ courses, removeCourse }) => {
  return (
    <section>
       <div className='title'>
            <h2>our courses</h2>
            <div className='underline'></div>
        </div>
        <div>
            {courses.map(course => (
              <Course key={course.id} 
                      {...course} 
                      removeCourse={removeCourse}/>
            ))}
        </div>
    </section>
  )
}

export default Courses 