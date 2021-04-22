import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
export default function SingleMovie() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        setLoading(true)
        async function getMovies(){
            try{
               const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
               const data = await response.json()
               console.log(data);
                const {data:{movie}} = data
                   if(movie){
                       const {title_long:title, large_cover_image:image, year, genres, description_intro:des, torrents} = movie
                       const {hash} = torrents[0]
                       const newMovie = {title, image, year, genres, des, hash}
                       setMovie(newMovie)
                       
                   }else {

                       setMovie(null)
                   }
               
               
            }catch(error){
                console.log(error);
            }
            setLoading(false)
        }
        getMovies()
    }, [id])
    if(loading){
        return <h3>loading..</h3>
    }
    if(!movie){
        return <h2 className="section-title">no movie to display</h2>
    }
    else {
        const { title, image, year, genres, des, hash} = movie
        const a = `https://yts.mx/torrent/download/${hash}`
        return <section className="section movie-section">
            <h2 className="section-title">{title}</h2>
            <div className="drink">
                <img src={image} alt={title}/>
                <div className="drink-info">
                    <p>title: {title}</p>
                    <p>year: {year}</p>
                    <p>genres: {genres.map((item)=><span>{item},</span>)}</p>
                    <p>description: {des}</p>
            <Link to="/" className="btn btn-primary">back home</Link>
                <div style={{marginTop:'2rem'}}>
                <a href={a} className="btn btn-primary">download</a>
                </div>
                </div>
                    
            
            </div>
        </section>
    }
    
}
