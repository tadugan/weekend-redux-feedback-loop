import { useHistory } from "react-router-dom";

function ThankYou() {
    
    const history = useHistory();

    const handleClick = () => {
        console.log('You clicked the Leave New Feedback button'); // test

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