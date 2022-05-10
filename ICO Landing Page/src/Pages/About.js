import React from 'react';

const About = () => {
	return (
		<>
			<section id="about" class="about section section--no-pt ">
				<div class="container">
					<div class="row about__first-row">
						<div class="col-lg-6 aos-init aos-animate" data-aos="fade-right">
							<div class="block-header">
								<div class="subtitle subtitle--tire">About ICO</div>
								<h2 class="title title--black title--medium">
									Cryptoland Theme is the best for your ICO{' '}
								</h2>
							</div>

							<p>
								Spend real fights effective anything extra by leading.
								Mouthwatering leading how real formula also locked-in have can
								mountain thought. Jumbo plus shine sale.
							</p>

							<ul class="about__list-marker">
								<li>Mouthwatering leading how real formula also</li>
								<li>Locked-in have can mountain thought</li>
								<li>Locked-in have can mountain thought</li>
							</ul>
							<a
								class="popup-youtube video-btn"
								href="http://www.youtube.com/watch?v=0O2aH4XLbto"
							></a>
						</div>
						<div className="col-lg-6">
							<div className="b2image">
								<img
									src="https://demo.artureanec.com/html/cryptoland/demo_3/img/about-img-1.png"
									class="about__img-1"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div class="row about__second-row">
						<div className="col-lg-6">
							<div className="b2image">
								<img
									src="https://demo.artureanec.com/html/cryptoland/demo_3/img/about-img-2.png"
									class="about__img-2"
									alt=""
								/>
							</div>
						</div>

						<div
							class="col-lg-6 offset-lg-6 aos-init aos-animate"
							data-aos="fade-left"
						>
							<div class="block-header">
								<div class="subtitle subtitle--tire">decentralised economy</div>
								<h2 class="title title--black title--medium">
									A banking platform that enables developer solutions
								</h2>
							</div>

							<p>
								Spend real fights effective anything extra by leading.
								Mouthwatering leading how real formula also locked-in have can
								mountain thought. Jumbo plus shine sale.
							</p>

							<ul class="about__list-check">
								<li>
									<span>Modular structure</span> enabling easy implementation
									for different softwares
								</li>
								<li>
									<span>Advanced payment</span> and processing technologies,
									fine-tuned from more than 3 years of development testing
								</li>
								<li>
									<span>Unified AppStore</span> for retail cryptocurrency
									solutions with a Crypterium products audience
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
