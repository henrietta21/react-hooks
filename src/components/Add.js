import React,{useState} from 'react'

function Add({changeHandler,movie}) {
    const [addMovie, setAddMovie]=useState({
        title: "",
        description:"",
        posterURL: "",
        rating:NaN,
    })

    const add = ()=> [
        setAddMovie([...movie,{
            title: "",
            description:"",
            posterURL: "",
            rating:NaN,
        }])
      ]
    return (
        <div>
            <form onSubmit={add}>
                <input type="text" name="title" placeholder="Movie Title....."/>
                <input type="text" name="posterURL" placeholder="Movie Image Link......"/>
                <input type="text" name="description" placeholder="Description......"/>
                <input type="text" name="rating" placeholder="Rating......."/>
                <button type="submit">ADD MOVIE</button>
            </form>
        </div>
    )
}


export default Add