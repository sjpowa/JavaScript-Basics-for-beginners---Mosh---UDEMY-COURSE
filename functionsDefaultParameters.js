// in here we will see how default parameters works

// THIS IS THE NORMAL WAY!
function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5)); // this is the normal way

// =====================================================================

// BUT WHAT IF WE WANT TO LEAVE RATE TO 3.5???
// ps. REMEMBER THAT IF U SET A DEFAULT PARAMETER IN THE MIDDLE
// IS GOOD TO HAVE THE NEXT PARAMETERS AS DEFAULT TOO
// OR U WILL HAVE PROBLEMS
// OR U HAVE TO SET UNDEFINED VALUES IN CONSOLE LOG
// AND IN THAT CASE U WILL HAVE AN UGLY CODE
// NOT WELL UNDERSTANDABLE BY WHO I WATCHING IT

// DOWN HERE IS ANOTHER EXAMPLE BUT NOT THIS IS NOT WITH DEFAULT PARAMETERS
function interest02(principal, rate, years) {
    rate = rate || 3.5; // so we can have rate passed manually or by default to 3.5
    years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest02(10000));

// ========================================================================

// THIS IS HOW DEFAULT PARAMETERS HAVE TO BE SET
function interest03(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest03(10000));

// ========================================================================

// THIS IS THE NOT RECOMMEND ROUTE
function interest04(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}

console.log(interest04(10000, undefined, 5)); // UGLY CODE!!!
