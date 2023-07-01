//following are for controlling the slider on the artist section
let imgNum = 1
let imgDiv = document.querySelector(".artist-imgs-div")
let curArtist = "gabe"

let artistBtns = document.querySelectorAll(".artist-btn")
artistBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    imgNum = 1
    curArtist = btn.id
    imgDiv.innerHTML = `<img class="artist-imgs fade" src="images/${curArtist}/${imgNum}.JPG">`
    console.log(btn.id)
  })
})


let imgSliderRight = document.querySelector(".img-right")
imgSliderRight.onclick = () => {
  if(imgNum == 10){
    imgNum = 1
  }
  else{
    imgNum += 1
  }
  imgDiv.innerHTML = `<img class="artist-imgs fade" src="images/${curArtist}/${imgNum}.JPG">`
}

let imgSliderLeft = document.querySelector(".img-left")
imgSliderLeft.onclick = () => {
  if(imgNum == 1){
    imgNum = 10
  }
  else{
    imgNum -= 1
  }
  imgDiv.innerHTML = `<img class="artist-imgs fade" src="images/${curArtist}/${imgNum}.JPG">`
}
//end of sliders for artist section



//following are for the typewriter effect on intro section
const type = () => {
  const words = "Deliris Studios, the premier tattoo studio of Central Florida."
  let wdiv = document.getElementById("words")

  let i = 0
  let intID = setInterval(() => {
    if(i == words.length){
      wdiv.textContent = wdiv.textContent.slice(0, wdiv.textContent.length - 1)
      clearInterval(intID)
    }
    else{
      wdiv.textContent = wdiv.textContent.slice(0, wdiv.textContent.length - 1)
      wdiv.textContent += words[i] + "|"
      i++
    }
  }, 150)
}

const untype = () => {
  let wdiv = document.getElementById("words")

  let i = wdiv.textContent.length - 1
  let intID = setInterval(() => {
    if(i == 0){
      clearInterval(intID)
    }
    wdiv.textContent = wdiv.textContent.slice(0, i)
    wdiv.textContent += "|"
    i--
  }, 150)
}

type()
setTimeout(() => {
  setInterval(()=>{
    let wdiv = document.getElementById("words")
    if(wdiv.textContent.length === 81){
      wdiv.textContent += "|"
    }
    else{
      wdiv.textContent = wdiv.textContent.slice(0, wdiv.textContent.length - 1)
    }
  }, 500)
}, 10000)
//end of typewriter effect on intro section



//following are for controlling the sliders for the reviews section
let revDiv = document.querySelector(".reviews-div")
let revNum = 0
let reviewSliderRight = document.querySelector(".review-right")

reviewSliderRight.onclick = () => {
  if(revNum == 12){
    revNum = 0
  }
  else{
    revNum += 1
  }
  
  fetch(`/reviews/${revNum}.txt`).then(response => response.text()).then((data)=> {
    revDiv.innerHTML = `<img class="reviews-imgs fade" src="pics/stars.svg">
    <p id="review-words" class="fade">${data}
      <br><br><strong>~Google Reviews~</strong>
    </p>`
      
  })
}


let reviewSliderLeft = document.querySelector(".review-left")
reviewSliderLeft.onclick = () => {
  if(revNum == 0){
    revNum = 12
  }
  else{
    revNum -= 1
  }
  
  fetch(`/reviews/${revNum}.txt`).then(response => response.text()).then((data)=> {
    revDiv.innerHTML = `<img class="reviews-imgs fade" src="pics/stars.svg">
    <p id="review-words" class="fade">${data}
      <br><br><strong>~Google Reviews~</strong>
    </p>`
      
  })
}
//end of sliders for reviews section
