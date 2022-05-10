import React from 'react';

const RoadMap = () => {
	return (
		<>
			<section id="map" class="map section section--no-pt">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="block-header block-header--animated block-header--center">
								<div class="subtitle">Our way</div>
								<h2 class="title title--medium title--black">Road Map</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-10 offset-lg-1">
							<div class="road">
								<div class="road__item">
									<div class="road__item-metka"></div>
									<div class="road__item-content">
										<div class="road__item-title">June 2017</div>
										<p>Stats Center Beta</p>
									</div>
								</div>

								<div class="road__item">
									<div class="road__item-metka"></div>
									<div class="road__item-content">
										<h4 class="road__item-title">July 2017</h4>
										<p>BI Intergration</p>
									</div>
								</div>

								<div class="road__item">
									<div class="road__item-metka"></div>
									<div class="road__item-content">
										<h4 class="road__item-title">December 2017</h4>
										<p>Fantasy Prototype</p>
									</div>
								</div>

								<div class="road__item">
									<div class="road__item-metka"></div>
									<div class="road__item-content">
										<h4 class="road__item-title">December 2017</h4>
										<p>Tokens Crowdsale</p>
									</div>
								</div>

								<div class="road__item road__item-active">
									<div class="road__item-metka"></div>
									<div class="road__item-content">
										<h4 class="road__item-title">January 2018</h4>
										<p>Blogging Platform</p>
									</div>
								</div>

								<div class="road__item road__item-next">
									<div class="road__item-metka"></div>
									<div class="road__item-content">
										<h4 class="road__item-title">April 2018</h4>
										<p>Fantasy Sports with SCR</p>
									</div>
								</div>

								<div class="road__item road__item-next">
									<div class="road__item-metka"></div>
									<div class="road__item-content">
										<h4 class="road__item-title">May 2018</h4>
										<p>Advertizing System</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default RoadMap;
