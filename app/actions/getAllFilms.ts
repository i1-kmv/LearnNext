export function getAllFilms ():Promise<IFilmsResponse> {
    return fetch("https://swapi.tech/api/films",
        //cache: "no-store" //SSR = getServerSideProps
        //cache: "force-cache" //SSG = getStaticProps
        //next: {revalidate: 60} // ISR = getStaticProps + revalidate
    ).then((res) => res.json())
}
