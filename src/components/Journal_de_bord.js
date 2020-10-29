import { Container, Image } from "react-bootstrap";
import React from 'react';

import journal from "../img/journal_de_bord.jpg";

export class JournalBord extends React.Component {
    render() {
        return (
            <Container>
                <Image src={journal}/>
            </Container>
        );
    }
}