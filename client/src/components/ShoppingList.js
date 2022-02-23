import React, {Component} from 'react' ;
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap' ;
import { CSSTransitiono,TransitionGroup} from 'react-transition-group';
import {v1 as uuid} from 'uuid';

class ShoppingList extends Component{
    state = {
        items : [
            {id: uuid(), name : 'Eggs'},
            {id: uuid(), name : 'Milk'},
            {id: uuid(), name : 'Steak'},
            {id: uuid(), name : 'Water'}
        ]
    }

    render(){
        const {items} = this.state;
        return(
            <Container>
                <Button color="dark" style={{marginBottom:'2rm'}}
                        onClick={() => {
                            const name = prompt('Enter Item');
                            if(name){
                                this.setState(state => ({
                                    items : [...state.items, { id : uuid() , name}]

                                }));
                            }
                        }}>
                    Add item
                </Button>
            </Container>
        )
    }
}

export default ShoppingList;