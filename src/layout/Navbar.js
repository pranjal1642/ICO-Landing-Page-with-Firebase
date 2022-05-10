import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<header class="header sticky">
				<a href="#" class="logo">
					<div class="logo__img"></div>
					<div class="logo__title">Cryptoland</div>
				</a>

				<ul class="menu">
					<li class="menu__item">
						<Link to={`/`} class="menu__link">
							Home
						</Link>
					</li>
					<li class="menu__item">
						<a href="#about" class="menu__link">
							About
						</a>
					</li>
					<li class="menu__item">
						<a href="#services" class="menu__link">
							Services
						</a>
					</li>
					<li class="menu__item">
						<a href="#map" class="menu__link">
							Road Map
						</a>
					</li>

					<li class="menu__item">
						<a href="#team" class="menu__link">
							Team
						</a>
					</li>
				</ul>

				<div class="header__right">
					<div class="select">
						<select class="select select-hidden">
							<option value="ru">ru</option>
							<option value="ua">ua</option>
							<option value="en">en</option>
						</select>
						<div class="select-styled">ru</div>
						<ul class="select-options">
							<li rel="ru">ru</li>
							<li rel="ua">ua</li>
							<li rel="en">en</li>
						</ul>
					</div>
					<div class="sign-in-wrap">
						<Link to={`/login`} href="" class="btn-sign-in">
							Sign in
						</Link>
					</div>
				</div>

				<div class="btn-menu">
					<div class="one"></div>
					<div class="two"></div>
					<div class="three"></div>
				</div>
			</header>

			{/* <nav classNameName="navbar navbar-expand-lg mynav py-3 shadow-sm">
				<div classNameName="container">
					<div classNamename="logo">
						<div className="logo__img"></div>
						<div className="logo__title">Cryptoland</div>
					</div>
					<button
						classNameName="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span classNameName="navbar-toggler-icon"></span>
					</button>
					<div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
						<ul classNameName="navbar-nav mx-auto mb-2 mb-lg-0">
							<li classNameName="nav-item">
								<Link to={`/`} classNameName="nav-link active" aria-current="page">
									Home
								</Link>
							</li>

							<li classNameName="nav-item">
								<a classNameName="nav-link" href="#">
									About
								</a>
							</li>
							<li classNameName="nav-item">
								<a classNameName="nav-link" href="#">
									Road Map
								</a>
							</li>
							<li classNameName="nav-item">
								<a classNameName="nav-link" href="#">
									Staistics
								</a>
							</li>
							<li classNameName="nav-item">
								<a classNameName="nav-link" href="#">
									Token
								</a>
							</li>
							<li classNameName="nav-item">
								<a classNameName="nav-link" href="#">
									Team
								</a>
							</li>
						</ul>
						<>
							<div classNameName="menu">
								<Link to={`/signup`} classNameName="btn btn-outline-dark  ">
									<i classNameName="fa fa-user-plus me-1">Signup</i>
								</Link>
								<Link
									to={`/login`}
									href=""
									classNameName="btn btn-outline-dark ms-2"
								>
									<i classNameName="fa fa-sign-in me-1">Login</i>
								</Link>
							</div>
						</>
					</div>
				</div>
			</nav> */}
		</>
	);
};

export default Navbar;
