// u dont know the includes() methods
// so write a function called includes(array, searchElement)
// and return true if the element passed is in the array

function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
       if (array[i] === searchElement)
        return true;
    }
    return false;
}

const array01 = [1,2,3,4,5,6,7,8,9];

const veroFavz = includes(array01, 50);
console.log(veroFavz);
