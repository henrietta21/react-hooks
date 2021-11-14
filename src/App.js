import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
import Trailer from './components/Trailer';
import NotFound from "./components/NotFound"


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/"exact component={MovieCard} />
      <Route path="/trailer" component={Trailer} />
      <Route component={NotFound} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
