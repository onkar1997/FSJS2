// 1
let main_languages = document.querySelector('.main__languages')
let a = document.querySelectorAll('.main__languages a')

a.forEach((elem, index) => {
	if(index%2 !== 0) {
		elem.style.display = 'none'
	}
})


// 2
let input = document.getElementsByClassName('main__form-input')[0].disabled = false
let btn = document.getElementsByClassName('main__form-btn')
btn[0].disabled = false

btn[0].addEventListener('click', getText)


function getText(e) {
	e.preventDefault()
	a.forEach((elem, index) => {
		if(index%2 !== 0) {
			elem.style.display = 'inline'
		}
	})
}

