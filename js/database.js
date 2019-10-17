// Variables to store score for each player
let xScore = 0;
let oScore = 0;

//variable to store whos turn it is
let isCross = true;

// Array to store information
let info = [['', '', ''], ['', '', ''], ['', '', '']];

const assigning = function (id, symbol) {
    id -= 1;
    if (id < 3) {
        info[0][id % 3] = symbol;
    }
    else if (id < 6) {
        info[1][id % 3] = symbol;
    }
    else {
        info[2][id % 3] = symbol;
    }
}

const test = function (id) {
    id -= 1;
    if (id < 3) {
        if (info[0][id % 3]) { return false }
    }
    else if (id < 6) {
        if (info[1][id % 3]) { return false }
    }
    else {
        if (info[2][id % 3]) { return false }
    }
    return true;
}

//Click functions
const addSymbol = function (id) {
    if (test(id)) {
        if (isCross) {
            addCross(id);
            assigning(id, 'x');
            turnChange('./img/circle-turn.svg');
            if (winTest()) {
                xScore++;
                updatePoints();
                winIndicate('cross');
                reset();
            }
            if (drawTest()) {
                reset();
                winIndicate('draw');
            }
            isCross = false;
            // Display the turn
        }
        else {
            addCircle(id);
            assigning(id, 'o');
            turnChange('./img/cross.svg');
            if (winTest()) {
                oScore++;
                updatePoints();
                winIndicate('circle');
                reset();
            }
            if (drawTest()) {
                reset();
                winIndicate('draw');
            }
            isCross = true;
            // Display the turn
        }
    }
}

//----Logic to test for a win----
const winTest = function () {
    // Rows
    let result = false;
    info.forEach(row => {
        if (row[0] !== '') {
            if (row.filter(x => x === row[0]).length === 3) {
                result = true;
            }
        }
    });
    if (result) return result;

    // Columns
    for (let i = 0; i < info.length; i++) {
        let test = [];
        for (let j = 0; j < info[i].length; j++) {
            test.push(info[j][i]);
        }
        if (test[0] !== '') {
            if (test.filter(x => x === test[0]).length === 3) {
                result = true;
            }
        }
    }

    // Diagonal right
    let test = [info[0][0], info[1][1], info[2][2]];
    if (test[0] !== '') {
        if (test.filter(x => x === test[0]).length === 3) {
            result = true;
        }
    }

    // Diagonal left
    test = [info[2][0], info[1][1], info[0][2]];
    if (test[0] !== '') {
        if (test.filter(x => x === test[0]).length === 3) {
            result = true;
        }
    }
    return result;
}

// Draw test 
const drawTest = function () {
    //basically test if there are any empty spots
    let counter = 0;
    info.forEach(row => {
        if (row.includes('')) {
            counter++;
        }
    });
    if (counter > 0) return false;
    else return true;
}