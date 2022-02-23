import React, {Component} from 'react' ;
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap' ;

class AppNavBAr extends Component{
    state = {
        isOpen: false
    }

    toggle =() => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="md" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toogle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavItem href="/http://www.google.com/">Google</NavItem>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavBAr;