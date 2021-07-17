import { useState } from "react";
import { useDispatch } from "react-redux";

function Support() {

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ support, setSupport ] = useState(0);
    
    // handle click of submit button
    const handleClick = (event) => {
        // prevents page from reloading when submit is clicked
        event.preventDefault();

        console.log('Clicked Support submit button'); // test
        console.log('current input value is:', support); // test

        dispatch({
            type: 'CHANGE_SUPPORT',
            payload: support
        });
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

export default Support;