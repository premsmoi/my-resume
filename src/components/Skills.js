import React from 'react'

export default class Skills extends React.Component {

    render() {
        return (
            <div>
                <ul>
                {
                    this.props.data.map((skill, index) => {
                        return (
                            <li key={index}>{skill}</li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}