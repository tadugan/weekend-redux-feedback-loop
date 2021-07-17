import { useSelector } from "react-redux";

function Review() {

    // gather values from reducers to display on DOM
    const feelingValue = useSelector(store => store.feelingReducer);
    const understandingValue = useSelector(store => store.understandingReducer);
    const supportValue = useSelector(store => store.supportReducer);
    const commentsValue = useSelector(store => store.commentsReducer);

    // handles click to submit reflection and POST reflection to database
    const handleClick = () => {
        console.log('Submit has been clicked'); // test
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