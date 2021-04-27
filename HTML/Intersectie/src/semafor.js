import React from "react";

export default class Semafor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'semafor'}>
                <div className={'bec rosu'}></div>
                <div className={'bec galben'}></div>
                <div className={'bec verde'}></div>
                <div className={'stalp'}></div>
            </div>
        )
    }
}