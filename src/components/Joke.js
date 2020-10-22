import React from 'react';

const Joke = (props) => {
    console.log(props.setup)
    return (
        <>
            <div>{props.setup}</div>
            <div>{props.punchline}</div>
        </>
    )
}

export default Joke;