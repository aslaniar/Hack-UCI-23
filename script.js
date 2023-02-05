let liked_songs = []
let response_list = []

function artistsearch(artist) {
    console.log(artist.value);
}

function OnButtonPress() {
    var artistname = document.getElementById('text_box').value
    callapi(artistname);
}


function clickPress(event) {
    if (event.key == "Enter") {
        OnButtonPress()
    }
}

function erase(div1, div2) {
    div1.style.display = 'none';
    div2.style.visibility = 'visible';
    // div3.style.visibility = 'visible';
    console.log(response_list[0])
    document.getElementById('album_art').src = response_list[0][1]
    document.getElementById('song_title').innerHTML = response_list[0][0]
    document.getElementById('artist_name').innerHTML = response_list[0][3]
    document.getElementById('album_name').innerHTML = response_list[0][2]
    response_list.shift()
    // create_rest()
}

function callapi(artist) {
    console.log("Connected.")
    fetch("http://127.0.0.1:5000?artist=" + artist).then(res => res.json() ).then(response => {
        
        console.log(response); 
        response_list = response["info"];
        erase(document.getElementById('div1'), document.getElementById('div2'));})
    }

function ShiftIt() {
    document.getElementById('album_art').src = response_list[0][1]
    document.getElementById('song_title').innerHTML = response_list[0][0]
    document.getElementById('artist_name').innerHTML = response_list[0][3]
    document.getElementById('album_name').innerHTML = response_list[0][2]
    response_list.shift()
}

function Interested(choice) {
    var album_art = document.getElementById('album_art').value
    var song_name = document.getElementById('song_title').value
    var artist_name = document.getElementById('artist_name').value
    var album_name = document.getElementById('album_name').value
    if (choice) {
        console.log("Liked.")
        liked_songs.push([song_name, artist_name, album_art])
        console.log(liked_songs) // finish this
    }
    ShiftIt()
}
