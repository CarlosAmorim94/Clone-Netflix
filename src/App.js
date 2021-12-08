import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

function App() {

  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  },[])

  return (
    <div className="page">
      Header
      Destaque
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      Rodapé
    </div>
  );
}

export default App;
