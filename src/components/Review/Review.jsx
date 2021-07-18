import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {

    // gather values from reducers to display on DOM and POST to database
    const feelingValue = useSelector(store => store.feelingReducer);
    const understandingValue = useSelector(store => store.understandingReducer);
    const supportValue = useSelector(store => store.supportReducer);
    const commentsValue = useSelector(store => store.commentsReducer);

    const history = useHistory();

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
                console.log('New refelction added to database', response)
            })
            .catch(error => {
                console.log('Error adding new reflection to database', error);
            });
    }

    // handles click to submit reflection and POST reflection to database
    const handleClick = () => {
        console.log('Submit has been clicked'); // test

        // add the new reflection to the database
        addReflection();

        // send user to the thank you page
        history.push('/thank-you');
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <section>
                <p>Feelings: {feelingValue}</p>
                <p>Understanding: {understandingValue}</p>
                <p>Support: {supportValue}</p>
                <p>Comments: {commentsValue}</p>
            </section>
            <button onClick={handleClick}>
                Submit Reflection
            </button>
        </div>
    );
}

export default Review;