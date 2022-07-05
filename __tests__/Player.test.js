const Player = require("../lib/Player.js");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion");
console.log(new Potion());

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