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

    // handle change of selected radio button
    const handleChange = (event) => {
        setFeeling(event.target.value);
    }

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
                <div className="radio-button-container">
                    <input 
                        type="radio" 
                        id="1" 
                        name="rating" 
                        value="1" 
                        onClick={handleChange}
                    />
                    <br />
                    <label htmlFor="1" className="radio-button-label">
                    1
                    </label>
                </div>
                <div className="radio-button-container">
                    <input 
                        type="radio" 
                        id="2" 
                        name="rating" 
                        value="2" 
                        onClick={handleChange}
                    />
                    <br />
                    <label 
                        htmlFor="2" 
                        className="radio-button-label"
                    >
                    2
                    </label>
                </div>
                <div className="radio-button-container">
                    <input 
                        type="radio" 
                        id="3" 
                        name="rating" 
                        value="3" 
                        onClick={handleChange}
                    />
                    <br />
                    <label 
                        htmlFor="3" 
                        className="radio-button-label"
                    >
                    3
                    </label>
                </div>
                <div className="radio-button-container">
                    <input 
                        type="radio" 
                        id="4" 
                        name="rating" 
                        value="4" 
                        onClick={handleChange}
                    />
                    <br />
                    <label 
                        htmlFor="4" 
                        className="radio-button-label"
                    >
                    4
                    </label>
                </div>
                <div className="radio-button-container">
                    <input 
                        type="radio" 
                        id="5" 
                        name="rating" 
                        value="5" 
                        onClick={handleChange}
                    />
                    <br />
                    <label 
                        htmlFor="5" 
                        className="radio-button-label"
                    >
                    5
                    </label>
                </div>
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