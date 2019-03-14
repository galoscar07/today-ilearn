import React from 'react'
import './CharComponent.css'


const charcomponents = (props) => {
    return(
        <div>
            <p onClick={props.click} className='CharComponenets'>{props.char}</p>
        </div>
    );
}

export default charcomponents