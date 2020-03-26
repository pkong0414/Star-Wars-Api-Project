import React, { useState, useEffect } from 'react';


export default function GetFilms( { results } ) {
    let [, setPeople ] = useState([]);
    const [, setLoading ] = useState( true );

    useEffect( () => {
        async function fetchPeople() {
            let url = results;
            let res = null;

            res = await fetch( url );
            results = await res.json();
            setPeople( results.title );
            window.referencedHome = results.title;
            setLoading( false );

        }

        if( window.referencedHome = null )
            window.referencedHome = "Error";
    
        fetchPeople();
    }, [] );
    
    return (
        <p>{window.referencedHome}</p>
    )
}