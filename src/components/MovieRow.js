import React from 'react'
import './MovieRow.css'

export default function MovieRow({title, items}) {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list"> {/* Todos os filmes nessa div, mas dentro a div abaixo vai mostrar somente filmes na tela */}
                    {items.results?.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
