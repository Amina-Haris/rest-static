import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function Header(){

      return(

        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as = {Link} to ="/">restapp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as = {Link} to ="/">Home</Nav.Link>
            <Nav.Link as = {Link} to ="/About">about</Nav.Link>
            <Nav.Link as = {Link} to ="/Contact">contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      )

}
export default Header