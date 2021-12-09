import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';

function App() {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)

  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando o feature
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo)
    }

    loadAll()
  },[])

  return (
    <div className="page">
      Header
      {featureData &&
      <FeatureMovie item={featureData}/>}
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
