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
})