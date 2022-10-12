import React from 'react'

const Box = (props) => {
    let result;
    if( props.title == "Computer" &&
        props.result !== "Tie" &&
        props.result !== ""){
    result = props.result == "winer"?"loser":"winer";
    }else{
    result = props.result;
    };


  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img className='img' src={props.item && props.item.img}/>
        <h2>{props.item && props.item.name}</h2>
        <h3>{result}</h3>
        
    </div>
  )
}

export default Box