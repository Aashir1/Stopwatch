import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


export class StopWatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timeSec : 0,
            timeMilli : 0,
            timeMinutes : 0
        }
    }

    start = () =>{
        console.log(this);
        clearInterval(this.timeInterval);
        this.timeInterval = setInterval(()=>{this.functionWillExe()}, 15)
    }
    functionWillExe = ()=>{

        this.setState({
            timeMilli: this.state.timeMilli + 1
        });
        console.log(this.state.timeMilli);
        if(this.state.timeMilli  === 60){
            this.setState({timeMilli:0, timeSec:this.state.timeSec + 1});
        }
        if(this.state.timeSec === 60){
            this.setState({
                timeSec : 0, timeMinutes : this.state.timeMinutes + 1
            })
        }
    }
    stop = () =>{
        clearInterval(this.timeInterval);
    }
    render(){
        return(
            <div>
                <div className="font" >
                {
                    (this.state.timeMilli.toString().length === 1)?
                    <span>0{this.state.timeMilli}</span>
                    :
                    <span>{this.state.timeMilli}</span>
                }:
                {
                    (this.state.timeSec.toString().length === 1)?
                    <span>0{this.state.timeSec}</span>
                    :
                    <span>{this.state.timeSec}</span>
                }:
                {
                    (this.state.timeMinutes.toString().length === 1)?
                    <span>0{this.state.timeMinutes}</span>
                    :
                    <span>{this.state.timeMinutes}</span>
                }
                </div>
                <button onClick={this.start} className="button blue">Start</button>
                <button onClick={this.stop} className="button yellow">Stop</button>
            </div>
        );
    }

}