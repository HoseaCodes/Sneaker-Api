const sneakerEl = document.getElementById('sneakers');
const privacyEl = document.getElementById('privacy');
const baseUrlEL = document.getElementById('baseUrl');
const disclaimerEl = document.getElementById('disclaimer');

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

function hideContent() {
    // elmnt.style.display = 'contents';
    // disclaimerEl.style.display = 'contents';
    if (disclaimerEl.style.display === 'none') {
        disclaimerEl.style.display = 'contents'
    } else {
        disclaimerEl.style.display = 'none'
    }
    // elmnt.style.display = 'contents';
}

function hideContent2() {
    // elmnt.style.display = 'contents';
    // disclaimerEl.style.display = 'contents';
    if (baseUrlEL.style.display === 'none') {
        baseUrlEL.style.display = 'contents'
    } else {
        baseUrlEL.style.display = 'none'
    }
    // elmnt.style.display = 'contents';
}

function hideContent3() {
    // elmnt.style.display = 'contents';
    // disclaimerEl.style.display = 'contents';
    if (privacyEl.style.display === 'none') {
        privacyEl.style.display = 'contents'
    } else {
        privacyEl.style.display = 'none'
    }
    // elmnt.style.display = 'contents';
}
