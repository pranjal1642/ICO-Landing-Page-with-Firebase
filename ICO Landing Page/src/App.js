import React from 'react';

//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import firebaseConfig from './Firebase/FirebaseConfig';

//components
import Home from './Pages/Home';
import SignUp from './Components/Signup';
import Login from './Components/Login';

//layout
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

//init-firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
