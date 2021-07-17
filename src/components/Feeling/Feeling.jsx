import { useState } from "react";
import { useDispatch } from "react-redux";

function Feeling() {

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ feeling, setFeeling ] = useState(0);
    
    // handle click of submit button
    const handleClick = (event) => {
        // prevents page from reloading when submit is clicked
        event.preventDefault();

        console.log('Clicked Feeling submit button'); // test
        console.log('current input value is:', feeling); // test

        dispatch({
            type: 'CHANGE_FEELING',
            payload: feeling
        });
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

export default Feeling;