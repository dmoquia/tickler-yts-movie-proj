import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Popup from '../components/PopUp';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Utils from '../utils/Utils'
export default function SingleMovie() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        setLoading(true)
        async function getMovies() {

            try {
                const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                const data = await response.json()

                const { data: { movie } } = data
                if (movie) {
                    const { title_long: title, large_cover_image: image, year, genres, description_intro: des, torrents } = movie

                    const newMovie = { title, image, year, genres, des, torrents }
                    setMovie(newMovie)

                } else {

                    setMovie(null)
                }


            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
        getMovies()
    }, [id])

    if (loading) {

        return <h3>loading..</h3>
    }
    if (!movie) {
        return <h2 className="section-title">no movie to display</h2>
    }
    else {
        const { title, image, year, genres, des, torrents } = movie

        return <section className="section movie-section">
            <h2 className="section-title">{title}</h2>
            <div className="drink">
                <img src={image} alt={title} />
                <div className="drink-info">
                    <p>title: {title}</p>
                    <p>year: {year}</p>
                    <p>genres: {genres.map((item, index) => <span key={index}>{item},</span>)}</p>
                    <p>description: {des}</p>
                    <Button variant="outlined" color="primary">
                        <ArrowBackIosIcon />
                        <Link to="/" style={{ color: '#3a4fb0' }}>back home</Link>
                    </Button>
                    <div style={{ marginTop: '1rem' }}>


                    </div>
                    <Popup>
                        {Utils(torrents)}
                    </Popup>

                </div>


            </div>
        </section >
    }

}
