import react,{useState} from 'react'
import'./style.css'
import Filter from './Filter'
import MovieList from './MovieList';
import Add from './Add';

function MovieCard() {
    const moviesList = [
        {
          title: "The godfather",
          posterURL: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
          description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          rating: 5,
        },
        {
          title: "Army Of Thieves",
          posterURL: "https://upload.wikimedia.org/wikipedia/en/4/43/ArmyOfThievesTeaserPoster.jpg",
          description: "In this prequel to ${Army of the Dead},a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe.",
          rating: 4,
        },
        {
          title: "The Harder They Fall",
          posterURL: "https://upload.wikimedia.org/wikipedia/en/d/d1/The_Harder_They_Fall_%282021_film%29.jpg",
          description: "When an outlaw discovers his enemy is being released from prison, he reunites his gang to seek revenge.",
          rating: 5,
        },
        {
          title: "Fight club",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
          description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much,much more.",
          rating: 5,
        },
        {
          title: "Swallow",
          posterURL: "https://upload.wikimedia.org/wikipedia/en/0/09/Swallow_2021_film_poster.jpg",
          description: "Waylaid by life's pressures in 1980s Lagos, Nigeria, Tolani becomes involved in drug smuggling with her streetwise friend and must face the fallout.",
          rating: 5,
        },
        {
          title: "Omo Ghetto",
          posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f7/Omo_Ghetto_The_Saga_Poster.jpg",
          description: "Twins are reunited as a good-hearted female gangster and her uptight rich sister take on family, crime, cops, and all of the trouble that follows them.",
          rating: 3,
        },
        {
          title: "The illusinist",
          posterURL: "https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg",
          description: "In turn-of-the-century Vienna,a magician uses his abilities to secure the love of a woman far above his social standing.",
          rating: 4,
        },
        {
          title: "American History X",
          posterURL: "https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
          description: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did",
          rating: 5,
        },
        {
          title: "The illusinist",
          posterURL: "https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg",
          description: "In turn-of-the-century Vienna,a magician uses his abilities to secure the love of a woman far above his social standing.",
          rating: 4,
        },
        {
          title: "Swallow",
          posterURL: "https://upload.wikimedia.org/wikipedia/en/0/09/Swallow_2021_film_poster.jpg",
          description: "Waylaid by life's pressures in 1980s Lagos, Nigeria, Tolani becomes involved in drug smuggling with her streetwise friend and must face the fallout.",
          rating: 5,
        },
        {
          title: "Fight club",
          posterURL: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
          description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much,much more.",
          rating: 5,
        },
        {
          title: "The godfather",
          posterURL: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
          description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          rating: 5,
        },
        {
          title: "Swallow",
          posterURL: "https://upload.wikimedia.org/wikipedia/en/0/09/Swallow_2021_film_poster.jpg",
          description: "Waylaid by life's pressures in 1980s Lagos, Nigeria, Tolani becomes involved in drug smuggling with her streetwise friend and must face the fallout.",
          rating: 5,
        },
        {
          title: "American History X",
          posterURL: "https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
          description: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did",
          rating: 5,
        },
    ];


    const [Movie,setMovie]=useState(moviesList)
    const [input,setInput] =useState('')

    const changeHandler = e =>{
            setInput(e.target.value)
    }
 

    return (
        <div>
            <Filter Movie={Movie} changeHandler={changeHandler} input={input}/>
            <Add movie={Movie} changeHandler={changeHandler} />
            <MovieList Movie={Movie}/>
        </div>
    )
}


export default MovieCard
