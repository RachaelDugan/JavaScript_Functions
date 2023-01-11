console.log("Hello World!\n==========\n");
console.log('Hello teachers!');

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= Math.abs(count); i++) {
        if (i % 2 == 1) {
        console.log(i * Math.sign(count));
        }
    }
}
printOdds(30);
printOdds(-30);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    aboveSixteen = `Congrats ${userName} you can drive!`;
    belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
    if (age >= 16)
    console.log(aboveSixteen);
    else {
        console.log(belowSixteen);
    }
}

checkAge("Loretta", 13);
checkAge("Dennis", 19);

console.log("EXERCISE 3:\n==========\n");

function whichQuad(x, y) {
    {
        if (x > 0 && y > 0)
        return 'First Quadrant';
 
        else if (x < 0 && y > 0)
            return 'Second Quadrant';
        
            else if (x < 0 && y < 0)
            return 'Third Quadrant';
        
            else if (x > 0 && y < 0)
            return 'Forth Quadrant';
        
            else if (x == 0 && y != 0)
            return 'Positive Y axis';
        
            else if (x == 0 && y < 0)
            return 'Negative Y axis';
        
            else if (y == 0 && x != 0)
            return 'Negative X axis';
        
            else if (y == 0 && x > 0)
            return 'positive x axis';
 
        else
            return 'Origination Point';
    }
}
console.log(whichQuad(-1, 1));
console.log(whichQuad(0, -1));
console.log(whichQuad(-1, -1));
console.log(whichQuad(1, 0));
console.log(whichQuad(1, -1));
console.log(whichQuad(0, 0));
console.log(whichQuad(1, 1));
console.log();

console.log("EXERCISE 4:\n==========\n");

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function triangleMan(sideA, sideB, sideC) {
   let isValid = isTriangle(sideA, sideB, sideC)
   while (isValid)
       if (sideA == sideB && sideB == sideC) {
            return `This is an Equalateral triangle, man`;
        } else if (sideA == sideB || sideB == sideC || sideA == sideC ) {
            return `This is an Isosceles triangle, man`;
        } else {
            return `This is a Scalene triangle, man`;
        }
        return `Not a triangle`
}

console.log(triangleMan(6, 5, 4)); 
console.log(triangleMan(3,3,3));
console.log(triangleMan(33, 33, 22));
console.log(triangleMan(3, 5, 8)); //supposed to be invalid triangel but it is not working.
// 5 + 2 = 7 ad 7 is not > 8

console.log("EXERCISE 5:\n==========\n");
//bonus
function dataUsage(planLimit, day, usage) {
    daysInPlan = 30;
    planAverage = usage / day;
    calculatedAve = planLimit / daysInPlan;
    unusedData = planLimit - usage;
    
    
    console.log(`You are on day ${day} of your plan with ${daysInPlan - day} days left.`);
    console.log(`You are using ${planAverage} GB of data a day.`);
    console.log(`You have ${calculatedAve} GB of data to use per day and have ${unusedData} GB of data left.`)
    console.log(`At this rate you are not exceeding your plan limit!`);

    if (planAverage > calculatedAve) {
        console.log(`You are exceeding your limit. PLease upgrade your plan`);
    }
}
dataUsage(50, 8, 39)

