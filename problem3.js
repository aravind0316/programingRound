function distanceCalculator(a,b){
    let c = (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
    return c;
}

function checkSquare(a,b,c,d){
    distance1 = distanceCalculator(a, b);
    distance2 = distanceCalculator(a, c);
    distance3 = distanceCalculator(a, d);

    if(distance1 == 0 || distance2 == 0 || distance3 == 0){
        return false;
    }

    if(distance1 == distance2 && 2 * distance1 == distance3 && 2 * distanceCalculator(b,d) == distanceCalculator(b,c)){
        return true;
    }
    if(distance2 == distance3 && 2 * distance2 == distance1 && 2 * distanceCalculator(c,b) == distanceCalculator(c,d)){
 
        return true;
    }
    if(distance1 == distance3 && 2 * distance1 == distance2 && 2 * distanceCalculator(b,c) == distanceCalculator(b,d)){
        return true;
    }

    return false;
}

let s1 = {x:0 , y:0};
let s2 = {x:0 , y:2};
let s3 = {x:2 , y:2};
let s4 = {x:2 , y:0};

if(checkSquare(s1,s2,s3,s4)){
    console.log('This is a square');
}
