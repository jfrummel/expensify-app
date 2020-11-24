import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-4XJ6J0GRYG"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// firebase.database().ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// firebase.database().ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// firebase.database().ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });




// firebase.database().ref('notes').push({
//     title: "Beer",
//     body: "Traquair, Fullers ESB, Wells Bombardier"
// });


// firebase.database().ref('notes/-MMh3XbC1_VssE94rw6x').update({
//     body: "Drink beer"
// });

// firebase.database().ref('notes/-MMh3XbC1_VssE94rw6x').once('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// firebase.database().ref('expenses').push({
//     description: "food",
//     note: "",
//     amount: 1050,
//     createdAt: 12542200
// });


// firebase.database().ref('expenses').once('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// firebase.database().ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// firebase.database().ref().on('value', (snaphsot) => {
//     const info = snaphsot.val();
//     console.log(`${info.name} is a ${info.job.title} at ${info.job.company}.`);
// });

// setTimeout(() => {
//     firebase.database().ref().update({
//         'job/company': "Quester"
//     });
// }, 3500);










// firebase.database().ref().once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((error) => { console.log("Error fetching data", error); })


// firebase.database().ref().set({
//     name: "Jeremy Rummel",
//     age: 39,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: "Quester"
//     },
//     location: {
//         city: "Winterset",
//         state: "IA"
//     }
// }).then(() => { console.log("Data is saved!") })
//     .catch((error) => { console.log("Something went wrong", error) });

// firebase.database().ref('location/state').remove()
//     .then(() => {console.log("Removed");})
//     .catch((error)=> { console.log("Data was not saved", error) });

// firebase.database().ref('location').update({ city: "Dexter", state: "WI" })
//     .then(() => { console.log("Location updated"); })
//     .catch((error) => { console.log("Location not updated", error) });

// firebase.database().ref().update({
//     stressLevel: 9,
//     'job/company': "Amazon",
//     'location/city': "Hubertus"
// })
//     .then(() => { console.log("Data updated"); })
//     .catch((error) => { console.log("Data not updated", error) });

