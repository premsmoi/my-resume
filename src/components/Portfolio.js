import React from 'react'

export default class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.data.map((obj, index) => {
                            return (
                                <li key = {index}>
                                {obj.description}<br/>
                                See more in <a href={obj.url}>{obj.url}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}