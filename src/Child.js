import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Child extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
       
    }
    static propTypes = {

    }

    render() {
        let {value, label, name} = this.props;
        return (
            <div>
              <label>{label} </label>
              <input onChange={(event)=> this.props.change(event) } type="text" value={value} name={name}/>  
            </div>
        )
    }
}

export default Child
