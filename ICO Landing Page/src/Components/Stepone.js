import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Stepone = (props) => {
	const handleSubmit = (values) => {
		props.next(values);
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Required'),
		uname: Yup.string()
			.min(2, 'Too Short')
			.max(20, 'Too Long')
			.required('Required'),

		pwd: Yup.string().required('Password is required'),
		cpwd: Yup.string().test(
			'passwords-match',
			'Passwords must match',
			function (value) {
				return this.parent.pwd === value;
			},
		),
	});

	return (
		<Formik
			initialValues={props.data}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{() => (
				<div className="container-fluid ">
					<div class="row justify-content-center mt-0">
						<div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
							<div className="row">
								<div className="col-lg-12 ">
									<Form autoComplete="off" id="msform">
										<div className="wrapper">
											<ul id="progressbar">
												<li className="active" id="account">
													<strong>Account</strong>
												</li>

												<li id="personal">
													<strong>Personal</strong>
												</li>
												<li id="payment">
													<strong>Id Proofs</strong>
												</li>
												<li id="confirm">
													<strong>Finish</strong>
												</li>
											</ul>

											<fieldset>
												<div class="form-card">
													<h2 class="fs-title">Account Information</h2>
													<Field
														type="email"
														name="email"
														placeholder="Email Id"
													/>
													<ErrorMessage name="email" />
													<Field
														type="text"
														name="uname"
														placeholder="UserName"
													/>
													<ErrorMessage name="uname" />
													<Field
														type="password"
														name="pwd"
														placeholder="Password"
													/>
													<ErrorMessage name="pwd" />
													<Field
														type="password"
														name="cpwd"
														placeholder="Confirm Password"
													/>
													<ErrorMessage name="cpwd" />
												</div>
												<Field
													type="submit"
													name="next"
													class="next action-button"
													value="Next Step"
												/>
											</fieldset>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Formik>
	);
};

export default Stepone;
