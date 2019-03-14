import React from 'react'
import './UserInput.css'

const userinput = (props) => {
    const style = {
        boreder: '2px solid red'
    }

    return (
        <div className="UserInput">
            <input type="text" onChange={props.clicked} value={props.username} name={props.currentNo} style={style}/>
        </div>
    );
}

export default userinput