import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
                <ul>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                </ul>
            </div>
        )
    }
}

export default Navbar
