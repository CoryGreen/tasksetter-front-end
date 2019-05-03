import React from 'react';

function Heading() {
    return (
        <header>
            <h1 style = {headingStyle}>taskSetter</h1>
        </header>
    )
}

const headingStyle = {
    background : '#333',
    color : '#fff',
    padding : '10px'
}

export default Heading;