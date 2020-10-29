import { Container, Image } from "react-bootstrap";
import React from 'react';

import marchand from "../img/marchand.png";

export class Marchand extends React.Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <br />
                <br />
                <Image src={marchand} width="1000"/>
            </Container>
        );
    }
}