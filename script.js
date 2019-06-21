const heroName = prompt('Enter a Hero Name', 'yaboi');
const villainName = prompt('Enter a villain Name', 'dylon');

const player = new Hero(heroName);
const computer = new Villain(villainName);

const HeroContainer = document.getElementById('Hero');
const VillainContainer = document.getElementById('Villain');

HeroContainer.innerHTML = player.render();
VillainContainer.innerHTML = computer.render();

player.equipWeapon(new Weapon('Mjolnir'));
computer.equipWeapon(new Weapon('Infinity Gauntlet'));

document.getElementById('Hero Attack').addEventListener('click', function(){
    player.attack(computer);
    if (computer.health <= 0) {
        alert('Victory!');
    }
    VillainContainer.innerHTML = computer.render();
});

document.getElementById('Villain Attack').addEventListener('click', function(){
    computer.attack(player);
    if (player.health <= 0) {
        alert('Game Over!');
    }
    HeroContainer.innerHTML = player.render();
});