list2: List[List[number]] = []

def on_forever():
    global list2
    list2 = [[0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0]]
    y = 0
    while y <= randint(0, 10):
        for x in range(5):
            if list2[y][x]:
                led.plot(x, y)
            else:
                led.unplot(x, y)
        y += 1
basic.forever(on_forever)
