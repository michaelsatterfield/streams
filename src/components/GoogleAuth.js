import React, {Component} from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '229529128509-dksbjkqub59f2aboevmldfpg4s3eum1q.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({isSignedIn: })
            })
            });
    }


    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    }
}

export default GoogleAuth;
