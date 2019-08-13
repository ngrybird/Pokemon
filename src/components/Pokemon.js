import React from 'react';
export default function Pokemon(props){
    return (
        <div className = 'cardContent'>
            <div className='contentHeader'>
                <div className='contentHeaderName'>{props.name.toUpperCase()}</div>
                <div className='contentHeaderId'>ID: {props.id}</div>
                
            </div>
            <div className='contentBody'>
                <img src = {props.img}/>
            </div>
        </div>
    );
}