groceries = (array) => {
  const arrayConvert = [];
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    arrayConvert.push(array[i].item);
  }
  if (arrayConvert.length == 2){
     newString = arrayConvert.join(" and ");
  } else if (arrayConvert.length > 2) {
   for (let i = 0; i < arrayConvert.length - 2; i++){
    newString += arrayConvert[i] + ", ";
   };
   newString += arrayConvert[arrayConvert.length - 2] + " and " + arrayConvert[arrayConvert.length - 1];
   console.log(newString);
  } else {
    return arrayConvert.toString();
  }
  return newString;
};

// Example
groceries([{item: 'Sausage'}, {item: 'Peppers'}]);
