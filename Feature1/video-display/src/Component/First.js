import React,{Component} from 'react';
import './First.css';

export class First extends Component{
    render(){
        return(
        <div className="block">
            <h1 className="Title">First Page</h1>
            <video className="video" width="750" height="500" controls >
                <source src="../assets/pexels-lachlan-ross-8775687.mp4" type="video/mp4"/>
            </video>
        </div>) ;
    }

}