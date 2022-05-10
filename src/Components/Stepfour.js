import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../Styling/signup.css';

const Stepfour = (props) => {
	const handleSubmit = (values) => {
		props.next(values, true);
	};

	return (
		<Formik initialValues={props.data} onSubmit={handleSubmit}>
			{({ values }) => (
				<div className="container-fluid ">
					<div className="row justify-content-center mt-0">
						<div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
							<div className="row">
								<div className="col-lg-12 ">
									<Form id="msform">
										<div className="wrapper">
											<ul id="progressbar">
												<li className="active" id="account">
													<strong>Account</strong>
												</li>

												<li className="active" id="personal">
													<strong>Personal</strong>
												</li>
												<li className="active" id="payment">
													<strong>Id Proofs</strong>
												</li>
												<li className="active" id="confirm">
													<strong>Finish</strong>
												</li>
											</ul>
											<fieldset>
												<div className="form-card">
													<h2 className="fs-title">Sign up Success</h2>
													<div className="row justify-content-center">
														<div className="col-3">
															<img
																src="https://img.icons8.com/color/96/000000/ok--v2.png"
																alt="signup success"
																className="fit-image"
															/>
														</div>
													</div>
													<br />
													<br />
													<div className="row justify-content-center">
														<div className="col-7 text-center">
															<h5>You Have Successfully Signed Up</h5>
														</div>
													</div>
												</div>

												<div>
													<Field
														type="submit"
														name="next"
														className="next action-button"
														values="Submit"
													></Field>
												</div>
											</fieldset>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
					/
				</div>
			)}
		</Formik>
	);
};

export default Stepfour;
