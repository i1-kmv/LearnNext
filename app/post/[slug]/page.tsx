import React from 'react';


export async function generateStaticParams() {
    const films = await fetch('https://swapi.dev/api/films').then((res) => res.json())

    return films.results.map((film: any) => ({
        slug: film.title.replace(/\s+/g, '-')
    }))
}

const Post = ({params}: any) => {
    return (
        <div>
            <h2>Post with id {JSON.stringify(params)}</h2>
        </div>
    );
};

export default Post;
