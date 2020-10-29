import React from "react";
import { Row, Image, Col, Container } from "react-bootstrap";

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';

export class FeuillePerso extends React.Component {
    render() {
        return (
            <Container fluid="true">
                <Row>
                    <Col>
                        <Image src={img1} width="749" />
                    </Col>
                    <Col>
                        <Image src={img2} width="749"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}