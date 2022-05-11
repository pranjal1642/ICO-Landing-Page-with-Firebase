import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<header className="header sticky">
				<a href="#" className="logo">
					<div className="logo__img"></div>
					<div className="logo__title">Cryptoland</div>
				</a>

				<ul className="menu">
					<li className="menu__item">
						<Link to={`/`} className="menu__link">
							Home
						</Link>
					</li>
					<li className="menu__item">
						<a href="#about" className="menu__link">
							About
						</a>
					</li>
					<li className="menu__item">
						<a href="#services" className="menu__link">
							Services
						</a>
					</li>
					<li className="menu__item">
						<a href="#map" className="menu__link">
							Road Map
						</a>
					</li>

					<li className="menu__item">
						<a href="#team" className="menu__link">
							Team
						</a>
					</li>
				</ul>

				<div className="header__right">
					<div className="select">
						<select className="select select-hidden">
							<option value="ru">ru</option>
							<option value="ua">ua</option>
							<option value="en">en</option>
						</select>
						<div className="select-styled">ru</div>
						<ul className="select-options">
							<li rel="ru">ru</li>
							<li rel="ua">ua</li>
							<li rel="en">en</li>
						</ul>
					</div>
					<div className="sign-in-wrap">
						<Link to={`/login`} href="" className="btn-sign-in">
							Sign in
						</Link>
					</div>
				</div>

				<div className="btn-menu">
					<div className="one"></div>
					<div className="two"></div>
					<div className="three"></div>
				</div>
			</header>

			{/* <nav classNameNameName="navbar navbar-expand-lg mynav py-3 shadow-sm">
				<div classNameNameName="container">
					<div classNameNamename="logo">
						<div classNameName="logo__img"></div>
						<div classNameName="logo__title">Cryptoland</div>
					</div>
					<button
						classNameNameName="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span classNameNameName="navbar-toggler-icon"></span>
					</button>
					<div
						classNameNameName="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul classNameNameName="navbar-nav mx-auto mb-2 mb-lg-0">
							<li classNameNameName="nav-item">
								<Link
									to={`/`}
									classNameNameName="nav-link active"
									aria-current="page"
								>
									Home
								</Link>
							</li>

							<li classNameNameName="nav-item">
								<a classNameNameName="nav-link" href="#">
									About
								</a>
							</li>
							<li classNameNameName="nav-item">
								<a classNameNameName="nav-link" href="#">
									Road Map
								</a>
							</li>
							<li classNameNameName="nav-item">
								<a classNameNameName="nav-link" href="#">
									Staistics
								</a>
							</li>
							<li classNameNameName="nav-item">
								<a classNameNameName="nav-link" href="#">
									Token
								</a>
							</li>
							<li classNameNameName="nav-item">
								<a classNameNameName="nav-link" href="#">
									Team
								</a>
							</li>
						</ul>
						<>
							<div classNameNameName="menu">
								<Link to={`/signup`} classNameNameName="btn btn-outline-dark  ">
									<i classNameNameName="fa fa-user-plus me-1">Signup</i>
								</Link>
								<Link
									to={`/login`}
									href=""
									classNameNameName="btn btn-outline-dark ms-2"
								>
									<i classNameNameName="fa fa-sign-in me-1">Login</i>
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
