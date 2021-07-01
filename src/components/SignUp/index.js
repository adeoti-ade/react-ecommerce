import React, { Component } from "react";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import "./styles.css";

const initialState = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...initialState,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		console.log(displayName);

		return (
			<div className="sign-up">
				<div className="sign-up__wrapper">
					<h2>SignUp</h2>
					<form action="">
						<FormInput
							type="text"
							name="displayName"
							value={displayName}
							placeholder="Full name"
							onChange={this.handleChange}
						/>
						<FormInput
							type="text"
							name="email"
							value={email}
							placeholder="Email"
							onChange={this.handleChange}
						/>
						<FormInput
							type="password"
							name="password"
							value={password}
							placeholder="Password"
							onChange={this.handleChange}
						/>
						<FormInput
							type="password"
							name="confirmPassword"
							value={confirmPassword}
							placeholder="Confirm Password"
							onChange={this.handleChange}
						/>
                        <Button type="submit">
                            Register
                        </Button>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUp;
