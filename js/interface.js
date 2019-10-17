const addCircle = function (id) {
    const update = "#box" + id + " img";
    $(update).attr('src', 'img/circle.svg');
}
const addCross = function (id) {
    const update = "#box" + id + " img";
    $(update).attr('src', 'img/cross.svg');
}

// TODO Points
const updatePoints = function () {
    $('#x-points').text('x : ' + xScore);
    $('#o-points').text('o : ' + oScore);
}

// Click events
for (let i = 1; i <= 9; i++) {
    const boxToClick = '#box' + i;
    $(boxToClick).click(function () {
        addSymbol(i);
    });
}

const turnChange = function (symbol) {
    $('.turn img').attr('src', symbol);
}

const winIndicate = function (symbol) {
    if (symbol === 'cross') {
        $('#win h1').text('X won!');
    }
    else if (symbol === 'circle') {
        $('#win h1').text('O won!');
    }
    else {
        $('#win h1').text('Its a draw!');
    }
    $('#win').fadeTo('5s', 1).fadeOut('10s', 0);
}

const reset = function () {
    for (let i = 1; i <= 9; i++) {
        const boxToClick = '#box' + i + ' img';
        $(boxToClick).attr('src', '');
    }
    info = [['', '', ''], ['', '', ''], ['', '', '']];
    isCross = true;
}

updatePoints();