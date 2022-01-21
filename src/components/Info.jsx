import React from 'react'
import { useParams } from 'react-router';

const Info = (props) => {
    const { id, textColor, bgColor } = useParams();
    return (
        <div className='' style={{backgroundColor:bgColor, color: textColor}}>
            <h1>Hello from Info component!</h1>
            { isNaN(id)?
            <h2>Hello {id}!</h2>:
            <h2>Your lucky number is {id}</h2>
        }
        </div>

    );
}

export default Info;