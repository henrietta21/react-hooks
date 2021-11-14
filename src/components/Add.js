import React , {useState}from 'react'
import MovieList from './MovieList'


function Add({Movie}) {
    const [newMovie,setNewMovie] =useState(Movie)
    const [title,setTitle]=useState('')
    const [posterURL,setPosterURL]=useState('')
    const [description,setDescription]=useState('')
    const [rating,setRating]=useState('')
    
    
    const addMovie = () => {
        setNewMovie([...newMovie,{
            title: title,
            posterURL: posterURL,
            description: description,
            rating: rating  
        }])
      }

    return (
        <div>
            <MovieList Movie={newMovie}/>
            <h3>ADD MOVIE HERE</h3>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Movie Title"/>
            <input type="text" value={posterURL} onChange={(e)=>{setPosterURL(e.target.value)}}placeholder="Movie Image Link"/>
            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Movie Description"/>
            <input type="text" value={rating} onChange={(e)=>{setRating(e.target.value)}} placeholder="Movie Rating"/>
            <button className="btn btn-regular" type='submit' onClick={addMovie}>ADD MOVIE</button>
        </div>
    )
}


export default Add