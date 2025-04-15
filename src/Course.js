import React, { useState } from 'react'

const Course = ({ name, info, image, price }) => {
    const [readMore, setReadMore] = useState(false);


    return (
    <article className='single-course'>
        <img src={image} alt={name}/>
        <footer>
            <div className='course-info'>
                <h4>{name}</h4>
                <h4 className='course-price'>${price}</h4>
            </div>
            <p>
                {
                    readMore ? info : `${info.slice(0,100)}...`
                }
                <button onClick={() => setReadMore(!readMore)}>
                {
                    readMore ? 'read less' : 'read more'
                }
                </button>
            </p>
            <button className='delete-btn'>not interested</button>
        </footer>
    </article>
  )
}

export default Course