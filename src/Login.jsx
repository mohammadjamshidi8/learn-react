import React, { Component } from 'react'

export default class Login extends Component {

    constructor (props) {
        super (props)

        this.state = {
            submitted : false,
            nameValue : '',
        }

        this.submitHandler = this.submitHandler.bind(this)
        this.nameInputHandler = this.nameInputHandler.bind(this)
    }

    submitHandler (e) {
        e.preventDefault()
        this.setState({submitted: true})
    }

    nameInputHandler (e) {
        this.setState({nameValue : e.target.value})
    }

    

  render() {
    return (
      <div className='bg-orange-200 flex w-full h-screen justify-center items-center'>
        <div className='bg-orange-400 p-5 rounded-md text-white flex flex-col gap-y-7 w-[300px]'>
            <form action="" onSubmit={this.submitHandler} className='w-full flex flex-col items-center gap-y-4'>
                <input type="text" id="" className='py-4 w-full rounded-md outline-none text-black px-4 font-bold' placeholder='Enter your name' onChange={this.nameInputHandler} />
                {this.state.submitted && this.state.nameValue.length === 0 
                ? (<span className='font-bold text-white self-start'>please fill input first</span> )
                : null}
                <button className='bg-teal-500 w-full py-2 rounded-md font-bold text-black'>Submit</button>
            </form>
        </div>
      </div>
    )
  }
}
