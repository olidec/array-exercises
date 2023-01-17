let beatles = ['John', 'Paul', 'George', 'Ringo']
document.getElementById('original').innerHTML = beatles

// Exercise 1

let beatles = ['Paul', 'Ringo']
document.getElementById('array-ex1').innerHTML = beatles



// Exercise 2

beatles[3] = 'Harry Potter'
document.getElementById('array-ex2').innerHTML = beatles

// Exercise 3 

beatles[4] = 'Yoko'
document.getElementById('array-ex3').innerHTML = beatles

// Exercise 4 

beatles[10] = 'The new Beatle'
document.getElementById('array-ex4').innerHTML = beatles

// Exercise 5

document.getElementById('array-ex5').innerHTML = `The array has length ${ beatles.length }.`

// Exercise 6

beatles.sort()
document.getElementById('array-ex6').innerHTML = beatles