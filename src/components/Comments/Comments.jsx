import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// material ui imports
import Button from '@material-ui/core/Button';

function Comments() {

    // declare an instance of useHistory()
    const history = useHistory();

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ comments, setComments ] = useState('');

    // get state of isEditModeOn reducer and store in a variable
    const isEditModeOn = useSelector(store => store.isEditModeOn);    
    
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

        console.log('Clicked Comments submit button'); // test
        console.log('current input value is:', comments); // test

        // dispatch input value to reducers
        dispatch({
            type: 'CHANGE_COMMENTS',
            payload: comments
        });

        // send user to review component
        // sends user to review regardless of state of isEditModeOn
        history.push('/review');
    }

    return (
        <div>
            <form>
                <h2>Any comments you want to leave?</h2>
                <input 
                    type="text"
                    value={comments}
                    onChange={event => setComments(event.target.value)}
                    maxLength="250"
                />
                <br />
                {displayButton(isEditModeOn)}
            </form>  
        </div>
    );
}

export default Comments;