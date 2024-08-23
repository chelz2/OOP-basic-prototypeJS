//Basic OOP game project to uderstand OOP prototype in JS

function Player(name) {
    this.name = name
    this.level = 1
    this.points = 0
}

Player.prototype.gainXp = function(xp) {
    this.points += xp;

    if (this.points >= 10) {
        this.level += 1;
        this.points -= 10; 
    }

    console.log(this.describe())
}

Player.prototype.describe = function() {
    return `${this.name} is level ${this.level} with 
    ${this.points} experience points `
}

const player1 = new Player('Bobby');
const player2 = new Player('Alice');

//randomly passing gainxp(i.e experience point) on player1 & 2 objects
player1.gainXp(4);
player2.gainXp(5);
player2.gainXp(7);
player1.gainXp(5);
player1.gainXp(2);
player2.gainXp(3);
player1.gainXp(8);



//console.log(player1.describe());
//console.log(player2.describe());

