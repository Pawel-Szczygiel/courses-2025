import React, { useState } from 'react'
import data from './data';
import Courses from './Courses';

function App() {
  const [courses, setCourses] = useState(data);


  const removeCourse = id => {
    const newCourses = courses.filter(course => course.id !== id );
    setCourses(newCourses);
  }

  if (courses.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no courses left</h2>
          <button className='btn' onClick={() => setCourses(data)}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Courses courses={courses} removeCourse={removeCourse}/>
    </main>
  );

}

export default App;
