'use strict'; //HELPS AVOID BAD CODING

let varA;
let varB;

//console.log(varA + varB); //DONT DO THIS - CHANGES THE DATA TYPE
//console.log(varA, varB);  //USE COMMA

//TYPE COERCION - ALWAYS USE === OR !== BECAUSE IT 
//COMPARES BOTH CONTENT AND DATA TYPE

//console.log('2' === 2); 
//RETURNS FALSE, CONTENT IS SAME BUT DATA TYPE ISNT

//SCOPE - LET DATA TYPE STICKS TO IT
{
    let scopedVar = 'abc';
    {
        //NESTED SCOPE, SO CHANGES DATA
        let scopedVar = 123;
        console.log(scopedVar);
    }
    console.log(scopedVar);
}

//WHEN DOING A FOR LOOP, NEVER USE VAR
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

