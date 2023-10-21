const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    players.forEach((p, i) => {
        if(i%2==0){
            var t = "hero"
        }else{
            var t = "villain"
        }
        detailedPlayers.push({
            name: p,
            strength: 2 + i,
            image: 'images/super-' + (i + 1) + '.png',
            type: t,
            
            id: i + 1,
        });
        console.log("t: ", t);
    });

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const createPresentation = (playerObj) => {
    var player = document.createElement('div');
    player.classList.add('player');
    var image = document.createElement('img');
    image.setAttribute('src', playerObj.image);
    image.setAttribute('alt', '');
    var name = document.createElement('div');
    name.className = 'name';
    name.textContent = playerObj.name;
    var strength = document.createElement('div');
    strength.textContent = playerObj.strength;
    strength.className = 'strength';
    player.append(image, name, strength);
    return player;
    };

// Build player template
const buildPlayers = (players, type) => {
    let fragment = document.createElement('div');

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    players.filter((player) => player.type == type)
    players.forEach((player) => fragment.append(createPresentation(player)));
    return fragment.innerHTML;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}