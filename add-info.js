var firebaseConfig = {
    apiKey: "AIzaSyDxBvMWEdz-8-wC4-ecqD-_br_QfkbDz9k",
    authDomain: "win-covid.firebaseapp.com",
    projectId: "win-covid",
    storageBucket: "win-covid.appspot.com",
    messagingSenderId: "907504364405",
    appId: "1:907504364405:web:e07910f4609a34e65dc13c"
};
// Initialize Firebase    
firebase.initializeApp(firebaseConfig);
let database = firebase.database()
let num = 0
database.ref().child("total").child("num").on('value', (snapshot) => {
    console.log(snapshot.val())
    num = snapshot.val()
})
let username = document.getElementById('name')
let phone = document.getElementById('phone-number')
let city = document.getElementById('city')
let state = document.getElementById('state')
let message = document.getElementById('detail')
let submit = document.getElementById('submit')
submit.onclick = () => {
    if (username.value.length != 0 && phone.value.length != 0 && city.value.length != 0 && message.value.length != 0 && state.value.length != 0) {
        num++
        let city_value = city.value.toLowerCase()
        let name_value = username.value.toLowerCase()
        let state_value = state.value.toLowerCase()
        database.ref().child("total").child(num).set({
            name: name_value,
            phone: phone.value,
            city: city_value,
            state: state_value,
            message: message.value
        })
        database.ref().child("total").child("num").set(num)
    }

}