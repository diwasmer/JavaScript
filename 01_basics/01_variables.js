const Employee_ID = 5240590060005  //constant cannot be changed
let Employee_Name = "Diwas"  //best keyword to use
var Employee_pass = "12345"  //use let in place of var, suggested to never use var
city = "Nainital"  //it is correct but not professional, so kindly use let keyword
let state;  //no value is given, which means it is undefined

console.table([Employee_ID, Employee_Name, Employee_pass, city, state])

//Lets change //javascript cannot read this, it is only for the purpose of understanding

Employee_Name = "Mer"
Employee_pass = "231324"
city = "Nagpur"

console.table([Employee_ID, Employee_Name, Employee_pass, city, state])  //use console.table to print all in one