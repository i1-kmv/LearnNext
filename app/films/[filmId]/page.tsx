import React from 'react';
import {getFilm} from "@/app/actions/getFilm";
import {getAllFilms} from "@/app/actions/getAllFilms";

interface Params {
    params: {
        filmId: number
    }
}

const Film = async ({params:{filmId}} : Params) => {
    const film = await getFilm(filmId)
    return (
        <div className="container mx-auto mt-4">
            <h2>{film.result.properties.title}</h2>
        </div>
    );
};

export default Film;

export async function generateStaticParams() {
    const films = await getAllFilms()

    return films.result.map((film: IFilm) => ({
        filmId: film.uid
    }))
}
