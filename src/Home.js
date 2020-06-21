import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Child from './Child'
export class home extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            address : '',
            age : '',
            phone : ''
        }
    }
    static propTypes = {

    }

    chnageFormValue(evt) {
        const value = evt.target.value;
        //this.state.name = value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
    }   

    render() {
        return (
            <div>
             <h3>Home {JSON.stringify(this.state)}</h3>
             <Child change={(evt)=>this.chnageFormValue(evt)} label={'Name'} name='name' value={this.state.name}/>
             <Child change={(evt)=>this.chnageFormValue(evt)} label={'Address'} name='address' value={this.state.address}/>
             <Child change={(evt)=>this.chnageFormValue(evt)} label={'Phone'} name='phone' value={this.state.phone}/>
             <Child change={(evt)=>this.chnageFormValue(evt)} label={'Age'} name='age' value={this.state.age} />
             <button onClick={()=>this.setState({name : 'Madhumita'})}>Click Me</button>    
            </div>
        )
    }
}

export default home
