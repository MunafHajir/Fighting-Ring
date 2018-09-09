import React, { Component } from 'react';
import '../../common.css';

export default function FinalShowSelectedCard(props) {
    return <div className={props.class}>
        <h1>{props.name}</h1>
        <p>{props.info}</p>
        <img src = {props.url} className="centerCroppedImage"  ></img>
    </div>

}