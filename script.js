const increaseBtn = document.getElementById('increase-btn')
const decreaseBtn = document.getElementById('decrease-btn')
const resetBtn = document.getElementById('reset-btn')
const submitBtn = document.getElementById('submit-btn')
const changeBtn = document.getElementById('change-btn')
let numberDisplay = document.getElementById('number-display')
let numberInput = document.getElementById('number-input')
let incrementalInput = document.getElementById('incremental-input')
let incrementalDisplay = document.getElementById('incremental-display')

let incrementalValue = 1

numberDisplay.textContent = 0

incrementalDisplay.textContent = `Interval: ${incrementalValue}`


increaseBtn.addEventListener('click', function(){
	let newNumber = Math.floor(numberDisplay.textContent)
	newNumber += incrementalValue
	numberDisplay.textContent = newNumber
	incrementalDisplay.textContent = `Interval: +${incrementalValue}`
})

decreaseBtn.addEventListener('click', function(){
	let newNumber = Math.floor(numberDisplay.textContent)
	newNumber -= incrementalValue
	numberDisplay.textContent = newNumber
	incrementalDisplay.textContent = `Interval: -${incrementalValue}`
})

resetBtn.addEventListener('click', function(){
	numberDisplay.textContent = 0
	incrementalValue = 1
	incrementalDisplay.textContent = `Interval: ${incrementalValue}`
})


submitBtn.addEventListener('click', function(){

	if(numberInput.value == ''){
			numberDisplay.textContent = 0;
	}else{
		numberDisplay.textContent = numberInput.value;
		numberInput.value = ''
	}
		

})

changeBtn.addEventListener('click',function(){

	if(incrementalInput.value === ''){
			incrementalValue = 1
			incrementalDisplay.textContent = `Interval: ${incrementalValue}`
	}else {
			incrementalValue = Math.floor(incrementalInput.value)
			incrementalDisplay.textContent = `Interval: ${incrementalValue}`
			incrementalInput.value = ''

	}

})
