import { useState } from "react";
import { useDispatch } from "react-redux";

function Comments() {

    // declare an instance of useDispatch
    const dispatch = useDispatch();

    // store input value in local state
    const [ comments, setComments ] = useState('');
    
    // handle click of submit button
    const handleClick = (event) => {
        // prevents page from reloading when submit is clicked
        event.preventDefault();

        console.log('Clicked Comments submit button'); // test
        console.log('current input value is:', comments); // test

        dispatch({
            type: 'CHANGE_COMMENTS',
            payload: comments
        });
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
                    required
                />
                <button 
                    type="submit"
                    onClick={handleClick}
                >
                    Next
                </button>
            </form>  
        </div>
    );
}

export default Comments;