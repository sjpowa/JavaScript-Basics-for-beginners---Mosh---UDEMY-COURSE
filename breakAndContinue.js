let x = 0;
while (x <= 10){
    // if (x === 5) break;
    if (x % 2 === 0){
        x++;
        continue; // continue jump to the next interaction
    }
    console.log(x);
    x++;
}