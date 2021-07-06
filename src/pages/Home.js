import React, {useState, useEffect} from 'react';
import MovieList from '../components/MovieList';
import SearchMovie from '../components/SearchMovie'

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        setLoading(true)
        async function getMovies(){
            try{
                const response = await fetch(`https://yts.mx/api/v2/list_movies.jsonp?query_term=${searchTerm}`);
                const data = await response.json()
                const {data:{movies}} = data;
                // console.log(data)
                if(movies){
                    const newMovies = movies.map(item => {
                        const {id, medium_cover_image, slug, title, year} = item
                        return {id, image:medium_cover_image, slug, title, year}
                    } )
                    setMovies(newMovies)
                }else {
                    setMovies([]);
                }
            }catch(error){
                console.log(error);
            }
            setLoading(false)
        }
        getMovies()
    },[searchTerm]);    
    return <main>
        <SearchMovie setSearchTerm={setSearchTerm} />
        <MovieList loading={loading} movies={movies}/>
    </main>;
}
