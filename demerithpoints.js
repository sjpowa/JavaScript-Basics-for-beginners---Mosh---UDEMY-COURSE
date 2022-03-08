// Speed limit 70
// 5kmh -> 1 point
// Math.floor(1.3) -> it will give u 1
// 12 points -> suspended

checkSpeed(75)

function checkSpeed(speed){
    let speedLimit = 70;
    let kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint)
    console.log('OK');
    else{
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >= 12)
            console.log('License Suspended');
        else
            console.log('Points', points);
    }
}