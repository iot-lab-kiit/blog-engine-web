import React,{useState}from "react";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "../styles/sweet.css";

import "../styles/Register.css";

export default function Register() {
	const history = useHistory();
	//set usestates for the firstname lastname email password and confirm password
	const [firstname,setFirstname] =useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const HandleSubmit=(e)=>{
		e.preventDefault();
		//check if the password and confirm password is same
		if(password!==confirmpassword){
			swal("Password and confirm password is not same");
		}else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			swal({
				title: "Enter valid email address",
				text: "",
				icon: "warning",
				buttons: {
					confirm: { text: "Okay", className: "sweet-warning" },
				},
			});
		} else {
			//if password and confirm password is same then call the register function
			axios
				.post("https://myways-backend.herokuapp.com/api/register", {
					email: email,
					password: password,
					confirmpassword: confirmpassword,
					firstname: firstname,
					lastname: lastname,
				})
				.then((response) => {
					console.log(response.data);
					if (response.data) {
						//redirect to login page
						history.push("/login");
						swal({
							title: "Registration Successful",
							icon: "success",
							buttons: {
								confirm: { text: "Okay", className: "sweet-warning" },
							},
						});
					} else {
						swal({
							title: "Registration Failed",
							text: response.json,
							icon: "error",
							buttons: {
								confirm: { text: "Okay", className: "sweet-warning" },
							},
						});
					}
				})
				.catch((error) => {
					console.log(error);
					swal({
						title: "Registration Failed",
						text: "",
						icon: "error",
						buttons: {
							confirm: { text: "Okay", className: "sweet-warning" },
						},
					});
				});
		}
	}

	return (
		<div className="full-center">
			<div className="center">
				<form>
					<div className="names">
						<span className="first-name">
							<label htmlFor="firstname" className="label">Firstname</label>
							<input
								id="firstname"
								type="text"
								name="firstname"
								placeholder="John"
								autoComplete="given-name"
								onChange={(e) => setFirstname(e.target.value)}
								className="input"
								required
							/>
						</span>
						<span className="last-name">
							<label htmlFor="lastname" className="label">Lastname</label>
							<input
								id="lastname"
								type="text"
								name="lastname"
								placeholder="Doe"
								onChange={(e) => setLastname(e.target.value)}
								autoComplete="family-name"
								className="input"
								required
							/>
						</span>
					</div>
					<label for="email" className="label">E-mail</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						placeholder="john.doe@company.com"
						autoComplete="email"
						className="input"
						required
					/>
					<label for="password" className="label">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						placeholder="********"
						autoComplete="new-password"
						className="input"
						required
					/>
					<label for="password-confirm" className="label">Confirm password</label>
					<input
						id="password-confirm"
						type="password"
						name="password-confirm"
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder="********"
						autoComplete="new-password"
						className="input"
						required
					/>

					<button type="submit" onClick={HandleSubmit}	className="submit-button">
						Sign up
					</button>

					<Link to="/login">
						<p className="link">Already registered?</p>
					</Link>
				</form>
			</div>
		</div>
	);
}
