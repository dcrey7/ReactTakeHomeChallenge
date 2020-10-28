import React, { Component } from "react";
import AnimateHeight from 'react-animate-height';
import Typist from 'react-typist';

import "./Slider.scss";

type State = {
    height: number,
    initHeight: number, 
    finalHeight: number,
    styles: any,
};

export class Slider extends Component<any, State> {
    constructor(props : any) {
        super(props);
        const init = window.innerHeight;
        const padding = 0.3*init;

        this.state = {
          height: init,
          initHeight: init,
          finalHeight: 0,
          styles: {"paddingTop" : padding}
        };
    }

    hideSlider () {
        const elem = document.getElementById("slider");
        if (elem) {
            elem.style.display = "none";
        }
    }

    componentDidMount(){
        setTimeout(() => {
            const { height, initHeight, finalHeight } = this.state;
            this.setState({
                height: height === finalHeight ? initHeight : finalHeight
            });
        }, 6800);
    }

    render () {
        return (
        <div className="slider-style" id="slider">
            <AnimateHeight
              duration={ 500 }
              height={ this.state.height }
            >
                <button onClick={this.hideSlider.bind(this)}>
                    <i className="material-icons">close_fullscreen</i>
                </button>
                <div className="slider-content-style" style={this.state.styles}>                    
                    <span>Let's build something </span>
                    <Typist>
                            <span> <b>innovative.</b></span>
                            <Typist.Backspace count={12} delay={400} />
                            <span> <b> meaningful.</b></span>
                            <Typist.Backspace count={12} delay={400} />
                            <span> <b>awesome.</b> Together.</span>
                    </Typist>
                </div>

            </AnimateHeight>
          </div>
        );
    }
}