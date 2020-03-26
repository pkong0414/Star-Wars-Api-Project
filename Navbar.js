import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
                
                <Menu.Item name = "Star Wars API"/>
                
                <Link to = '/People'>
                    <Menu.Item name = "People"/>
                </Link>
                
                <Link to = '/Planet'>
                    <Menu.Item name = "Planet"/>
                </Link>
                
                <Link to = '/Films'>
                    <Menu.Item name = "Films"/>
                </Link>
            </Container>
        </Menu>
    )
}
