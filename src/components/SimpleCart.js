import React from 'react'
import {connect} from 'react-redux';
import {  useDispatch } from 'react-redux'; 
import { getDotaData } from '../store/actions'
// import { switchActive, reset } from '../store/checkActiveCat';
import { deleteCart } from '../store/cart';



function SimpleCart(props) {
    console.log('props.todos',props.todos);

    // const state = useSelector((state)=> {
    //     return {
    //         todos: state.todos
    //     }
    // });

    // const dispatch = useDispatch();
    
    return (
        <>
              <section>
                  <h1>MY Cart</h1>
            <ul>
            {props.countt.cartArr &&
            props.countt.cartArr.map((person, idx) =>
            
                <li key={idx} onClick={()=>{props.deleteCart(person)}}>{person} </li>
            )}
            </ul>
            
        </section>

        

        </>
    )
}
const mapStateToProps = state => ({
    counter: state.counter,
    countt:state.countt,
    todos: state.todos
    
});

const mapDispatchToProps = {  deleteCart };

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart)
