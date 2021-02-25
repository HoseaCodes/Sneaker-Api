const sneakerEl = document.getElementById('sneakers');
document.getElementById('btn').onclick = getSneakerInfo;

function getSneakerInfo() {
    fetch('api/sneakers').then(function (data) {
        return data.json();
    }).then(json => {
        console.log(json)
        obj = json;
        sneakerEl.innerHTML = JSON.stringify(obj, undefined, 4)
    })
}