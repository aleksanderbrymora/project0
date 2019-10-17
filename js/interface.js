const addCircle = function (id) {
    const update = "#box" + id + " img";
    $(update).attr('src', 'img/circle.svg').hide().fadeIn(600);
}
const addCross = function (id) {
    const update = "#box" + id + " img";
    $(update).attr('src', 'img/cross.svg').hide().fadeIn(600);
}

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
    const img = $('.turn img');
    img.fadeOut(500, function () {
        img.attr('src', symbol).fadeIn(500);
    });
}

const winIndicate = function (symbol) {
    if (symbol === 'cross') {
        $('#win h1').text('X won!');
        triangles.replay();
    }
    else if (symbol === 'circle') {
        $('#win h1').text('O won!');
        triangles.replay();
    }
    else {
        $('#win h1').text('Its a draw!');
    }
    $('#win').hide().fadeTo(500, 0.9).delay(1500).fadeOut(500, 0);
}

const reset = function () {
    for (let i = 1; i <= 9; i++) {
        const boxToClick = '#box' + i + ' img';
        $(boxToClick).delay(500).fadeOut(800);
    }
    setTimeout(1300, function () {
        for (let i = 1; i <= 9; i++) {
            const boxToClick = '#box' + i + ' img';
            $(boxToClick).attr('src', '');
        }
    })
    info = [['', '', ''], ['', '', ''], ['', '', '']];
    isCross = true;
}

updatePoints();

// ---------------------------------------------------
// ---------------Adding animations-------------------
// ---------------------------------------------------

$('#background').hide().fadeIn(2000);
$('body').hide().fadeIn(1000);

const scene = $('background');
setTimeout(2000, function () {
    scene.tilt();
})
$('#background').tilt({
    scale: 1,
    maxTilt: 0.1,
    speed: 100,
    glare: false,
    transition: false,
    reset: false,
    easing: "cubic-bezier(.03,.98,.52,.99)",
})


const triangles = new mojs.Burst({
    radius: { 0: 1000, easing: 'cubic.out' },
    angle: { 1080: 0, easing: 'quad.out' },
    count: 20,
    children: {
        shape: 'polygon',
        points: 3,
        radius: { 10: 100 },
        fill: ['red', 'yellow', 'blue', 'green'],
        duration: 3000
    }
});

const sparks = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 100, easing: 'cubic.out' },
    angle: { 0: 180, easing: 'quad.out' },
    children: {
        fill: '#f2b705',
        scale: { 2: 0 }
    }
})

const burst = new mojs.Burst({
    left: 0, top: 0,
    radius: { 0: 30 },
    angle: 'rand(0, 360)',
    timeline: { delay: 50 },
    children: {
        shape: 'line',
        stroke: '#f2b705',
        fill: 'none',
        scale: 1,
        scaleX: { 1: 0 },
        // easing:       'cubic.out',
        duration: 650
    }
});

const bubbles = new mojs.Burst({
    left: 0, top: 0,
    radius: 28,
    count: 3,
    timeline: { delay: 200 },
    children: {
        stroke: '#f2b705',
        fill: 'none',
        scale: 1,
        strokeWidth: { 8: 0 },
        radius: { 0: 'rand(6, 10)' },
        degreeShift: 'rand(-50, 50)',
        duration: 450,
        delay: 'rand(0, 250)',
    }
});

const cross = new mojs.Shape({
    left: 0, top: 0,
    shape: 'cross',
    angle: 45,
    radius: 9,
    scale: { 0: 1 },
    stroke: '#f2b705',
    duration: 400,
    delay: 150
});

const circle = new mojs.Shape({
    left: 0, top: 0,
    radius: { 0: 16, easing: 'sin.out' },
    fill: 'none',
    stroke: '#f2b705',
    strokeWidth: { 10: 0 },
    duration: 450,
    easing: 'cubic.out'
});

document.addEventListener('click', function (e) {
    burst
        .tune({ x: e.pageX, y: e.pageY })
        .generate()
        .replay();

    bubbles
        .tune({ x: e.pageX, y: e.pageY })
        .generate()
        .replay();

    cross
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

    circle
        .tune({ x: e.pageX, y: e.pageY })
        .replay();
});
