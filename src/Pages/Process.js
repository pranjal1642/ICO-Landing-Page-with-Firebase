import React from 'react';

const Process = () => {
	return (
		<>
			<section class="process section">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="block-header block-header--animated block-header--center">
								<div class="subtitle">Process</div>
								<h2 class="title title--medium title--white">How it Works</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="process__steps">
								<div
									class="process__step aos-init aos-animate"
									data-aos="fade-left"
								>
									<div class="process__step-icon">
										<img
											src="https://demo.artureanec.com/html/cryptoland/demo_3/img/pr-icon-1.svg
"
											alt=""
										/>
									</div>
									<h3 class="process__step-title">Processing</h3>
								</div>

								<div
									class="process__step aos-init aos-animate"
									data-aos="fade-left"
									data-aos-delay="200"
								>
									<div class="process__step-icon">
										<img
											src="https://demo.artureanec.com/html/cryptoland/demo_3/img/pr-icon-2.svg"
											alt=""
										/>
									</div>
									<h3 class="process__step-title">Identification</h3>
								</div>

								<div
									class="process__step aos-init aos-animate"
									data-aos="fade-left"
									data-aos-delay="400"
								>
									<div class="process__step-icon">
										<img
											src="https://demo.artureanec.com/html/cryptoland/demo_3/img/pr-icon-3.svg"
											alt=""
										/>
									</div>
									<h3 class="process__step-title">
										Exchange for other <br /> crypto currency
									</h3>
								</div>
								<div
									class="process__step aos-init aos-animate"
									data-aos="fade-left"
									data-aos-delay="600"
								>
									<div class="process__step-icon">
										<img
											src="https://demo.artureanec.com/html/cryptoland/demo_3/img/pr-icon-4.svg"
											alt=""
										/>
									</div>
									<h3 class="process__step-title">Analitic</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Process;
