const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy("goblin", "sword"), new Enemy('orc', 'baseball bat'), new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];

    inquirer.prompt({
        type: "text",
        name: "name",
        message: "What's your name?"
    })
        //destructure name from prompt object
        .then(({ name }) => {
            this.player = new Player(name);
            this.startNewBattle();
        })
}

Game.prototype.startNewBattle = function () {
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
    }
    //display player object's stats, getStats()?
    console.log("Your stats are as follows:");
    console.table(this.player.getStats());
    // display description of enemy.
    console.log(this.currentEnemy.getDescription());
    this.battle();
}

Game.prototype.battle = function () {
    if (this.isPlayerTurn) { //player attacks first, gets choice of potion or fight
        inquirer.prompt({
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: ["Attack", "Use potion"]
        })
            .then(({ action }) => {
                if (action === "Use potion") {
                    // check which potion to use, probs using template literal or getPotion
                    if(!this.player.getInventory()){
                        console.log("You have no potions to use.");
                        return; //or this.battle()?
                    } 
                    inquirer.prompt({
                        type:"list",
                        message:"Which potion would you like to use?",
                        name:"action",
                        choices:this.player.getInventory().map((item,index) => `${index +1}: ${item.name}`)
                    })
                    .then(({action})=>{
                        console.log(parseInt(action.split(".")[0])-1); //why does this work? no . in here
                        this.player.usePotion(parseInt(action.split(":")[0])-1);
                        console.log(`You used a ${action.split(": ")[1]} potion.`);
                    })
                } else {
                    const damage = this.player.getAttackValue();
                    this.currentEnemy.reduceHealth(damage);
                    console.log(`You attacked the ${this.currentEnemy.name}`);
                    console.log(this.currentEnemy.getHealth());
                }
            });
    } else {
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);
        console.log(`You were attacked by the ${this.currentEnemy.name}`);
        console.log(this.player.getHealth());
    }

}


module.exports = Game;