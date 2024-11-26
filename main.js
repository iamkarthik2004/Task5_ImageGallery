const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageDir = "./images/"


/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const placeholderText = ["Picture 1", "Picture 2", "Picture 3", "Picture 4", "Picture 5"];


/* Looping through images */
images.forEach((image, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageDir + image);
    newImage.setAttribute('alt', placeholderText[index]);
    thumbBar.appendChild(newImage);

    newImage.onclick = () => {
        displayedImage.src = newImage.src
        displayedImage.alt = newImage.alt
    }
})





/* Wiring up the Darken/Lighten button */
btn.onclick = () => {
    let current = btn.getAttribute('class');
    console.log(current)
    if (current == "light") {
        btn.setAttribute('class', "dark")
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"
    }
    else {
        btn.setAttribute("class", "light")
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"
    }
}