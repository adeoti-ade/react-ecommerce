import React from "react";
import Button from "../forms/Button";
import { signInWithGoogle } from "../../firebase/util";
import './style.css';

class SignIn extends React.Component {
    handleSubmit = async e => {
        e.preventDefault();
    };
    render() {
        return ( 
            <div className="signin">
                <div className="signin__wrapper">
                    <h2>
                        Login
                    </h2>
                    <div className="form-group">
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="social-auths">
                                <div className="row">
                                    <Button onClick={signInWithGoogle}>
                                        Sign in using google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SignIn;