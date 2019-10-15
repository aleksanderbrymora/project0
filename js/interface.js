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

const winIndicate = function (isCross) {
    if (isCross) {
        $('#win h1').text('X won!');
    }
    else {
        $('#win h1').text('O won!');
    }
    $('#win').fadeTo('2s', 1).delay('10s').fadeOut('2s', 0);
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