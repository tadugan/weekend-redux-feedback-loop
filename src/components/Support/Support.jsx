import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {

    // declare an instance of useHistory()
    const history = useHistory();

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ support, setSupport ] = useState(0);

    // variable to store alert toggle status
    const [ alert, setAlert ] = useState(false);
    
    // handle click of submit button
    const handleClick = (event) => {
        // prevents page from reloading when submit is clicked
        event.preventDefault();

        console.log('Clicked Support submit button'); // test
        console.log('current input value is:', support); // test

        // validate inputs, exit function if input field is invalid
        if (support < 1 || support > 5) {
            // set alert to display invalid input message
            setAlert(true);
            return;
        }

        // dispatch the input value to the reducer
        dispatch({
            type: 'CHANGE_SUPPORT',
            payload: support
        });

        // send user to next component
        history.push('/comments');
    }

    return (
        <div>
            <form>
                <h2>How well are you being supported?</h2>
                <input 
                    type="number"
                    min="1"
                    max="5"
                    value={support}
                    onChange={event => setSupport(event.target.value)}
                    required
                />
                <br />
                <button 
                    type="submit"
                    onClick={handleClick}
                >
                    Next
                </button>
            </form>
            {alert && 
                <p>*Input must be a number between 1 and 5</p>
            }  
        </div>
    );
}

export default Support;