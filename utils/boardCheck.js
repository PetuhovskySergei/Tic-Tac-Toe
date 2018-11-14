//to do
//module export


const check = (attribute, idx) => event.target.attributes[attribute].value == board.childNodes[idx].getAttribute(attribute) && event.target.innerText == board.childNodes[idx].innerText;

function boardCheck(event, board) {
    let verticalCount = 0,
        horizontalCount = 0,
        diagonalCount = 0;

    for (let i = 0; i < board.childNodes.length; i++) {
        if (check("y", i)) {
            horizontalCount++
        }

        if (check("x", i)) {
            verticalCount++
        }

        if (
            (event.target.attributes.x.value == +board.childNodes[4].getAttribute("x") + 1 && event.target.attributes.y.value == +board.childNodes[4].getAttribute("y") - 1
                ||
                event.target.attributes.x.value == +board.childNodes[4].getAttribute("x") - 1 && event.target.attributes.y.value == +board.childNodes[4].getAttribute("y") - 1
                ||
                event.target.attributes.x.value == +board.childNodes[4].getAttribute("x") - 1 && event.target.attributes.y.value == +board.childNodes[4].getAttribute("y") + 1
                ||
                event.target.attributes.x.value == +board.childNodes[4].getAttribute("x") + 1 && event.target.attributes.y.value == +board.childNodes[4].getAttribute("y") + 1)
            && event.target.innerText == board.childNodes[i].innerText) {
            diagonalCount++
        }
    }

    if (horizontalCount == 3 || verticalCount == 3 || diagonalCount == 3) {
        alert(currentPlayer + " is winner");
    };
}