import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/signup.css';

import Stepone from './Stepone';
import Steptwo from './Steptwo';
import Stepthree from './Stepthree';
import Stepfour from './Stepfour';

import 'firebase/firestore';
import firebase from 'firebase/compat/app';

import { collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { db } from '../Firebase/FirebaseConfig';

import { readAndCompressImage } from 'browser-image-resizer';
import { imageConfig, storage } from '../Firebase/FirebaseConfig';
import { toast } from 'react-toastify';
import { getDownloadURL } from 'firebase/storage';
import Login from './Login';

export default function App() {
	const [isUploading, setIsUploading] = useState(false);
	const [downloadUrl, setDownloadUrl] = useState(null);
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: '',
		uname: '',
		pwd: '',
		cpwd: '',

		fname: '',
		lname: '',
		phno: '',
		phno_2: '',
		date: '',

		image1: '',
	});

	// Signup Authentication

	const Authentication = () => {
		const authentication = getAuth();
		{
			createUserWithEmailAndPassword(authentication, data.email, data.pwd).then(
				(response) => {
					const uid = response.user.uid;
					console.log(uid);
					addData(uid);
					navigate('/login');

					sessionStorage.setItem(
						'Auth Token',
						response._tokenResponse.refreshToken,
					);
					return response.user.uid;
				},
			);
		}
	};

	// Add data in  firebase  cloud firestore

	const addData = async (uid) => {
		try {
			const docRef = await addDoc(collection(db, 'Users'), {
				uname: data.uname,
				email: data.email,
				fname: data.fname,
				lname: data.lname,
				phno: data.phno,
				phno_2: data.phno_2,
				date: data.date,
				uid: uid,
				image1: downloadUrl,
			});
			console.log('Document written with ID:', docRef.id);
		} catch (e) {
			console.error('Error adding Details :', e);
		}
	};

	// To upload image to firebase and then set the the image link in the state of the app

	const imagePicker = async (e) => {
		// Upload image and set D-URL to state

		try {
			const file = e.target.files[0];

			const metadata = {
				contentType: file.type,
			};

			const resizedImage = await readAndCompressImage(file, imageConfig);

			const storageRef = await firebase.storage().ref();
			const uploadTask = storageRef
				.child('image/' + file.name)
				.put(resizedImage, metadata);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					setIsUploading(true);
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is' + progress + ' % done');

					switch (snapshot.state) {
						case 'paused':
							setIsUploading(false);
							console.log('UPloading is paused');
							break;
						case 'running':
							console.log('UPloading is in progress...');
							break;
					}
					if (progress == 100) {
						setIsUploading(false);
						console.log('uploaded', { type: 'success' });
					}
				},
				(error) => {
					switch (error.code) {
						case 'storage/unauthorized':
							// User doesn't have permission to access the object
							break;
						case 'storage/canceled':
							// User canceled the upload
							break;

						// ...

						case 'storage/unknown':
							// Unknown error occurred, inspect error.serverResponse
							break;
					}
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref)
						.then((downloadURL) => {
							console.log('File available at', downloadURL);
							setDownloadUrl(downloadURL);
						})
						.catch((err) => console.log(err));
				},
			);
		} catch (error) {
			console.error(error);
			toast('Something went wrong', { type: 'error' });
		}
	};

	const [currentStep, setCurrentStep] = useState(0);

	//  when all form data submitted then call authentication function
	const makeRequest = (formData) => {
		Authentication();

		console.log('Form Submitted', formData);
	};

	// go to next step

	const handleNextStep = (newData, final = false) => {
		setData((prev) => ({ ...prev, ...newData }));

		if (final) {
			makeRequest(newData);
			return;
		}

		setCurrentStep((prev) => prev + 1);
	};

	const handlePrevStep = (newData) => {
		setData((prev) => ({ ...prev, ...newData }));
		setCurrentStep((prev) => prev - 1);
	};

	const steps = [
		<Stepone next={handleNextStep} data={data} />,
		<Steptwo next={handleNextStep} prev={handlePrevStep} data={data} />,
		<Stepthree
			next={handleNextStep}
			prev={handlePrevStep}
			data={data}
			imagePicker={imagePicker}
			downloadUrl={downloadUrl}
		/>,
		<Stepfour next={handleNextStep} prev={handlePrevStep} data={data} />,
	];

	console.log('data', data);

	return <div className="App">{steps[currentStep]}</div>;
}
