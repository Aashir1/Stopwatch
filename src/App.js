import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Stateless component are those that have no state
export let FirstStateless = (props)=>{
  return(
    <h1>{props.heading1}</h1>
  );
}