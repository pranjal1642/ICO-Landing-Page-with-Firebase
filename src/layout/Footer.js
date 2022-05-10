import React from 'react';

const Footer = () => {
	return (
		<>
			<footer class="footer ">
				<div class="container">
					<div class="row">
						<div class="col-lg-5 col-md-12 footer__block">
							<a href="" class="logo">
								<img
									class="logo__img--big"
									src="https://demo.artureanec.com/html/cryptoland/demo_3/img/Logo_gradient.svg"
									alt=""
								/>
							</a>

							<div class="footer__text">
								<p>523 Sylvan Ave, 5th Floor Mountain View, CA</p>
								<p>+1 (234) 56789, +1 987 654 3210</p>
								<p>info@cryptoland.com</p>
								<p>supportcenter@cryptoland.com</p>
							</div>
						</div>

						<div class="col-lg-4 col-md-8 offset-lg-1">
							<ul class="footer-menu">
								<li class="footer-menu__item">
									<a href="" class="footer-menu__link">
										About
									</a>
								</li>
								<li class="footer-menu__item">
									<a href="" class="footer-menu__link">
										Services
									</a>
								</li>
								<li class="footer-menu__item">
									<a href="" class="footer-menu__link">
										Road Map
									</a>
								</li>
								<li class="footer-menu__item">
									<a href="" class="footer-menu__link">
										Statistic
									</a>
								</li>
								<li class="footer-menu__item">
									<a href="" class="footer-menu__link">
										Token
									</a>
								</li>
								<li class="footer-menu__item">
									<a href="" class="footer-menu__link">
										WhitePappers
									</a>
								</li>
								<li class="footer-menu__item">
									<a href="" class="footer-menu__link">
										Team
									</a>
								</li>
								<li class="footer-menu__item">
									<a href="" class="footer-menu__link">
										FAQ
									</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-2 col-md-4">
							<ul class="footer__list">
								<li class="footer__list-item">Whitepaper</li>
								<li class="footer__list-item">Technical Paper</li>
								<li class="footer__list-item">Business Summary</li>
								<li class="footer__list-item">Brand Resources</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col">© 2022, Cryptoland Theme by Artureanec</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
