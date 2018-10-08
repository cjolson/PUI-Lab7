var images = ["deer.jpg", "giraffe.jpg", "parakeet.jpg", "taro.png", "dog.jpg"];
var names = ["Birdo", "Hamilton", "Taro", "Freud", "George"];
var ages = [16, 2, 474, 10, 3];

class Animal {
    constructor(image, name, age) {
        this.image = image;
        this.name = name;
        this.age = age;
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(() => {
    console.log("ready");
    var animal = new Animal(images[getRandomInt(images.length)], 
                            names[getRandomInt(names.length)], 
                            ages[getRandomInt(ages.length)]);
    console.log(animal);
    
    $("#animal-img").attr("src", animal.image);
    $("#animal-name").text(animal.name);
    $("#animal-age").text(animal.age + " years old");
})