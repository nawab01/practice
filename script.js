const playGame = (() => {
    let count = 0;
    const boxes = Array.from(document.getElementsByClassName('box'));

    const changeColor = (e) => {
        const targetIndex = e.target.id; 
        console.log(targetIndex);
            if (boxes[targetIndex].innerText === '') {
                if (count % 2 === 0) {
                    boxes[targetIndex].innerText = 'X';
                } else {
                    boxes[targetIndex].innerText = 'O';
                }
                count++;
            } else {
                console.log('Box is already marked.');
            }


        console.log(boxes[0].innerText);
    };

    return { changeColor, boxes };

})();

const render = (() => {
    const { changeColor, boxes } = playGame; 

    boxes.forEach(box => {
        box.addEventListener('click', changeColor);
    });
})();
