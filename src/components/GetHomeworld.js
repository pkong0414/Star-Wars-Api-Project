import React, { useState, useEffect } from 'react';


export default function GetHomeworld( { results } ) {
    let [, setPeople ] = useState([]);
    const [, setLoading ] = useState( true );

    useEffect( () => {
        async function fetchPeople() {
            let url = results;
            let res = null;

            res = await fetch( url );
            results = await res.json();
            setPeople( results.results );
            window.referencedHome = results.name;
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
