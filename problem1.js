let input = 'between'
let b= [];
let d = true;
let c = [];
c = [input[0],1]
b.push(c)
c = [];
let f ='';

for(let i= 1; i < input.length;i++){
    d = true;
    for(let j= 0;j < b.length;j++){
        if(input[i] == b[j][0]){
            b[j][1] = b[j][1] + 1;
            d = false;
            break;
        }
    }
    if(d){
        c = [input[i],1];
        b.push(c);
        c = [];
    }
}

for(let k=0; k < b.length; k++){
    f = f + b[k][0] + '-' + b[k][1] + ' '
}
console.log(f);

