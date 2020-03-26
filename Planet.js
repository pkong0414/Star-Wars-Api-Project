import React from 'react';
import { Card, Grid, Segment, Modal, Button } from 'semantic-ui-react';
import GetFilms from './GetFilms';

export default function Planet( {arrRes} ) {
    return (
        <>
        <h1>Planet</h1>
        <Grid columns={3}>
            {arrRes.map((planet, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{planet.name}</Card.Header>
                                <Card.Description>
                                    <Segment color="black" size={'big'}>
                                        <strong>Diameter</strong>
                                        <p>{planet.diameter}</p>
                                        <strong>Terrain</strong>
                                        <p>{planet.terrain}</p>
                                        <strong>Climate</strong>
                                        <p>{planet.climate}</p>
                                        <Modal trigger={<Button>Show Info</Button>}>
                                            <Modal.Description>
                                                <strong>Population</strong>
                                                <p>{planet.population}</p>
                                                <strong>Films:</strong>
                                                <p>{planet.films.map(s => (<><GetFilms results={s}/></>))}</p>
                                            </Modal.Description>
                                        </Modal>
                                    </Segment>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
        </>
    )
}
