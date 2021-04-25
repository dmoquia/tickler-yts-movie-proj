import React from 'react'
import {Link} from 'react-router-dom'
export default function Movie({id, image, slug, title, year}) {
    
    return <article className="movie">
        <div className="img-container">
            <img src={image} alt={title}/>
        </div>
        <div className="movie-footer">
            <h5>{title}</h5>
            <h6>{year}</h6>
           
            <Link to={`/movie/${id}/${slug}`} className="btn btn-primary btn-details">details</Link>
            
        </div>
    </article>
}
