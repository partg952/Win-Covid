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
let plus_button = document.getElementById("plus-button")
let num = 0
let main = document.getElementById('main')
plus_button.onclick = () => {
    console.log('clicked')
    window.location.href = "add-info.html"
}

database.ref().child("total").child("num").on('value', (snapshot) => {
    num = snapshot.val()
    console.log(num)
    for (let i = num; i > 0; i--) {
        let div = document.createElement('div')
        let upper_div = document.createElement('nav')
        let header = document.createElement('p')
        let strong = document.createElement('strong')

        let message_body = document.createElement('p')
        main.appendChild(div)
        header.appendChild(strong)
        let br = document.createElement('br')
        message_body.style.margin = "20px"
        div.appendChild(upper_div)
        div.classList.add("div")
        upper_div.style.width = "100%"
        upper_div.appendChild(header)
        upper_div.appendChild(br)
        div.appendChild(message_body)
        database.ref().child("total").child(i).child("name").on('value', (name) => {
            console.log(name.val())
            database.ref().child("total").child(i).child("city").on('value', (city) => {
                console.log(name.val())
                database.ref().child("total").child(i).child("state").on('value', (state) => {
                    console.log(name.val())
                    strong.textContent = name.val() + " , " + city.val() + " , " + state.val()
                    database.ref().child("total").child(i).child("message").on('value', (message) => {
                        console.log(name.val())
                        message_body.textContent = message.val()
                    })
                })
            })

        })
    }
})