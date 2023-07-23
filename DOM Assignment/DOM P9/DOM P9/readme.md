# **DOM ASSIGNMENT 9**

## **Task 1**

The user has to change the font style and color of the font to reddish.

### **After Update**

![Output Image](./myoutput/1.PNG)

### **Project Solution**

```js
let title = document.querySelector("h1");
title.style.color = "#EA2027";
title.style.fontFamily = "serif";
```

## **Task 2**

The user has to change color of the button to red on hover.

### **After Update**

![Output Image](./myoutput/2.PNG)

### **Project Solution**

```js
let addToCartBtn = document.getElementsByClassName('add-to-cart')[0]

addToCartBtn.addEventListener('mouseenter', () => {
	addToCartBtn.style.backgroundColor = '#EA2027'
})

addToCartBtn.addEventListener('mouseleave', () => {
	addToCartBtn.style.backgroundColor = 'hsl(158, 36%, 37%)'
})s
```
