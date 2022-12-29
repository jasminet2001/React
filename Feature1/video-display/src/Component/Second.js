import React,{Component} from 'react';
import './Second.css';

export class Second extends Component{
    render(){
        return(
        <div className="container">
            <h1 className="Title">Second Page</h1>
            <div className="videos">
                <video className="vid" width="400" height="300" controls >
                    <source src="https://www.youtube.com/watch?v=8Q9CPWuRC6o" type="video/mp4"/>
                </video>
                <video className="vid" width="400" height="300" controls >
                    <source src="https://www.youtube.com/watch?v=8Q9CPWuRC6o" type="video/mp4"/>
                </video>
            </div>
        </div>) ;
    }
}