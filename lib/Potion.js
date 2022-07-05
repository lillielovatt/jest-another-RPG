function Potion(name){
    this.types=['strength','agility','health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)]; //length is 3, but will round down, so any number between 0 and 2, which is perfect for us
    if(this.name==="health"){
        this.value=Math.floor(Math.random()*10+30)
    } else{
        this.value=Math.floor(Math.random()*5+7)
    }
}

module.exports=Potion;

// Math.random() * (difference between upper and lower bound) + lower bound