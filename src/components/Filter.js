import React from 'react'

function Filter({Movie,input,setInput}) {
    const changeHandler = (e) =>{
        setInput(e.target.value)
      }
    return (
        <div>
           <input type="text" placeholder='Search......' className="searchInput" onChange={changeHandler}/>   
           {
               Movie.filter((movie) =>{
                   if(input ==="") {
                       return null
                   } else if(movie.title.toLowerCase().includes(input.toLowerCase())){
                       return movie
                   }
                }).map((movie,key) =>(
                <div key={key}>
                    <p>{movie.title}</p>
                 </div>
             ))  
           }    
        </div>
    )
}


export default Filter
