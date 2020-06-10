// import FirebaseKeys from "./babel.config"
// //import firebase from 'firebase'
// import * as firebase from 'firebase';

// class Fire {
//     constructor(){
//         firebase.initializeApp(FirebaseKeys)
//     }

// addPost = async({text,localUri}) => {
//     const remoteUri = await this.uploadPhototoAsync(localUri)

//     return new Promise((res,rej) => {
//         this.firestore.collection("posts").add({
//             text,
//             uid: this.uid,
//             timestamp: this.timestamp,
//             image: remoteUri
//         })
//         .then(ref => {
//             res(ref)
//         })
//         .catch(error =>{
//             rej(error);
//         });
//     });
// };



// uploadPhototoAsync = async uri => {
//     const path ='photos/${this.uid}/${Date.now()}.jpg'

//     return new Promise(async (res,rej)=>{
//         const response = await fetch(uri)
//         const file= await response.blob()

//         let upload = firebase.storage().ref(path).put(file)
//         upload.on("state_changed", snapshot => {}, err =>{
//             rej(err)
//         },
//         async ()=> {
//             const url = await upload.snapshot.ref.getDownloadURL();
//             res(url);
//         })
//     })
// }




//     get firestore(){
//         return firebase.firestore()
//     }
//     get uid(){
//         return (firebase.auth().currentUser || {}).uid;
//     }
//     get timeStamp(){
//         return Date.now();
//     }
// }
// Fire.shared = new Fire();
// export default Fire;
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLxFR1aQ3lqID7i-sN8y4qFn-keYRRMxk",
  authDomain: "socialapp-27882.firebaseapp.com",
  databaseURL: "https://socialapp-27882.firebaseio.com",
  projectId: "socialapp-27882",
  storageBucket: "socialapp-27882.appspot.com",
  messagingSenderId: "623708467460",
  appId: "1:623708467460:web:22447bd593640a9baf6051",
  measurementId: "G-G73ET70XJ7"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;