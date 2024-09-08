const playGame = (() => {
let count = 0;
const boxes = Array.from(document.getElementsByClassName('box'));
console.log(boxes[0].innerText);
const changeColor = (e) => {
    let targetIndex = e.target.id
    console.log(targetIndex);
    if (boxes[targetIndex].innerText === '') {
        if (count % 2 == 0) {
        boxes[targetIndex].innerText = 'X'
    }
    if (count % 2 != 0) {
        boxes[targetIndex].innerText = 'O'
    }
   }

   console.log(boxes[0].innerText);

       count++
}
return {changeColor, boxes};

})();

const render = (() => {
    const {changeColor} = playGame;
    const {boxes} = playGame;

boxes.forEach(box => {
    box.addEventListener('click', changeColor);
});
})();

