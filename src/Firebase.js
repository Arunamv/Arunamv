import  firebase  from 'firebase';

  
const firebaseConfig = {
    
        apiKey: "AIzaSyD_NDaU_ULski7zJu1XniX1kVbDCywzruM",
        authDomain: "dynamic-6516f.firebaseapp.com",
        databaseURL: "https://dynamic-6516f-default-rtdb.firebaseio.com",
        projectId: "dynamic-6516f",
        storageBucket: "dynamic-6516f.appspot.com",
        messagingSenderId: "191701661698",
        appId: "1:191701661698:web:9fedc90eaa530c083f8f1b",
        measurementId: "G-8TKKXMZJKF"
      };
      
      
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const auth=firebase.auth();
export { auth };
  
export default db;