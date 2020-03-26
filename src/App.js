import React, { useState, useEffect } from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import People from './components/People';
import Planet from './components/Planet';
import Films from './components/Films';

function App() {
    const [ people, setPeople ] = useState( [] );
    const [ planet, setPlanet ] = useState( [] );
    const [ films, setFilms ] = useState ( [] );
    const [ loading, setLoading ] = useState ( true );

    const [ searchTerm, setSearchTerm ] = useState( "" );
    const [ peopleResults, setPeopleResults ] = useState([]);
    const [ planetResults, setPlanetResults ] = useState([]);
    const [ filmsResults, setFilmsResults ] = useState([]);

    const filterBar = event => {
      setSearchTerm( event.target.value );
      setPeople( peopleResults.filter( arrRes => arrRes.name.includes(event.target.value ) ) );
      setPlanet( planetResults.filter( arrRes => arrRes.name.includes(event.target.value ) ) );
      setFilms( filmsResults.filter( arrRes => arrRes.title.includes(event.target.value ) ) );

    }

    async function fetchPeople(){
      const arrRes = [];
      let url = 'https://swapi.co/api/people/';
      do
      {
        let res = await fetch( url );
        let data = await res.json();
        url = data.next;
        arrRes.push(...data.results );
      }while( url );
      
      setPeopleResults( arrRes );
      setPeople( arrRes );
      setLoading( false );
    }

    async function fetchPlanet(){
      const arrRes = [];
      let url = 'https://swapi.co/api/planets/';
      do
      {
        let res = await fetch( url );
        let data = await res.json();
        url = data.next;
        arrRes.push(...data.results );
      }while( url );

      setPlanetResults( arrRes );
      setPlanet( arrRes );
      setLoading( false );
    }
    
    async function fetchFilms(){
      const arrRes = [];
      let url = 'https://swapi.co/api/films/';
      do
      {
        let res = await fetch( url );
        let data = await res.json();
        url = data.next;
        arrRes.push(...data.results );
      }while( url );
      
      setFilmsResults( arrRes );
      setFilms( arrRes );
      setLoading( false );
    }

    useEffect(() => {
      fetchPeople();
      fetchPlanet();
      fetchFilms();
    }, [] )
    
    console.log( 'people', people );
    console.log( 'planet', planet );
    console.log( 'films', films );

    return (
      <>
        <Router>
          <Navbar/>
          <Container>
            {loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>

            ) : (
              <Switch>
                <Route exact path = '/People'>
                  <div className = 'ui search'>
                    <div className = 'ui left icon input'>
                      <input className = "prompt" type = 'text' placeholder = "filter" value = {searchTerm} onChange = {filterBar}/>
                      <i className = "rebel icon"></i>
                    </div>
                  </div>
                    <People arrRes = {people} />
                </Route>

                <Route exact path = '/Planet'>
                  <div className = 'ui search'>
                    <div className = 'ui left icon input'>
                      <input className = "prompt" type = 'text' placeholder = "filter" value = {searchTerm} onChange = {filterBar}/>
                      <i className = "rebel icon"></i>
                    </div>
                  </div>
                    <Planet arrRes = {planet} />
                </Route>

                <Route exact path = '/Films'>
                  <div className = 'ui search'>
                    <div className = 'ui left icon input'>
                      <input className = "prompt" type = 'text' placeholder = "filter" value = {searchTerm} onChange = {filterBar}/>
                      <i className = "rebel icon"></i>
                    </div>
                  </div>
                    <Films arrRes = {films} />
                </Route>
              </Switch>
            )}
          </Container>
        </Router>
      </>
    )

}

export default App;