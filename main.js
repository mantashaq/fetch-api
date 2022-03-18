const div = document.getElementById('images');
const submitButton = document.getElementById('submitButton');
const searchTracks = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    console.log(data);

    for (let i = 0; i <= 4; i++) {
        let img = document.createElement('img');
        img.src = data[i].thumbnailUrl;
        console.log(data[i].url);
        div.appendChild(img);
    }
}


submitButton.onclick = searchTracks;

