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
const reviews = ['Gibbs was super patient with me while I was making decisions on my design. He drew up exactly what I wanted and even when I wanted to change a few things last second, he was willing to do it with no hesitation. My tattoo exceeded my expectations. This tattoo is very important to me. This was something I have been thinking about for about 15 years. It is better than I ever dreamed. I did a large tattoo on my arm. I will be going back to do my other arm.',

'Everyone in the studio is friendly and accommodating. I loved that the guys there seemed like a big family, it was a nice atmosphere to walk into. The studio is absolutely beautifully designed.  Paulo was my artist and he was amazing to work with. His attention to detail was perfect. I couldn&#39;t be happier with my tattoo. It was exactly what I wanted, but better than I imagined. Highly recommend anyone in this studio! You all are incredible!!',

'This place was beyond amazing, as soon as I walked in I was offered some coffee, water, etc… and the customer service was truly above and beyond! Gabe was my artist and he did such an amazing job on the line work and was very professional from beginning to end. Recommend this place 500% Also, keep an eye out for their new name change soon to Deliris ! Will be coming here for the rest of my tattoos',

'Gabe was amazing and so professional with me. He made me feel so comfortable and went above and beyond. Truly grateful for him making this such a wonderful experience. I&#39;ll never go anywhere else for a tattoo again!',

'Hector did my tattoo and it was quick and easy. My tattoo was rather small but they were helpful throughout the whole process. From the moment I walked in the door to just check them out, all the way to when I came in for my appointment. The staff is nice and friendly and explained everything in detail so it was super helpful! Definitely looking to stay with this spot to do future tattoos!',

'These guys are very welcoming and super respectful. Furthermore, they are all professionals and great at their craft. I love my first tattoo. It was exactly what I was looking for. Gabe is the man. ¡Gracias equipo!',

'Hands down the best studio in the Central Florida area. I went to Gabe looking to get a black and grey sleeve. He took the time to sit down and look at the ideas with me and go over the process. 40+ hours later I couldn&#39;t be more happy with the outcome. 3 years since starting the sleeve, it still looks crisp and amazing to this day and I can&#39;t wait to go back for another big piece.',

'Paulo was amazing! He did two tattoos for me same day and helped ease my anxiety day of. They both came out flawless and better than I could have pictured them. So thankful for his expertise, I love my new art.',

'Gabe fine line tattoos is a work of art! I&#39;m so happy how my tattoo came out! It something I wanted for two years and they bought my vision to life. The quality of the tattoo was worth every penny! Check out the shop on Instagram and you&#39;ll see all tattoo artist amazing talent. Highly recommend!',

'Definitely my favorite tattoo i&#39;ve gotten yet. Gibbs was my tattoo artist and was the best interaction I had with any tattoo artist. Easy to work with and really cool guy. The atmosphere of the shop is great, will be back soon!',

'I got my tattoo done by Gabe. He was honest and guided me with my original design, so we discuss few changes. Great customer service, very professional and really nice studio. The studio is gorgeous. Would recommend this place 100%. Is bright and minimalist,  so it makes you feel welcome and calm. Gabe is really great, easy to talk to and an expert with fine lines tattoo. I&#39;m very happy with my design, already received many compliments on how nice it turned out.',

'The staff was very professional and friendly. It was my first tattoo, but Gibbs was sure to help me understand proper aftercare and work with me on a great design after I provided a vague idea of what I wanted.',

'I had a wonderful experience from the consultation meeting to actually getting the tattoo. The studio has a great atmosphere and the artists are super talented. Gabe was amazing and did an awesome job in creating the piece I had in mind. Thank you for everything and for making this a great experience. I can&#39;t wait to be back soon!'
]
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

  let displayRev = reviews[revNum]
  
  revDiv.innerHTML = `<img class="reviews-imgs fade" src="pics/fivestar.png">
  <p id="review-words" class="fade">${displayRev}
    <br><br><strong>~Google Reviews~</strong>
  </p>`
      
}


let reviewSliderLeft = document.querySelector(".review-left")
reviewSliderLeft.onclick = () => {
  if(revNum == 0){
    revNum = 12
  }
  else{
    revNum -= 1
  }
  
  let displayRev = reviews[revNum]
  
  revDiv.innerHTML = `<img class="reviews-imgs fade" src="pics/fivestar.png">
  <p id="review-words" class="fade">${displayRev}
    <br><br><strong>~Google Reviews~</strong>
  </p>`
}
//end of sliders for reviews section
