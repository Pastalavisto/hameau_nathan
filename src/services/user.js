function getUser() {
    let user;
    if (window.localStorage.getItem("user") !== null) {
        user = JSON.parse(window.localStorage.getItem("user"));
    } else {
        user = null;
    }
    return user;
}

function createUser(name, avatarId){
    let user = getUser();
    if (user === null) {
        user = {
            name: name,
            avatarId: avatarId,
            pokedex: [],
        };
        window.localStorage.setItem("user", JSON.stringify(user));
    }
}