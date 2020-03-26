import React from "react";
import { Card, Grid, Segment, Modal, Button } from 'semantic-ui-react';
import GetHomeworld from './GetHomeworld';
import GetFilms from './GetFilms';

export default function People( {arrRes} ) {
    return (
        <>
        <h1>People</h1>
        <Grid columns={3}>
            {arrRes.map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <Segment color="black" size={'big'}>
                                        <strong>Gender</strong>
                                        <p>{people.gender}</p>
                                        <strong>Height</strong>
                                        <p>{people.height}</p>
                                        <strong>Mass</strong>
                                        <p>{people.mass}</p>
                                        <Modal trigger={<Button>Show Info</Button>}>
                                            <Modal.Description>
                                                <strong>Hair Color</strong>
                                                <p>{people.hair_color}</p>
                                                <strong>HomeWorld</strong>
                                                <p><GetHomeworld results={people.homeworld}/></p>
                                                <strong>Films:</strong>
                                                <p>{people.films.map(s => (<><GetFilms results={s}/></>))}</p>
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
