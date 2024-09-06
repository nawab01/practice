
// object constructor example
// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }
// const player1 = new Player('john', 'x');
// console.log(player1.name)


//factory functions using arrow func example
// const Player = (name, marker) => ({ name, marker })
// const player1 = Player('john', 'x');
// console.log(player1.name)

//regular factory function
function Player(name, marker) {
    return{ name, marker }
}
const player1 = Player('john', 'x');
console.log(player1.name)