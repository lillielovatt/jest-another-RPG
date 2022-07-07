const Player = require("../lib/Player.js");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion");

//want a player to have a name,and three numerical values - health, strength, agility

test("creates a player object", () => {
    const player=new Player("Dave");

    expect(player.name).toBe("Dave");
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test("gets player's stats as an object", () => {
    const player=new Player("Dave");

    expect(player.getStats()).toHaveProperty("potions");
    expect(player.getStats()).toHaveProperty("strength");
    expect(player.getStats()).toHaveProperty("agility");
    expect(player.getStats()).toHaveProperty("health");
});

test("gets inventory from player or returns false", () => {
    const player = new Player("Dave");
    console.log(player.inventory);
    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory=[];
    expect(player.getInventory()).toEqual(false);
});

test("gets player's health value", () => {
    const player = new Player ("Dave");
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString())) //why not toEqual? or number? because we might need flexibility to change how the player's health will be displayed
});

test("checks if player is alive or not", () => {
    const player = new Player("Dave");

    expect(player.isAlive()).toBeTruthy();
    player.health=0;
    expect(player.isAlive()).toBeFalsy();
});

test("checks if correct amount of health is subtracted", () => {
    const player=new Player("Dave");
    const oldHealth = player.health;
    player.reduceHealth(5);
    expect(player.health).toBe(oldHealth-5);
    player.reduceHealth(99999);
    expect(player.health).toBe(0);
});