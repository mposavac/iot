import {initializeApp, getApps} from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const initFirebase = () =>{
    console.log(config);
    if(!getApps().length){
       return initializeApp(config);
    }
}

initFirebase();

export default initFirebase ;