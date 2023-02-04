function artistsearch(artist) {
    console.log(artist.value);
}

function OnButtonPress() {
    var artistname = document.getElementById('text_box')
    artistsearch(artistname);
    erase(document.getElementById('thecard'));
}


function clickPress(event) {
    if (event.key == "Enter") {
        var artistname = document.getElementById('text_box')
        artistsearch(artistname);
        erase(document.getElementById('thecard'))
    }
}

function erase(div1, div2) {
    div1.style.display = 'none';
    div2.style.display = 'visible';
    // create_rest()
}