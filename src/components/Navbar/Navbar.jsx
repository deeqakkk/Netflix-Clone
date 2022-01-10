import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./navbar.scss";

const Navbar = () => {
  return (
    // <div className="navbar">
    //   <div className="container">
    //     <div className="left">
    //       <img
    //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
    //         alt="netflix-logo"
    //       ></img>
    //       <span>Homepage</span>
    //       <span>Series</span>
    //       <span>Movies</span>
    //         <span>TV Shows</span>
    //         <span>My List</span>
    //     </div>
    //     <div className="right">
        
    //         <Search/>
    //         <span>KID</span>
    //         <Notifications/>
    //         <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
    //     </div>
    //     <ArrowDropDown/>
    //   </div>
    // </div>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navbar;
