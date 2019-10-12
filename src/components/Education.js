import React from 'react'

export default class Education extends React.Component {

    render() {
        return (
            <div>
                <b>{this.props.data.Institute}</b>
                , {this.props.data.location}<br/>
                {this.props.data.from} - {this.props.data.to}<br/>
                Degree: {this.props.data.degree}<br/>
                GPAX: {this.props.data.gpax}/4.00
            </div>
        )
    }
}