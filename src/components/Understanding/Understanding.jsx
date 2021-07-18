import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {

    // declare an instance of useHistory()
    const history = useHistory();

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ understanding, setUnderstanding ] = useState(0);

    // get state of isEditModeOn reducer and store in a variable
    const isEditModeOn = useSelector(store => store.isEditModeOn);

    // variable to store alert toggle status
    const [ alert, setAlert ] = useState(false);
    
    // handle change of selected radio button
    const handleChange = (event) => {
        setUnderstanding(event.target.value);
    }

    // function to display different buttons depending on state of isEditModeOn reducer
    const displayButton = (booleanValue) => {
        if (booleanValue) {
            return (
                <button 
                type="submit"
                onClick={handleClick}
                >
                    Update
                </button>
            );
        }
        else {
            return (
            <button 
            type="submit"
            onClick={handleClick}
            >
                Next
            </button>
            );
        }
    }

    // handle click of submit button
    const handleClick = (event) => {
        // prevents page from reloading when submit is clicked
        event.preventDefault();

        console.log('Clicked Understanding submit button'); // test
        console.log('current input value is:', understanding); // test

        // validate inputs, exit function if input field is invalid
        if (understanding < 1 || understanding > 5) {
            // set alert to display invalid input message
            setAlert(true);
            return;
        }

        // dispatch the input value to the reducer
        dispatch({
            type: 'CHANGE_UNDERSTANDING',
            payload: understanding
        });

        // send user to correct component, depending on state of isEditModeOn
        if (isEditModeOn) {
            history.push('/review');
        }
        else {
            // send user to the next component
            history.push('/support');
        }
    }

    return (
        <div>
            <form>
                <h2>How well are you understanding the content?</h2>
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
                {displayButton(isEditModeOn)}
            </form>
            {alert && 
                <p>*Please select a button</p>
            }
        </div>
    );
}

export default Understanding;