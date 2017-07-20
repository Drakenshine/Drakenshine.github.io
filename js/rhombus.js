
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {

upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);
  
}
//upper left block of code
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=1;i<=pHeight;i++){
rLine +="<p>";

for (x=1;x<=pHeight-i;x++) {

  rLine +="<span class='space'>" + pSymbol +"</span>";
}

for(j=x;j<=pHeight;j++){


if (j%2) 
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("upLeft").innerHTML = rLine;
}

//upper right block of code
function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p>";

for(j=0;j<=i;j++){


if (j%2) 
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("upRight").innerHTML = rLine;
}

//down left block of code
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
  
  for (x=1;x<=pHeight-i;x++) {

  rLine +="<span class='space'>" + pSymbol +"</span>";
}
  
for(j=0;j<i;j++){

if (j%2) 
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("downLeft").innerHTML = rLine;
}

//down right block of code
function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";

for(j=0;j<i;j++){

if (j%2) 
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";

}

document.getElementById("downRight").innerHTML = rLine;
}