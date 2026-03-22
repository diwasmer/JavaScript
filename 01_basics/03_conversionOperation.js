let score = undefined

console.log("score is", score);
console.log("type of score is ",typeof score);
console.log("type of score is ",typeof (score));

console.log("After Conversion =>")

let ScoreInNumber = Number(score);

console.log("score is ", ScoreInNumber)
console.log("type of score after conversion is ",typeof ScoreInNumber);
console.log("type of score after conversion is",typeof (ScoreInNumber));

/*
"33" => 33
"33abc" => NaN (Not a Number)
null => 0
true => 1, false => 0
undefined => NaN
*/