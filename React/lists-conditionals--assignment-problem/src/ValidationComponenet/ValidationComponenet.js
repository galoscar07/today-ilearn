import React from 'react'

const validationcomponent = (props) => {
   let message = (
       <div>
           <p>Text is too short!</p>
       </div>
   );

   if (props.lengthChar > 5) {
       message = (
        <div>
            <p>Text long enough</p>
        </div>
       );
   }
    return (
        <div>{message}</div>
    );
}

export default validationcomponent