import React from 'react'

const Course = ({ name, info, image, price }) => {
  
    return (
    <article className='single-course'>
        <img src={image} alt={name}/>
        <footer>
            <div className='course-info'>
                <h4>{name}</h4>
                <h4 className='course-price'>${price}</h4>
            </div>
        </footer>
    </article>
  )
}

export default Course