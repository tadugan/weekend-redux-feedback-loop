import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// material ui imports
import Button from '@material-ui/core/Button';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";

function Feeling() {

    // declare an instance of useHistory()
    const history = useHistory();

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ feeling, setFeeling ] = useState(0);
    
    // get state of isEditModeOn reducer and store in a variable
    const isEditModeOn = useSelector(store => store.isEditModeOn);

    // variable to store alert toggle status
    const [ alert, setAlert ] = useState(false);

    // handle change of selected radio button
    const handleChange = (event) => {
        setFeeling(event.target.value);
    }

    // function to display different buttons depending on state of isEditModeOn reducer
    const displayButton = (booleanValue) => {
        if (booleanValue) {
            return (
                <div className="submit-button-container">
                    <Button
                    type="submit"
                    onClick={handleClick}
                    variant="contained"
                    >
                        Update
                    </Button>
                </div>
            );
        }
        else {
            return (
            <div className="submit-button-container">
                <Button
                type="submit"
                onClick={handleClick}
                variant="contained"
                >
                    Next
                </Button>
            </div>
            );
        }
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

        // send user to correct component, depending on state of isEditModeOn
        if (isEditModeOn) {
            history.push('/review');
        }
        else {
            // send user to the next component
            history.push('/understanding');
        }
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <FormControl component="fieldset">
                <FormLabel component="legend">Choose One:</FormLabel>
                    <RadioGroup color="primary" row aria-label="rating" name="rating" value={feeling} onChange={handleChange}>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="1"/>
                        <FormControlLabel value="2" control={<Radio color="primary" />} label="2"/>
                        <FormControlLabel value="3" control={<Radio color="primary" />} label="3"/>
                        <FormControlLabel value="4" control={<Radio color="primary" />} label="4"/>
                        <FormControlLabel value="5" control={<Radio color="primary" />} label="5"/>
                    </RadioGroup>
                <br />
                {displayButton(isEditModeOn)}
            </FormControl>
            {alert && 
                <p>*Please select a button</p>
            }
        </div>
    );
}

export default Feeling;