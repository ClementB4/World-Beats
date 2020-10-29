import React from 'react'
import { Container, Image, Row } from "react-bootstrap";

import bienvenue from "../img/bienv.png";

export class Home extends React.Component {
    render() {
        return(
            <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row className="justify-content-md-center">
                    <Image src={bienvenue} width="600"/>
                </Row>
            </Container>
        )
    }
}