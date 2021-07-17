import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {

    // declare an instance of useHistory()
    const history = useHistory();

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ understanding, setUnderstanding ] = useState(0);
    
    // handle click of submit button
    const handleClick = (event) => {
        // prevents page from reloading when submit is clicked
        event.preventDefault();

        console.log('Clicked Understanding submit button'); // test
        console.log('current input value is:', understanding); // test

        // dispatch the input value to the reducer
        dispatch({
            type: 'CHANGE_UNDERSTANDING',
            payload: understanding
        });

        // send the user to the next component
        history.push('/support');
    }

    return (
        <div>
            <form>
                <h2>How well are you understanding the content?</h2>
                <input 
                    type="number"
                    min="1"
                    max="5"
                    value={understanding}
                    onChange={event => setUnderstanding(event.target.value)}
                    required
                />
                <button 
                    type="submit"
                    onClick={handleClick}
                >
                    Next
                </button>
            </form>  
        </div>
    );
}

export default Understanding;