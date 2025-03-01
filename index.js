const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
const finals2014 = fifaData.filter(function (item) {
    return item.Year === 2014 && item.Stage === 'Final'
})
// console.log(`task 1a`, finals2014[0]['Home Team Name'])
//(b) Away Team name for 2014 world cup final
// console.log(`task 1b`, finals2014[0]['Away Team Name'])//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final
// console.log`task 1d`, fifaData.map(function (item) { item.stage })
//(e) Winner of 2014 world cup final */


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/
// 1 param of data
function getFinals(array) {
    const newArray = array.filter(function (item) {
        return item.Stage === 'Final';
    })
    return newArray
}

// console.log(`task 2`, getFinals(fifaData))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, getFinals) {
    let years = getFinals(array)
    // console.log(retArr)
    years = years.map(function (item) { return item.Year })
    return years
}

//Below Works
// function getYears(array, getFinals) {
//     const newFinalsArray = getFinals(array)
//     const newArray = array.map(function (item) {

//         return item.Year
//         console.log(newFinalsArray)
//     })
//     // return newArray
//     newFinalsArray
// }
// console.log(getYears(fifaData, getFinals))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(array, cb) {
    let winnersArr = cb(array)
    // console.log(winners)
    let winners = []
    // winners.map(function getWinner(homeScore, awayScore) {
    //     if (homeScore > awayScore) {
    //         return true
    //     } else { return false }
    // })

    // winners
    // function decideWinner(homeScore, awayScore) {
    //     if (homeScore > awayScore) {
    //         return true
    //     } else { return false }

    // }
    winnersArr.forEach(function (item) {
        // console.log(win'nersArr)
        // console.log(item['Away Team Goals'])
        if (item['Home Team Goals'] > item['Away Team Goals']) { winners.push(item['Home Team Name']) }
        else { winners.push(item['Away Team Name']) }
        // console.log(winners)
    })
    return winners
    // console.log(getWinners(winnersArr[0]['Home Team Goals'], winners[0]['Away Team Goals']))
    //for each inxed of winners, check if away team > home team, {then .push homeTeamName} else {.push(awayTeamName)}
    // if (winners[i])
    // return (winners[0]['Home Team Goals'])
    // winners = winners.filter()
    // console.log(winners[0].city)
    // return filteredNameArr
}

// console.log(getWinners(fifaData, getFinals))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, getFinals) {
    let returnArr = []
    let finals = getFinals(array, getWinners)
    let years = getYears(array, getFinals)
    let winners = getWinners(array, getFinals)
    // console.log(finals.length)
    // console.log(years)
    // console.log(finals.length)
    // let years = cbGetYears(array)
    // console.log
    for (let i = 0; i < winners.length; i++) {
        returnArr.push(`In ${years[i]}, ${winners[i]} won the world cup!`)
    }
    // console.log(returnArr)
    return returnArr
}
console.log(getWinnersByYear(fifaData, getFinals))


// console.log(getWinnersByYear(fifaData, getFinals, getWinnersByYear, getWinners)


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinals) {

    let dataPool = getFinals
    let aveNumsHome = []
    let aveNumsAway = []
    let returnArr = []
    let returnAverage = 0
    aveNumsHome = dataPool.reduce(function (acc, item) {
        return acc + item['Home Team Goals']

    }, 0)
    returnArr.push((aveNumsHome / dataPool.length).toFixed(2))
    // console.log(returnArr)

    aveNumsAway = dataPool.reduce(function (acc, item) {
        return acc + item['Away Team Goals']

    }, 0)
    // console.log(aveNumsAway)
    returnArr.push((aveNumsAway / dataPool.length).toFixed(2))
    // console.log(returnArr)
    returnAverage = (parseFloat(returnArr[0]) + parseFloat(returnArr[1]))
    let returnMe = []
    return `${returnAverage}`
    console.log(returnMe)

    return returnMe



    // console.log(dataPool.length)
    /* code here */

}


console.log(getAverageGoals(getFinals(fifaData)))

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 
 
Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
