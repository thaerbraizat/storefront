import { Button } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
// import {  useDispatch } from 'react-redux'; 
// import { getDotaData } from '../store/actions'
// import { switchActive, reset } from '../store/checkActiveCat';
import { deleteCart } from '../store/cart';
import {useState} from 'react';
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




function Cart(props) {
    console.log('props.todos carrrrt', props.todos);
    const [people, setPeople] = useState(false);
    console.log(people);

    // const state = useSelector((state)=> {
    //     return {
    //         todos: state.todos
    //     }
    // });

    // const dispatch = useDispatch();
 
  const handleShow =()=>{
    setPeople(!people);
   
  }
  const niceAlert =()=>{
    setPeople(!people);
   
  }
  

  
let array=['thaer','jug','zues','ursa']
    return (
        <>
                <h1>MY Cart</h1>
                <ul>
                    {array.map((person, idx) =>
                            <>
                                <li key={idx} >{person} </li>
                                <Button size="small" style={{color:'red'}} raised color="accent" onClick={handleShow} >place your order</Button>
                                
                            </>
                        )}
                </ul>

           {people &&  <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{array[0]}</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group  controlId="dob">
                                <Form.Label>select Date</Form.Label>
                                <Form.Control type="date" placeholder="date" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="are you sure" />
                            </Form.Group>
                            <Button  size="small" style={{ color: 'blue' }} raised color="accent" onClick={niceAlert} >purchase</Button>
                            <Button  size="small" style={{ color: 'red' }} raised color="accent" onClick={handleShow} >place your order</Button>
                        </Form>}




        </>
    )
}
const mapStateToProps = state => ({
    counter: state.counter,
    countt: state.countt,
    todos: state.todos

});

const mapDispatchToProps = { deleteCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
