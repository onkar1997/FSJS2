let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// Assignment 2
// 1
let accordion = document.querySelectorAll('.accordian h3')

accordion.forEach((elem, index) => {
  elem.style.backgroundColor = '#DDCFFF'
  if(index > 1) {
    let p = elem.nextElementSibling;
    p.style.display = 'block'
  }
})

// 2
// let accordion = document.querySelectorAll('.accordian h3')

// accordion.forEach((elem, index) => {
//   elem.style.backgroundColor = '#DDCFFF'
// })

// let div = document.createElement('div')
// div.className = 'accordian'

// let h3 = document.createElement('h3')
// h3.textContent = 'Skills'
// h3.style.backgroundColor = '#DDCFFF'

// let p = document.createElement('p')
// p.textContent = 'I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.'
// p.style.display = 'block'

// div.appendChild(h3)
// div.appendChild(p)

// let accordianWrapper = document.getElementsByClassName('accordian-wrapper')[0]
// accordianWrapper.appendChild(div)