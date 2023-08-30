const React = require('react');

function Pass(props){

    return(
    <main>
        <h1>{props.title}</h1>
        <a href={`/:${props.b}}`}>{props.minus}</a>
        <br></br>
        <br></br>
        <a href={`/`}>Start over</a>
    </main>
    )
}

module.exports = Pass;