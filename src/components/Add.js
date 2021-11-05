import React from 'react'

function Add({changeHandler,add,movie}) {
    return (
        <div>
            <form onChange={changeHandler}>
                <input type="text" name={movie.title}placeholder="Movie Title....."/>
                <input type="text" name={movie.posterURL}placeholder="Movie Image Link......"/>
                <input type="text" name={movie.description}placeholder="Description......"/>
                <input type="text" name={movie.rating}placeholder="Rating......."/>
                <button type="submit" onClick={add}>ADD MOVIE</button>
            </form>
        </div>
    )
}


export default Add