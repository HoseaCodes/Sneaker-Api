function sneakers() {
    fetch('api/sneakers').then(function (data) {
        return data.json();
    });
}