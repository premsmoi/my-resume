import React from 'react';
import ProfilePicture from '../res/Passakorn.jpg'

export default class AboutMe extends React.Component {

    render() {
        return (
            <div>
                <img src={ProfilePicture} alt="Profile" width={237.3} height={308.9} />
                <h2>{this.props.data.firstname} {this.props.data.lastname}</h2>
                Address: {this.props.data.address}<br/>
                Email: {this.props.data.email}<br/>
                Tel: {this.props.data.tel}
            </div>
        );
    }
}