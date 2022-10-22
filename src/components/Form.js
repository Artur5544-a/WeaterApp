import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    hanleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    render() {
        const { value } = this.state
        return (
            <>
                <div className='form_txt'>
                    <h2>Please specify the country</h2>
                </div>
                <form className='form-inp' onSubmit={(ev) => this.props.onSubmit(ev, value)} >
                    <input type={"text"}
                        placeholder={"Search weather..."}
                        value={value}
                        onChange={this.hanleChange}
                    />
                    <button className='search-btn'><FaSearch /></button>
                </form>
            </>
        )
    }
}
