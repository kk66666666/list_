let list2: number[][] = []
basic.forever(function () {
    list2 = [
    [
    0,
    50,
    250,
    50,
    0
    ],
    [
    50,
    250,
    545,
    250,
    50
    ],
    [
    424,
    454,
    777,
    7777,
    777
    ],
    [
    0,
    0,
    250,
    0,
    0
    ],
    [
    0,
    0,
    250,
    0,
    0
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, list2[y][x])
        }
    }
})
