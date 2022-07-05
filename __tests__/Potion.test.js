const Potion = require('../lib/Potion.js');

//ensure new Potion object has a name and value

test('creates a health potion object', () => {
    const potion = new Potion('health');
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion =new Potion();
    expect(potion.name).toEqual(expect.any(String)); 
    expect(potion.name.length).toBeGreaterThan(0); //because "" empty string is still a string?
    expect(potion.value).toEqual(expect.any(Number));
});