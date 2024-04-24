import React, { Component } from "react";

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter : 0
        }


        this.plusNum = this.plusNum.bind(this)
        this.MinusNum = this.MinusNum.bind(this)
    }

    plusNum () {
        this.setState(prevState => {
            return {counter : prevState.counter + 1}
        })
    }

    MinusNum () {
        this.setState(prevState => {
            return {counter : prevState.counter - 1}
        })
    }

  render() {
    return (
      <div className="w-full h-screen bg-slate-600 flex justify-center items-center">
        <div className="p-10 border-[1px] border-slate-200 rounded-md flex flex-col gap-y-8 text-white font-bold">
          {/* counter title start */}
          <div>
            <h1 className="text-3xl">Simple Counter</h1>
          </div>
          {/* counter title ends */}

          {/* counter number */}

          <div className="flex justify-center items-center text-xl">
            <span>{this.state.counter}</span>
          </div>

          <div className="w-full flex justify-between gap-x-4">
            <button onClick={this.plusNum} className="w-1/2 py-4 bg-teal-300 rounded-md active:bg-teal-500 hover:bg-teal-400 transition-colors duration-50 text-black">
              Plus
            </button>
            <button onClick={this.MinusNum} className="w-1/2 py-4 bg-rose-300 rounded-md active:bg-rose-500 hover:bg-rose-400 transition-colors duration-50 text-black">
              Minus
            </button>
          </div>
        </div>
      </div>
    );
  }
}
