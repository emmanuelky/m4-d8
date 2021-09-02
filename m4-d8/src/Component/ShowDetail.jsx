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
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDE0YWNlYWY0ODAwMTVjOTE4NzAiLCJpYXQiOjE2MjI3OTI5NzYsImV4cCI6MTYyNDAwMjU3Nn0.-xxIE6ksy_dDMiZ2u_RAQDm1PHcxYsNoPCkI3iWH6m4'
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