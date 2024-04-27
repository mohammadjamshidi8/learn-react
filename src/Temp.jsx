import React, { Component } from "react";

export default class Temp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: 10,
      color: "cold",
    };

    this.plusFunc = this.plusFunc.bind(this)
    this.minusFunc = this.minusFunc.bind(this)
  }

  plusFunc() {

    if (this.state.degree >= 30) {
        return false
    }

    this.setState(prevState => {
        return {degree: prevState.degree + 1}
    })

    if (this.state.degree >= 15) {
        this.setState({color : 'hot'})
    }
  }
  minusFunc() {

    if (this.state.degree <= 0) {
        return false
    }

    this.setState(prevState => {
        return {degree: prevState.degree - 1}
    })

    if (this.state.degree >= 15) {
        this.setState({color : 'cold'})
    }

  }

  render() {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-slate-300">
        <div className="flex flex-col p-5 rounded-md bg-white w-[300px] gap-y-10">
          <div className={`w-10/12 mx-auto flex justify-center items-center aspect-square rounded-full border-[2px] border-black ${this.state.color}`}>
            <span className="font-bold text-2xl">{`${this.state.degree} °C`}</span>
          </div>
          <div className="w-full flex items-center gap-x-2">
            <button
              onClick={this.plusFunc}
              className="w-1/2 bg-teal-400 py-4 rounded-md active:bg-teal-500 transition-colors duration-50"
            >
              Plus
            </button>
            <button
              onClick={this.minusFunc}
              className="w-1/2 bg-rose-400 py-4 rounded-md active:bg-rose-500 transition-colors duration-50"
            >
              Minus
            </button>
          </div>
        </div>
      </div>
    );
  }
}
