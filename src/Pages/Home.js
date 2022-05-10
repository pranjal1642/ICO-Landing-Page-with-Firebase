import React from 'react';

import '../Styling/Home.css';
import About from './About';
import Pages from './Pages';
import Process from './Process';
import RoadMap from './RoadMap';
import Team from './Team';

const Home = () => {
	return (
		<>
			<section class="promo active">
				<div class="container">
					<div class="row align-items-center ">
						<div class="col">
							<div
								class="promo__content aos-init aos-animate"
								data-aos="fade-up"
							>
								<div class="promo__subtitle">Cryptoland</div>
								<h1 class="title title--big title--white promo__title">
									Blockchain is future
									<span>of the business technology</span>
								</h1>
								<p>
									Spend real fights effective anything extra by leading.
									Mouthwatering leading how real formula also locked-in have can
									mountain thought. Jumbo plus shine sale.
								</p>

								<form action="#" id="subscribe-top" class="form join-us">
									<input
										name="subscribe_top__email"
										class="form__input join-us__input"
										type="email"
										placeholder="Email"
									/>
									<button class="form__btn join-us__btn">Join ICO</button>
								</form>
							</div>

							<img
								src="https://demo.artureanec.com/html/cryptoland/demo_3/img/city.png"
								data-aos="fade-left"
								alt=""
								class="promo__img aos-init aos-animate"
							/>
						</div>
					</div>
				</div>
				<img
					src="https://demo.artureanec.com/html/cryptoland/demo_3/img/aboutBg.png"
					class="promo__bg"
					alt=""
				/>
			</section>
			<section class="partners partners--top-animation section section--small-pt">
				<div class="container">
					<div class="row">
						<div class="col  partners__logoes">
							<div class="partners__logo">
								<img
									src="https://demo.artureanec.com/html/cryptoland/demo_3/img/partners-logo-1.png"
									alt=""
								/>
							</div>
							<div class="partners__logo">
								<img
									src="https://demo.artureanec.com/html/cryptoland/demo_3/img/partners-logo-2.png"
									alt=""
								/>
							</div>
							<div class="partners__logo">
								<img
									src="https://demo.artureanec.com/html/cryptoland/demo_3/img/partners-logo-3.png"
									alt=""
								/>
							</div>
							<div class="partners__logo">
								<img
									src="https://demo.artureanec.com/html/cryptoland/demo_3/img/partners-logo-3.png"
									alt=""
								/>
							</div>
							<div class="partners__logo">
								<img
									src="https://demo.artureanec.com/html/cryptoland/demo_3/img/partners-logo-5.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <section className="promo-active">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div
								className="promo__content aos-init aos-animate"
								data-aos="fade-up"
							>
								<div className="promo__subtitle">Cryptoland</div>
								<h1 className="title title--big title--white promo__title">
									Blockchain is future
									<span>of the bussiness tecnology</span>
								</h1>
								<p>
									Spend real fights effective anything extra by leading.
									Mouthwatering leading how real formula also locked-in have can
									mountain thought. Jumbo plus shine sale. Email JOIN ICO
								</p>
							</div>
						</div>
					
					</div>
				</div>
			</section> */}
			<About />
			<Pages />
			<RoadMap />
			<Process />
			<Team />
		</>
	);
};

export default Home;
