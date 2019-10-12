import React from 'react'

export default class Experience extends React.Component {

    render() {
        return (
            <div>
                <b>{this.props.data.company}</b>
                , {this.props.data.location}<br/>
                {this.props.data.from} - {this.props.data.to}<br/>
                <i>{this.props.data.role}</i>
                <ul>
                    {
                        this.props.data.tasks.map((task, index) => {
                            return (
                                <li key={index}>{task}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}