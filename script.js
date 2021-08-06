/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */


// The forEach() method calls a function once for each element in an array, in order.
// The slice() method returns selected elements in an array, as a new array.
// The reduce() method executes a reducer function for each value of an array.
// reduce() returns a single value which is the function's accumulated result.

const acmTeam = (topic) => {
    let count = 1;
    let max = 0;
    topic.forEach((value, index, arr) => {
        arr.slice(index + 1).forEach(w => {
            let thisCount = [...value].reduce((c, value, index) => {
                return c + (value === '1' || w.charAt(index) === '1');
            }, 0);
            if (thisCount > max) {
                max = thisCount;
                count = 1;
            } else { count += thisCount === max }
        })
    });
    return [max, count];
}


/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

// The bitwise OR operator (|) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.

const acmTeam = (topic) => {
    let max = [0,0];
    let totalSubjects = topic[0].length;
    for(let member1 = 0; member1 < topic.length - 1; member1 ++) {
        for(let member2 = member1 + 1; member2 < topic.length; member2++) {
            let teamSum = 0;
            for(let subject = 0; subject < totalSubjects; subject++) {
                if(topic[member1][subject]|topic[member2][subject]) {
                    teamSum++;
                }
            }
            
            if(teamSum > max[0]) {
                max[0] = teamSum;
                max[1] = 1;
            } else if(teamSum === max[0]) {
                max[1]++;
            }
        }
    }
    console.log(max[0]);
    console.log(max[1]);
    return max;
}
