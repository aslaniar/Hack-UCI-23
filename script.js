function artistsearch(artist) {
    console.log(artist.value);
}

function clickPress(event) {
    if (event.key == "Enter") {
        artistsearch(document.getElementById('text_box'));
    }
}