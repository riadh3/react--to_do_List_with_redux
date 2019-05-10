import React, { Component } from 'react';
import Item from './item'
import { connect } from 'react-redux'
import { handelInput, addToList } from './actions'




class App extends Component {


    addTask = (event) => {
        event.preventDefault()

        this.props.task ?
            this.props.dispatch(addToList(this.props.task))
            : null
        this.props.dispatch(handelInput(''))
    }

    render() {
        return (
            <div className='to-do-list'>
                <div className='header'>
                    <form onSubmit={this.addTask}>
                        <input
                            type='text'
                            placeholder='enter your task'
                            onChange={(event) => this.props.dispatch(
                                handelInput(event.target.value))}
                            value={this.props.task}
                        />
                        <button type='submit'> Add to list</button>
                    </form>
                </div>

                <Item />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        task: state.task
    }
}
const AppConatainer = connect(mapStateToProps)(App)

export default AppConatainer;