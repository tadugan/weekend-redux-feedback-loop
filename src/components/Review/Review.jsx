import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import './Review.css';

function Review() {

    // gather values from reducers to display on DOM and POST to database
    const feelingValue = useSelector(store => store.feelingReducer);
    const understandingValue = useSelector(store => store.understandingReducer);
    const supportValue = useSelector(store => store.supportReducer);
    const commentsValue = useSelector(store => store.commentsReducer);

    const history = useHistory();

    const dispatch = useDispatch();

    const [ alert, setAlert ] = useState(false);

    // function to dispatch true to isEditModeOn reducer
    const turnEditOn = () => {
        dispatch({
            type: 'TURN_EDIT_ON'
        });
    }

    // function to dispatch false to isEditModeOn reducer
    const turnEditOff = () => {
        dispatch({
            type: 'TURN_EDIT_OFF'
        });
    }

    // function to POST a new reflection to the database
    const addReflection = () => {
        axios({
            method: 'POST',
            url: '/reflection',
            data: {
                feeling: feelingValue,
                understanding: understandingValue,
                support: supportValue,
                comments: commentsValue
            }
        })
            .then(response => {
                console.log('New reflection added to database', response)
            })
            .catch(error => {
                console.log('Error adding new reflection to database', error);
            });
    }

    // display "no comments" if comment string is empty
    const displayComments = (string) => {
        if (commentsValue.length > 0) {
             return <p>Comments: {commentsValue} <button onClick={() => handleEdit('/comments')}>edit</button></p>
        }
        else {
            return <p>No comments provided <button onClick={() => handleEdit('/comments')}>edit</button></p>
        }
    }

    // handles edit click, sends user back to relevant page
    const handleEdit = (routeName) => {
        console.log(routeName); // test
        console.log('clicked handleEdit'); // test

        // send user back to relevant page to edit response
        history.push(routeName);
    }

    // handles click to submit reflection and POST reflection to database
    const handleClick = () => {
        console.log('Submit has been clicked'); // test

        // validate submission, incase users skipped a component via the url
        if (feelingValue == 0 || understandingValue == 0 || supportValue == 0) {
            setAlert(true);
            return;
        }

        // add the new reflection to the database
        addReflection();

        // reset edit mode to off
        turnEditOff();
        
        // send user to the thank you page
        history.push('/thank-you');
    }

    // turn on edit mode when component loads
    useEffect(() => {
        turnEditOn();
    }, []);

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <section className="review-score-container">
                <div className="review-score">
                    <p>Feelings: {feelingValue} <button onClick={() => handleEdit('/')}>edit</button></p>
                </div>
                <div className="review-score">
                    <p>Understanding: {understandingValue} <button onClick={() => handleEdit('/understanding')}>edit</button></p>
                </div>
                <div className="review-score">
                    <p>Support: {supportValue} <button onClick={() => handleEdit('/support')}>edit</button></p>
                </div>
                <div className="review-score">
                    {displayComments(commentsValue)}
                </div>
            </section>
            <button onClick={handleClick}>
                Submit Reflection
            </button>
            {alert && 
                <p>*please edit responses to a value of 1-5</p>}
        </div>
    );
}

export default Review;