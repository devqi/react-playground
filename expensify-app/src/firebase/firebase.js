import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQ4icSmHFiOShW3dzPWdmyhhHHWSR-fUI",
    authDomain: "expensify-98a02.firebaseapp.com",
    databaseURL: "https://expensify-98a02.firebaseio.com",
    projectId: "expensify-98a02",
    storageBucket: "expensify-98a02.appspot.com",
    messagingSenderId: "321141692729"
};

firebase.initializeApp(config);

firebase
    .database()
    .ref()
    .set({
        name: 'pandaZ',
        age: 29,
        isSingle: false,
        location: {
            city: 'Hamburg',
            country: 'Germany'
        },
        job: {
            title: 'Software Developer',
            company: 'Amazon'
        }
    }).then(
        (data) => {
            console.log('this is a success handler');
        }, 
        (error) => {
            console.log('this is a failure handler', error);            
    });

// firebase
//     .database()
//     .ref('age')
//     .set(31);
// firebase
//     .database()
//     .ref('location/city')
//     .set('Frankfurt am Main');

// firebase
//     .database()
//     .ref('attributes/height')
//     .set(165);
// firebase
//     .database()
//     .ref('attributes/weight')
//     .set(45);

const database = firebase.database();
/**
 * fetch data from database
 */
const ref = database.ref();
// ref.once('value')
//     .then(function (snapshot) {
//         const key = snapshot.key;
//         const value = snapshot.val();
//         console.log(key + ' = ' + value);
//     });
const onValueChange = (snapshot) =>{
    // const key = snapshot.key;
    // const value = snapshot.val();
    // console.log(key + ' : ' + value);

    /**
     * Syntax 1
     */
    // const name = snapshot.child('name').val();
    // const jobTitle = snapshot.child('job/title').val();
    // console.log(name, 'is a ', jobTitle);
    /**
     * Syntax 2
     */
    const value = snapshot.val();
    console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`)
};

ref.on('value', onValueChange);

setTimeout(() => {
    ref.update({
        name: 'Batman',
        'job/title': 'Lead Consultant',
        'job/company': 'Google'
    });
}, 3500);

setTimeout(() => {
    ref.off();
}, 7000);

setTimeout(() => {
    ref.update({
        name: 'Lee',
        'job/title': 'Senior Consultant'
    });
}, 10500);


///////////////////////////////////////////
// database.ref('attributes').set({
//     height: 180,
//     weight: 100
// }).then(
//     (data) => {
//         console.log('atrributes updated');
//     },
//     (error) => {
//         console.log('atrributes failed updating', error);        
//     }
// );

/**
 * remove a property
 * 
 * refIsSingle.set(null) is equivalent to refIsSingle.remove()
 */
// const refIsSingle = database.ref();
// refIsSingle.remove().then(
//     () => {
//         console.log('remove succeeded.');
//     },
//     (error) => {
//         console.log('remove failed.', error);
//     }
// );

/**
 * update some content in database
 */
// database.ref().update({
//     name: 'Catfish',
//     isSingle: null,
//     'location/city': 'Munich'
// });
