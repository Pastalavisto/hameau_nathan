export function setUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function getCurrentUser() {
  const user = localStorage.getItem("currentUser");
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

function saveCurrentUser() {
  const users = getUsers();
  const user = getCurrentUser();
  const index = users.findIndex((u) => u.name === user.name && u.avatarId === user.avatarId);
  users[index] = user;
  localStorage.setItem("users", JSON.stringify(users));
}

export function disconnect() {
  saveCurrentUser();
  localStorage.removeItem("currentUser");
}

export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function createUser(name, avatarId) {
  const users = getUsers();
  const user = { avatarId, name, pokedex: [], spriteType: "front_default"};
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function getPokedex() {
  const user = getCurrentUser();
  return user.pokedex;
}

export function addPokemonToPokedex(pokemonName) {
  const user = getCurrentUser();
  if (pokemonIsInPokedex(pokemonName)) {
    return;
  }
  user.pokedex.push(pokemonName);
  setUser(user);
}

export function removePokemonFromPokedex(pokemonName) {
  const user = getCurrentUser();
  user.pokedex = user.pokedex.filter((name) => name !== pokemonName);
  setUser(user);
}

export function pokemonIsInPokedex(pokemonName) {
  const user = getCurrentUser();
  return user.pokedex.includes(pokemonName);
}

export function deleteUser(index) {
  const users = getUsers();
  const user = getCurrentUser();
  if (user.name === users[index].name && user.avatarId === users[index].avatarId) {
    disconnect();
  }
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
}

export function getSpriteType() {
  const user = getCurrentUser();
  return user.spriteType;
}

export function setSpriteType(spriteType) {
  const user = getCurrentUser();
  user.spriteType = spriteType;
  setUser(user);
}