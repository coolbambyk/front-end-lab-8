var N = Number(prompt('Enter number N.0<N<=20'));
var pyramidlenth = '';

if ((N>0 && N<=20) && (N%1===0) && !isNaN(N)) {
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < (N + i); j++)  {
            if (j < (N-i-1)) {
                pyramidlenth+= '   ';
            } else {
                pyramidlenth+= '[~]';
            }
        }
        pyramidlenth+= '\n';
    }
    console.log(pyramidlenth);
} else {
    console.log('Incorrect!');
}