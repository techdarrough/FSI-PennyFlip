// tracking globals

let heads = 0; 
let tails = 0;


// selectors if any here
let pennyImage= document.querySelector('#penny-image')
let message = document.querySelector('#message')
let headsCellId = document.querySelector('#heads')
let  headsPercentCellId = document.querySelector('#heads-percent')
let tailsCellId = document.querySelector('#tails')
let tailsPercentCellId = document.querySelector('#tails-percent')
let clearButton = document.querySelector('#clear')
let flipButton = document.querySelector('#flip')


//buttons



//listener all the magic happens here
flipButton.addEventListener('click', function(){
    // math random choice with 50% chance of beloew .5

    let flip = Math.random() < 0.5
    console.log(flip)
    //conditions
    if(flip > 0.5 ) {
        pennyImage.src =  'assets/penny-heads.png'
        message.textContent = 'You Flipped Heads!'
        
        // add on to heads
        heads += 1
        console.log(heads)
    }
    else {
        pennyImage.src = 'asets/penny-tails.png'
        message.textContent = 'You flipped Tails!'
        // add to tails
        tails += 1
        console.log(tails)

    }


    // update score board

    let total = heads + tails;

    // creat var for %
    let percentHeads = 0;
    let percentTails = 0;
//prevent divide by zero 

if (total > 0) {
    // calc percent of heads
    percentHeads = Math.round((heads / total) * 100)
    percentTails = Math.round((tails / total) * 100)

}
// update table values 

headsCellId.textContent = heads;
headsPercentCellId.textContent = percentTails + '%';
tailsCellId.textContent = tails;

})

//Clear button
clearButton.addEventListener('click', function () {
    // Reset the heads and tails values to zero
    heads =0 
    tails =0 
    message.textContent = 'Let\'s Get Rolling!'

    // Update the scoreboard
        
        // Calculate total number of rolls
        let total = heads + tails



let percentHeads = 0
let percentTails = 0


// prevent div by 0

  
  if (total > 0) {
    // Calculate percentage of heads and tails
    percentHeads = Math.round((headsRolls / total) * 100)
    percentTails = Math.round((tailsRolls / total) * 100)
}
})