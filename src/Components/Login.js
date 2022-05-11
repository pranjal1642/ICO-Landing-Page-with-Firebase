import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import '../Styling/Login.css';

const Login = () => {
	const navigate = useNavigate();
	const authentication = getAuth();

	const [data, setdata] = useState({
		email: '',
		password: '',
	});

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().required('Required'),
	});

	const onSubmit = (values) => {
		// Login Authentication

		signInWithEmailAndPassword(authentication, values.email, values.password)
			.then((userCrudential) => {
				const user = userCrudential.user;

				if (user) {
					navigate('/');
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				if (errorCode === 'auth/wrong-password') {
					console.log.error('Please check the Password');
				}
				if (errorCode === 'auth/user-not-found') {
					console.log.error('Please check the Email');
				}
				if (errorMessage === 'auth/email-already-in-use') {
					console.log.error('Email Already in Use');
				}
			});
		console.log(values);
	};

	return (
		<Formik
			initialValues={data}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<div className="blo">
				<Form className="container-fluid p-10">
					<div className="row">
						<div className="col-lg-12 ">
							<div className="login">
								<h1>Login Form</h1>
								<span className="fa fa-user"></span>
								<label htmlFor="exampleInputEmail1">Email address</label>

								<Field
									type="email"
									className="form-control"
									name="email"
									id="exampleInputEmail1"
								/>
								<ErrorMessage name="email" />

								<span className="fa fa-lock"></span>
								<label htmlFor="exampleInputPassword1">Password</label>
								<Field
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									name="password"
								/>
								<ErrorMessage name="password" />
								<div className="loginbutton">
									<button type="Submit" className="btn mt-4">
										<span className="log">Login</span>
									</button>
									<h6>
										Not a member? <br />
										<span className="signup">
											<Link to={`/signup`}> SignUp</Link>
										</span>
									</h6>
								</div>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</Formik>
	);
};

export default Login;
