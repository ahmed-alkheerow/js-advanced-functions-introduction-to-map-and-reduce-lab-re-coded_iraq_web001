// Your code here
function mapToNegativize(sourceArray){
  let newArry = [];
   sourceArray.map(element => {
    newArry.push(element*-1)}
  )
return newArry;
};

function mapToNoChange(sourceArray) {
  let newArry = [...sourceArray]
  return newArry;
};

function mapToDouble(sourceArray) {
  let newArry=[]
  sourceArray.map(element => {
    newArry.push(element*2)
  })
  return newArry
};

function mapToSquare(sourceArray) {
  let newArry=[]
  sourceArray.map(element => {
    newArry.push(element**2)
  })
  return newArry;
};



function reduceToTotal(sourceArray, startingPoint=0 ) {
  let total =  startingPoint;
  sourceArray.forEach(element =>{
    total += element
  })
  return total;
  
}