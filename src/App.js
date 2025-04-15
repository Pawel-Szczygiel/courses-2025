import React, { useState } from 'react'
import data from './data';
import Courses from './Courses';

function App() {
  const [courses, setCourses] = useState(data);

  return (
    <main>
      <Courses courses={courses}/>
    </main>
  );
}

export default App;
