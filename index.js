let display = document.getElementById('username-display');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => display.innerText = snap.val());