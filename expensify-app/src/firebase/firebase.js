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

  firebase.database().ref().set({
      name: 'pandaZ',
      age: 29,
      isSingle: false,
      location: {
          city: 'Hamburg',
          country: 'Germany'
      }
  });

  firebase.database().ref('age').set(31);
  firebase.database().ref('location/city').set('Frankfurt am Main');

  firebase.database().ref('attributes/height').set(165);
  firebase.database().ref('attributes/weight').set(45);

