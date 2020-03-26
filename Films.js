import React from 'react'
import { Card, Grid, Segment, Modal, Button } from 'semantic-ui-react';

export default function Films ( { arrRes } ) {
    return (
        <>
        <h1>Films</h1>
        <Grid columns={3}>
            {arrRes.map((film, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{film.title}</Card.Header>
                                <Card.Description>
                                    <Segment color="black" size={'big'}>
                                        <strong>Episode ID</strong>
                                        <p>{film.episode_id}</p>
                                        <strong>Director</strong>
                                        <p>{film.director}</p>
                                        <Modal trigger={<Button>Show Info</Button>}>
                                            <Modal.Description>
                                                <strong>Release Date</strong>
                                                <p>{film.release_date}</p>
                                                <strong>Opening Crawl</strong>
                                                <p>{film.opening_crawl}</p>
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
