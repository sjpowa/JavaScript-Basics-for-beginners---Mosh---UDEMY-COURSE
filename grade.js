const marks = [80, 80, 50];

// Do the avg of the sum of the array
// if
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calculateGrades(marks) {
    let sum = 0;
    for (i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let avgSumVotes = (sum / marks.length);


    console.log('The Sum of the Votes of the Student is: ' + sum);
    console.log('');
    console.log('The AVG of the sum of the Votes is: ' + avgSumVotes);
    console.log('');

    if (avgSumVotes <  60) return 'F';
    if (avgSumVotes <  70) return 'D';
    if (avgSumVotes <  80) return 'C';
    if (avgSumVotes <  90) return 'B';
    if (avgSumVotes < 100) return 'A';

}




console.log(calculateGrades(marks));
