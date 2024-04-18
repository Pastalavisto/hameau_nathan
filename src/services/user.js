function getUser() {
    let user;
    if (window.localStorage.getItem("user") !== null) {
        user = JSON.parse(window.localStorage.getItem("user"));
        console.log("user", user);
    } else {
        user = null;
        console.log("no user");
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
        console.log("user created", user);
    }
}

function getPokedex() {
    let user = getUser();
    return user.pokedex;
}

function addPokemonToPokedex(pokemonId) {
    let user = getUser();
    user.pokedex.push(pokemonId);
    window.localStorage.setItem("user", JSON.stringify(user));
}

export { getUser, createUser, getPokedex, addPokemonToPokedex };