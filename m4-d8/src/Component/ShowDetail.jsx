import { useEffect, useState } from "react"
import MovieDetails from "./MovieDetails"

const ShowDetail = ({ match }) => {

    const [info, setInfo] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getMovieData = async () => {
            let id = match.params.movieID
            if (id) {
                let response = await fetch('http://www.omdbapi.com/?apikey=5327efc6&i=' + id)
                let movieInfo = await response.json()
                setInfo(movieInfo)
            }
        }
        getMovieData()
    }, [match.params.movieID])

    useEffect(() => {
        const getMovieComments = async () => {
            let id = match.params.movieID
            if (id) {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFlNGYyYTA2MTBjYjAwMTVkYTJhOGYiLCJpYXQiOjE2MzA0MTc4MDcsImV4cCI6MTYzMTYyNzQwN30.Dh6ItIr-GyHW8zOAxtALq3iJbt27r6NI5h-DnolDXJk'
                    }
                })
                let movieComments = await response.json()
                setComments(movieComments)
            }
        }
        getMovieComments()
    }, [match.params.movieID])

    return (
        <div>
            {
                info && <MovieDetails movie={info} comments={comments} />
            }
        </div>
    )

}

export default ShowDetail