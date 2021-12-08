// Toda requisição estará nessa arquivo JS, pois caso a API mude algo, será mais fácil alterar as informações

const API_KEY = 'ef4624285a43c84c186dab2548733ed6'
const API_BASE = 'https://api.themoviedb.org/3'

/* Tópicos utilizados
- Originais da Netflix
- Recomendados (genérico)
- Em alta (top rated)
- Ação
- Comédia
- Terror
- Romance
- Documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
        {
            slug: 'originals',
            title: 'Originais da Netflix',
            items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discovery/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discovery/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discovery/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discovery/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discovery/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        }
        ]
    }
}