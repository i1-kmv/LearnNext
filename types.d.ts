interface IFilm {
    properties: IFilmProperties
    description: string
    _id: string
    uid: string
    __v: number
}

interface IFilmProperties {
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
    created: string
    edited: string
    producer: string
    title: string
    episode_id: number
    director: string
    release_date: string
    opening_crawl: string
    url: string
}

interface IFilmsResponse {
    message: string,
    result: Array<IFilm>
}

interface IFilmResponse {
    message: string,
    result: IFilm
}
