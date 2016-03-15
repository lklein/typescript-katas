const count = (input: number):any => {
  const isDivisible = (by:number, what:number):boolean => what % by === 0,
    contains = (needle:number, hashtack:number):boolean => String(hashtack).indexOf(String(needle)) !== -1;
  
  let inputPlusOne:number = input + 1,
    output:any = '';
  
  if(isDivisible(3, inputPlusOne) || contains(3, inputPlusOne)){
    output += 'Fizz';
  }
  
  if(isDivisible(5, inputPlusOne) || contains(5, inputPlusOne)){
    output += 'Buzz';
  }
  
  return output || inputPlusOne;
};