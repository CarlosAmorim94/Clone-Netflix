import React, { useState } from 'react'
import './MovieRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MovieRow({title, items}) {

    const [scrollX, setScrollX] = useState(-400)

    function handleLeftArrow() {
        //Scrol em metade da tela do usuário
        let scrollingLeft = scrollX + Math.round(window.innerWidth /2) 
        if(scrollingLeft > 0) {
            scrollingLeft = 0
        }

        setScrollX(scrollingLeft)
    }

    function handleRightArrow() {
        //Scrol em metade da tela do usuário
        let scrollingRight = scrollX - Math.round(window.innerWidth /2)
        // listW será o comprimento da lista * 150 pixels que é o tamanho das imagens
        let listW = items.results.length * 150
        if ((window.innerWidth - listW) > scrollingRight){
            // 60 representa as medidas de padding
            scrollingRight = (window.innerWidth - listW) - 60
        }

        setScrollX(scrollingRight)

    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}> {/* Todos os filmes nessa div, mas dentro a div abaixo vai mostrar somente filmes na tela */}
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
