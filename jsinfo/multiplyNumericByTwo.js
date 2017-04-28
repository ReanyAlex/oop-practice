/* Create a function multiplyNumeric(obj) that multiplies
 all numeric properties of obj by 2.*/

 function multiplyNumeric(obj) {
   //gets values of the keys in the object
   for (let key in obj) {
     /*makes sure that the type of is number
     so you can actually multiply by two*/
     if (typeof obj[key] === 'number') {
            obj[key] *= 2;
     }
   }
 }

//example object
 let menu = {
   width: 200,
   height: 300,
   title: 'My menu'
 };

//call the function
 multiplyNumeric(menu);
