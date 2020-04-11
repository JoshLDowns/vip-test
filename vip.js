// Sample Array for program
let array = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]


function findTens(array, sum) {

    //initial empty solution arrays to be built
    let solutionOne = []
    let solutionTwo = []
    let solutionThree = []

    array.sort()

    let leftSide = 0;
    let rightSide = array.length-1

    while (leftSide < rightSide) {
        if (array[leftSide] + array[rightSide] === sum) {
            solutionOne.push([array[leftSide], array[rightSide]], [array[rightSide], array[leftSide]])
        } 
        
        if (array[leftSide] + array[rightSide] < sum) {
            leftSide++
        } else {
            rightSide--
        }
    }
    
    //logs solution one
    console.log('Solution One:', solutionOne.join(' | '))

    //maps the pair arrays into stings that can be quickly compared with the rest of the pairs
    //pushes the strings into the solution two array if they are unique
    solutionOne.map((ar)=>JSON.stringify(ar)).forEach((string)=>{!solutionTwo.includes(string) ? solutionTwo.push(string) : null});
    
    //maps the strings back into the array pairs
    solutionTwo = solutionTwo.map((string)=>JSON.parse(string))

    //logs solution two
    console.log('Solution Two:', solutionTwo.join(' | '))
    
    //reverses each array where index 0 is greater than index 1, then similarly to building solutionTwo, it maps the pairs to strings, compares them, and pushes the unique arrays
    solutionTwo.map((ar)=> ar[0] > ar[1] ? ar.reverse() : ar).map((ar)=>JSON.stringify(ar)).forEach((string)=>{!solutionThree.includes(string) ? solutionThree.push(string) : null})
    
    //maps the strings back into the array pairs
    solutionThree = solutionThree.map((string)=>JSON.parse(string))
    
    //logs solution three
    console.log('Solution Three:', solutionThree.join(' | '))
}

//calls the function
findTens(array, 10)
