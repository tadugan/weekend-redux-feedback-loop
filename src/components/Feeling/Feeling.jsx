import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {

    // declare an instance of useHistory()
    const history = useHistory();

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ feeling, setFeeling ] = useState(0);
    
    // variable to store alert toggle status
    const [ alert, setAlert ] = useState(false);

    // handle click of submit button
    const handleClick = (event) => {
        // prevents page from reloading when submit is clicked
        event.preventDefault();

        console.log('Clicked Feeling submit button'); // test
        console.log('current input value is:', feeling); // test

        // validate inputs, exit function if input field is invalid
        if (feeling < 1 || feeling > 5) {
            // set alert to display invalid input message
            setAlert(true);
            return;
        }

        // dispatch the input value to the reducer
        dispatch({
            type: 'CHANGE_FEELING',
            payload: feeling
        });

        // send user to the next component
        history.push('/understanding');
    }

    return (
        <div>
            <form>
                <h2>How are you feeling today?</h2>
                <input 
                    type="number"
                    min="1"
                    max="5"
                    value={feeling}
                    onChange={event => setFeeling(event.target.value)}
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

export default Feeling;