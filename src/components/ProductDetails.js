import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProd } from '../store/cart'

const ProductDetails = (props) => {

   

    const dispatch = useDispatch();
    console.log('beta',props.countt.beta);
    console.log('props.todos.deta',props.todos);

    return (
        <>
            <button onClick={() => dispatch(getProd("thaer"))}>Get TODO List</button>
            <section>
                {props.countt.beta != null &&

                    <div className="todo-item" >
                        <h3>{props.countt.beta}</h3>
                        <div>{props.countt.beta}</div>
                    </div>

                }
            </section>
        </>
    )
}

const mapStateToProps = state => ({
    counter: state.counter,
    countt: state.countt,
    todos: state.todos

});

export default connect(mapStateToProps) (ProductDetails);