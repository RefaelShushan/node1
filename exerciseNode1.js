// 1
const fs = require("fs");
fs.readFile('data.txt','utf-8',function(arr,data){
    if(arr)throw arr;
    console.log(data)
});

// 2

const fs1 = require("fs");
const lodash = require("lodash")
fs.readFile('data.txt','utf-8',function(arr,data){
    if(arr)throw arr;
    const dataSplit = data.split(" ") 
    console.log(dataSplit.length)
});

// 3

const fs3 = require("fs");
const lodash1 = require("lodash")
const { join } = require ("path")
fs3.readFile('data.txt','utf-8',(arr,data) => {
    if(arr)throw arr;
    let dataReverse = data.split(" ")
    dataReverse = lodash1.reverse(dataReverse)
    dataReverse = dataReverse.join(" ") 
    console.log(dataReverse)

});

// 4

const fs4 = require("fs");
const lodash4 = require("lodash")
fs4.readFile('data.txt','utf-8',(arr,data) => {
    if(arr)throw arr;
    let dataNotDual = data.split(" ")
    dataNotDual = lodash4.uniq(dataNotDual)
    console.log(dataNotDual)
    
});

// 5

const fs5 = require("fs");
const lodash5 = require("lodash")
fs5.readFile('data.txt','utf-8',(arr,data) => {
    if(arr)throw arr;
    let dataNotDual = data.split(" ")
    dataNotDual = lodash5.uniq(dataNotDual)
    console.log(dataNotDual.length)
    
});

// 6

const fs6 = require("fs");
const lodash6 = require("lodash")
const { join } = require ("path")
fs6.readFile('data.txt','utf-8',(arr,data) => {
    if(arr)throw arr;
    let dataNotDual = data.split(" ")
    dataNotDual = lodash6.uniq(dataNotDual)
    dataNotDual = dataNotDual.join(" ")
    dataNotDual = lodash6.upperCase(dataNotDual); 
    console.log(dataNotDual)
    
});

// 7
const fs7 = require("fs");
const lodash7 = require("lodash")
const { join } = require ("path")
fs7.readFile('data.txt','utf-8',(arr,data) => {
    if(arr)throw arr;
    let dataNotDual = data.split(" ")
    dataNotDual = lodash7.uniq(dataNotDual)
    // dataNotDual = dataNotDual.join(" ")
    const result = dataNotDual.filter((word) => word.length > 5);
    console.log(result)
    
});


