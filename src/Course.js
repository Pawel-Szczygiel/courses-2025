import React, { useState } from 'react'

const Course = ({ id, name, info, image, price, removeCourse }) => {
    const [readMore, setReadMore] = useState(false);

    const handleDelete = () => removeCourse(id);

    return (
    <article className='single-course'>
        <div className='img'>
            <img src={image} alt={name}/>
        </div>
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
                    readMore ? (
                        <i class="em em-point_left" aria-role="presentation" aria-label="WHITE LEFT POINTING BACKHAND INDEX"></i>
                    ) : (
                        <i class="em em-point_right" aria-role="presentation" aria-label="WHITE RIGHT POINTING BACKHAND INDEX"></i>
                    )
                }
                </button>
            </p>
            <button className='delete-btn' onClick={handleDelete}>
                <span>not </span>
                interested
            </button>
        </footer>
    </article>
  )
}

export default Course