import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styling/signup.css';

const Steptwo = (props) => {
	const handleSubmit = (values) => {
		props.next(values);
	};

	const validationSchema = Yup.object({
		fname: Yup.string()
			.min(2, 'Too Short')
			.max(20, 'Too Long')
			.required('Required'),
		lname: Yup.string()
			.min(2, 'Too Short')
			.max(20, 'Too Long')
			.required('Required'),
		phno: Yup.number()
			.typeError("That doesn't look like a phone number")
			.positive("A phone number can't start with a minus")
			.integer("A phone number can't include a decimal point")

			.required('A phone number is required'),
		phno_2: Yup.number()
			.typeError("That doesn't look like a phone number")
			.positive("A phone number can't start with a minus")
			.integer("A phone number can't include a decimal point")
			.required('Alternate Contact No. Required'),
		date: Yup.date().required(' Required Date'),
	});

	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={props.data}
			onSubmit={handleSubmit}
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
												<li id="payment">
													<strong>Id Proofs</strong>
												</li>
												<li id="confirm">
													<strong>Finish</strong>
												</li>
											</ul>
											<fieldset>
												<div className="form-card">
													<h2 className="fs-title">Personal Information</h2>
													<Field
														type="text"
														name="fname"
														placeholder="First Name"
													/>
													<ErrorMessage name="fname" />
													<Field
														type="text"
														name="lname"
														placeholder="Last Name"
													/>
													<ErrorMessage name="lname" />

													<Field
														type="number"
														name="phno"
														placeholder="Contact No."
													/>
													<ErrorMessage name="phno" />
													<Field
														type="number"
														name="phno_2"
														placeholder="Alternate Contact No."
													/>
													<ErrorMessage name="phno_2" />
													<Field type="date" name="date" placeholder="Date" />
													<ErrorMessage name="date" />
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
													// onClick={() => props.next(values)}
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
export default Steptwo;
