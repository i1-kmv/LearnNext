import React from 'react';
import {getAllFilms} from "@/app/actions/getAllFilms";
import Link from "next/link";

const FilmPage = async () => {

    const allFilms = await getAllFilms();

    return (
        <div className="container mx-auto mt-4">
            <h2 className="mb-2 text-lg font-semibold text-red-900 dark:text-white">Films list</h2>
            <ul className="max-2-md space-y-1 text-gray-500 list-disc list-inside">
                {allFilms.result.map((film: IFilm) => (
                    <li key={film.uid}>
                        <Link href={`films/${film.uid}`}>
                            {film.properties.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmPage;
