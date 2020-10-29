import { Navbar, Nav } from "react-bootstrap";
import logo from '../img/world_beats_logo.png';

export const Header = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href='/'>
                <img 
                    src={logo}
                    width="180"
                    height="50"
                    alt="World Beats Logo"
                    className="d-inline-block align-top" />
            </Navbar.Brand>
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link href="/feuille_de_perso">Personnage</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/marchand" eventKey="link-1">Marchand</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/journal_de_bord" eventKey="link-2">Journal de bord</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};