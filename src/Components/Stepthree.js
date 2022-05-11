import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../Styling/signup.css';

const Stepthree = (props) => {
	const handleSubmit = (values) => {
		props.next(values);
	};

	// const schema = Yup.object().shape({
	// 	image1: Yup.mixed().required('A file is required'),
	// });

	return (
		<Formik
			initialValues={props.data}
			onSubmit={handleSubmit}
			// validationSchema={schema}
		>
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
												<li id="confirm">
													<strong>Finish</strong>
												</li>
											</ul>
											<fieldset>
												<div className="form-card">
													<h2 className="fs-title">Id proofs</h2>

													<div>
														<label htmlFor="imagepicker" className="snapshot">
															<img
																src={props.image}
																alt="addhar card"
																className="addhar_Card"
															/>
														</label>
														<input
															type="file"
															name="image1"
															accept="image/*"
															multiple={false}
															onChange={(e) => props.imagePicker(e)}
															className="hidden"
														/>
														{/* <ErrorMessage name="image1" /> */}
													</div>
												</div>
												<Field
													type="button"
													onClick={() => props.prev(values)}
													name="previous"
													className="previous action-button-previous"
													value="Previous"
												/>
												<Field
													type="submit"
													name="next"
													className="next action-button"
													value="Next Step"
												/>
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

export default Stepthree;
