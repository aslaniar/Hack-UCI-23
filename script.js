function artistsearch(artist) {
    console.log(artist.value);
}

function OnButtonPress() {
    var artistname = document.getElementById('text_box').value
    callapi(artistname);
    erase(document.getElementById('div1'), document.getElementById('div2'), document.getElementById('div3'));
}


function clickPress(event) {
    if (event.key == "Enter") {
        OnButtonPress()
    }
}

function erase(div1, div2, div3) {
    div1.style.display = 'none';
    div2.style.visibility = 'visible';
    div3.style.visibility = 'visible';
    // create_rest()
}

function callapi(artist) {
    console.log("Connected.")
    fetch("http://127.0.0.1:5000?artist=" + artist).then(res => res.json() ).then(response => {
        console.log(response)
    })

}
