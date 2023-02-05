let liked_songs = []
let liked_str = ""
let response_list = []
let playing = false;
let soundPlayer; 

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

function erase(div1, div2, div3, div4) {
    div1.style.display = 'none';
    div2.style.visibility = 'visible';
    div3.style.visibility = 'visible';
    div4.style.visibility = 'visible';
    console.log(response_list[0])
    ShiftIt()
    document.getElementById('album_art').src = response_list[0][1]
    document.getElementById('song_title').innerHTML = response_list[0][0]
    document.getElementById('artist_name').innerHTML = response_list[0][3]
    document.getElementById('album_name').innerHTML = response_list[0][2]
    // create_rest()
}

function callapi(artist) {
    console.log("Connected.")
    fetch("http://127.0.0.1:5000?artist=" + artist).then(res => res.json() ).then(response => {
        
        console.log(response); 
        response_list = response["info"];
        erase(document.getElementById('div1'), document.getElementById('div2'), document.getElementById('div3'), document.getElementById('div4'));})
    }



function ShiftIt() {
    response_list.shift()
    document.getElementById('album_art').src = response_list[0][1]
    document.getElementById('song_title').innerHTML = response_list[0][0]
    document.getElementById('artist_name').innerHTML = response_list[0][3]
    document.getElementById('album_name').innerHTML = response_list[0][2]
    // response_list.shift()
    // ifNone()

}

function Interested(choice) {
    if (playing) {
        play_song(); }
    if (! checkifDone()) {
    response_list.shift()
    let album_art = document.getElementById('album_art')
    let song_name = document.getElementById('song_title').innerHTML
    let artist_name = document.getElementById('artist_name').innerHTML
    let album_name = document.getElementById('album_name').innerHTML
    let song_info = [song_name, artist_name, album_name]
    if (choice) {
        console.log("Liked.")
        liked_songs.push(song_info)
        console.log(liked_songs) // finish this
        incidentList()
        document.getElementById('div4').innerHTML = liked_str
    }
    ShiftIt()
}
    else {
        window.alert("Thats all we got! Enjoy your playlist!")
    }
}

function play_song() {
    var soundName = response_list[0][4];
    if (soundName == null) {
        window.alert("Sorry! There's no preview for this! (lowkey think its a banger tho)")
    }
    else {
        // console.log(soundName);
        if (playing) {
            soundPlayer.pause()
            playing = false;
            console.log(playing)
        }
        else {
        soundPlayer = new Audio(soundName);
        soundPlayer.play();
        playing = true;
        console.log(playing)
        }
    }
}

// function pause_song(sound) {
//     sound.pause()
// }
// function pause_song() {
//     var song = response_list[0][4]
//     song.pause()
// }

function incidentList() {
    console.log(liked_songs.length)
    liked_str += liked_songs[0][0] + ' - ' + liked_songs[0][1] + '<br>'
    
    console.log(liked_str)
    $("div4").text(liked_str);
    liked_songs.shift()
}

function checkifDone() {
    if (response_list[0] == null) {
        return true;
    }
    else {
        return false;
    }
}