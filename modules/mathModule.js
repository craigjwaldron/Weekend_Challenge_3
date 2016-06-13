
var answer = function (incommingObject) {
  console.log("From server: " + incommingObject);

  if (incommingObject.select == "add") {
 return Number(incommingObject.first) + Number(incommingObject.second);
  }
  else if(incommingObject.select == "subtract") {
 return Number(incommingObject.first) - Number(incommingObject.second);
  }
  else if(incommingObject.select == "multiply") {
 return Number(incommingObject.first) * Number(incommingObject.second);
  }
  else if(incommingObject.select == "divide") {
 return Number(incommingObject.first) / Number(incommingObject.second);
  }
   else {
    return "Try Again";
  }
};

module.exports = answer;
