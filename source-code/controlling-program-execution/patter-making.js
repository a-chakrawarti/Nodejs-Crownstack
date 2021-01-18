function drawPatter(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= 2*i-1; j++) {
            console.log(j);
        }
        console.log('\n');
    }
}

drawPatter(4);

/*
1


1
2
3


1
2
3
4
5


1
2
3
4
5
6
7
*/