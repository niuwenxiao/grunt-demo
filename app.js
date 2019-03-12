#!/usr/bin/node
const add=require('./sum.js');
var x= process.argv[2] || 1,
    y= process.argv[3] || 1;
console.log('%d+%d=%d',x,y,add(x,y));


