import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDizCaDcWYMMwApAxj90YSQitq5rQcqrYU',
	authDomain: 'first-task-6635a.firebaseapp.com',
	projectId: 'first-task-6635a',
	storageBucket: 'first-task-6635a.appspot.com',
	messagingSenderId: '672971717776',
	appId: '1:672971717776:web:f0aafae2d31b5975216c15',
	measurementId: 'G-XP49ESQMXE',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

// image config style
export const imageConfig = {
	quality: 0.2,
	maxWidth: 200,
	maxHeight: 200,
	autoRotate: true,
};

export default firebaseConfig;
