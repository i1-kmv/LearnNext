export function getFilm (id: number):Promise<IFilmResponse> {
    return fetch(`https://swapi.tech/api/films/${id}`).then((res) => res.json())
}
