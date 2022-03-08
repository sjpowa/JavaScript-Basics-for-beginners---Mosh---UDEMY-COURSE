const arr = [3, 4];

console.log(arr);

// with push we add elements to the end of the array
arr.push(5, 6);
console.log(arr);

// with unshift we add those elements and shift to the right side all the elements of the array on the rightr side
// so we ARE ADDING ELEMENTS AT THE BEGINNING OF THE ARRAY
arr.unshift(1, 2);
console.log(arr);

arr.splice(3, 2, 'no'); // the first value is the position of the array we add something
//  in the middle we type a number to decide how many positions and values next to the previous position declared
// have to be deleted..
// if u set 0 -> NOTHING WILL BE DELETED
// the third value is what u really add in the array
// recap:
// (1a, 2b, 3c)
// 1a -> position where u add the element
// 2b -> delete something to ur right side of the array.. 0 delete nothing, 1 delete the next positon on the right
// 3c -> here u set the value to add in the position declared at a1
console.log(arr);