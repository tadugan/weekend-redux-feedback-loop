import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// material ui imports
import EditIcon from '@material-ui/icons/Edit';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from '@material-ui/core/Button';

// import css 
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
             return (<p>"{commentsValue}"
                        <button className="review-edit-button" onClick={() => handleEdit('/comments')}>
                            <EditIcon fontsize="small"/>
                        </button>
                    </p>)
        }
        else {
            return (<p>Add a Comment 
                        <button className="review-edit-button" onClick={() => handleEdit('/comments')}>
                            <EditIcon fontsize="small"/>
                        </button>
                    </p>)
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
            <section className="review-score-container">
                <h2 className="review-header" >Review Your Feedback</h2>
                <div className="review-score">
                    <p>Feelings: {feelingValue}   
                        <button className="review-edit-button" onClick={() => handleEdit('/')}>
                            <EditIcon fontsize="small"/> 
                        </button>
                    </p>
                </div>
                <div className="review-score">
                    <p>Understanding: {understandingValue} 
                        <button className="review-edit-button" onClick={() => handleEdit('/understanding')}>
                            <EditIcon fontsize="small"/>
                        </button>
                    </p>
                </div>
                <div className="review-score">
                    <p>Support: {supportValue} 
                        <button className="review-edit-button" onClick={() => handleEdit('/support')}>
                            <EditIcon fontsize="small"/>
                        </button>
                    </p>
                </div>
                <div className="review-score">
                    {displayComments(commentsValue)}
                </div>
            </section>
                <Button onClick={handleClick} variant="contained" color="primary">
                    <span className="review-submit-button">Submit</span>
                    <ArrowUpwardIcon />
                </Button>
            {alert && 
                <p>*please edit responses to a value of 1-5</p>}
        </div>
    );
}

export default Review;