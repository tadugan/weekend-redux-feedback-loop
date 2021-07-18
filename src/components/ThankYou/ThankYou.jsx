import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ThankYou() {
    
    const history = useHistory();

    const dispatch = useDispatch();

    // function to reset all the reducers
    const resetReducer = (reducerType, reducerPayload) => {
        dispatch({
            type: reducerType,
            payload: reducerPayload
        });
    }

    const handleClick = () => {
        console.log('You clicked the Leave New Feedback button'); // test

        // reset each reducer
        resetReducer('CHANGE_FEELING', 0);
        resetReducer('CHANGE_UNDERSTANDING', 0);
        resetReducer('CHANGE_SUPPORT', 0);
        resetReducer('CHANGE_COMMENTS', '');

        // send the user back to the beginning of the survey
        history.push('/');
    }

    return (
        <div>
            <h2>Feedback!</h2>
            <h3>Thank you for your feedback!</h3>
            <button onClick={handleClick}>Leave New Feedback</button>
        </div>
    );
}

export default ThankYou;