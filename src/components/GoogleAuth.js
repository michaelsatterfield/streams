import React, {Component} from 'react';

class GoogleAuth extends Component {
    //null because not sure if user is signed in at beginning
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '229529128509-dksbjkqub59f2aboevmldfpg4s3eum1q.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
            });
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null){
            return <div>I don't know if were signed in</div>
        } else if (this.state.isSignedIn){
            return <div>Signed In</div>
        }
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
