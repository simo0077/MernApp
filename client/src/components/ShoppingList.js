import React, {Component} from 'react' ;
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap' ;
import { CSSTransition,TransitionGroup} from 'react-transition-group';
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

                <ListGroup>
                    <TransitionGroup className="shopping-List">
                        { items.map( ({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem> 
                                    <Button className='remove-btn' color="danger"
                                    onClick={()=>{
                                        this.setState(state => ({
                                        items : this.state.items.filter(item => item.id != id)
                                    }));
                                    }}>
                                        &times;
                                    </Button>
                                    {name}
                                    </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList;