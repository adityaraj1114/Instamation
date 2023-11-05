var btn = document.querySelector(".button-container button");
var a = document.querySelector("h5");
var img = document.querySelector(".img-card-container img");
var icon = document.querySelector(".detail i");
var story = document.querySelector(".story-cont");


var req = 0;

icon.addEventListener("click", function () {
  if (req == 0) {
    icon.style.color = "grey"
    console.log("unliked")
    req = 1;
  }
  else {
    icon.style.color = "red"
    console.log("liked")
    req = 0;
  }
})


btn.addEventListener("click", function () {
  if (req == 0) {
    a.style.color = "black"
    a.innerHTML = "Friend"

    story.style.display = "block"
    // --------------------------------
    btn.style.backgroundColor = "grey"
    btn.innerHTML = "Remove Friend"
    btn.style.color = "black"
    //  -----------------------------

    img.style.filter = "blur(0px)"

    love.style.display = "block"
    icon.style.color = "grey"
    icon.style.display = "block"


    console.log("request sent")

    req = 1;
  }
  else {
    a.style.color = "Red"
    a.innerHTML = "Stranger"

    story.style.display = "none"

    btn.style.backgroundColor = "black"
    btn.innerHTML = "Add Friend"
    btn.style.color = "#ebf382"

    console.log("removed")
    img.style.filter = "blur(3px)"
    love.style.display = "none"
    icon.style.color = "red"
    icon.style.display = "none"


    console.log("removed")

    req = 0;
  }
})

// --------------------------------------------------------------------------------------------------------

var con = document.querySelector(".img-card-container");
var love = document.querySelector(".img-card-container i");

con.addEventListener("dblclick", function () {

  love.style.opacity = "0.9"
  love.style.scale = "1"
  icon.style.color = "red"

  setTimeout(function () {
    love.style.opacity = "0"
    // love.style.scale = "0"
  }, 1000)

  setTimeout(function () {
    // love.style.opacity = "0"
    love.style.scale = "0"
  }, 1800)

})


// -----------------------------------------------------------------------------------------------

var crsr = document.querySelector(".cursor");
var crd = document.querySelector("body");

crd.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
})

// ----------------------------------------------------------------------------------------------

// var imgmov = document.querySelector(".row img");
// var imgcont = document.querySelector(".row");

var elem = document.querySelectorAll(".row");


elem.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = "1"
    val.childNodes[3].style.scale = "1"
    console.log("entered");
  })

  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = "0"
    val.childNodes[3].style.scale = "0"
    console.log("exit");
  })

  val.addEventListener("mousemove", function (chng) {
    val.childNodes[3].style.left = chng.x + "px"
    // val.childNodes[3].style.top = chng.y + "px"

  })

})

// -----------------------------------------stories-----------------------------------------------

var arr = [

  {
    dp: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
  },

  {
    dp: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
  },

  {
    dp: "https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&w=600",
    story: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
  },

  {
    dp: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
  },

  {
    dp: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
    story: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
  },

  {
    dp: "https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?auto=compress&cs=tinysrgb&w=600",
    story: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
  },

  {
    dp: "https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=600"
  },
];

var emptyfill = " ";

arr.forEach(function (elem, idx) {

  emptyfill += `<div class="story-img">
  <img id="${idx}" src="${elem.dp}" alt="model image">
</div>`
})


var sto = document.querySelector(".story");

sto.innerHTML = emptyfill;

sto.addEventListener("click", function (dets) {

  // var value = (arr[dets.target.id].story);

  var full = document.querySelector(".full-screen");

  full.style.display = "block";
  full.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function(){
    full.style.scale = 0.7;
  }, 1400)

  setTimeout(function(){
    full.style.opacity = 0;
  }, 1400)

  setTimeout(function(){
    full.style.display = "none";
  }, 2700)

  setTimeout(function(){
    full.style.scale = 1;
  }, 2800)

  setTimeout(function(){
    full.style.opacity = 1;
  }, 2800)

})


// var full = document.querySelector(".full-screen");

// full.addEventListener("click",)




// ------------------------------------------------------Gsap------------------------------------------------------



//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.


// -------------------------------------------logo--------------------------------
gsap.from(".logo h1", {
  y: -80,
  duration: 2,
  delay: 1,
  opacity: 0,
  repeat: -1,

  // scale: 0,
});

gsap.to(".logo h1", {
  y: 0,
  duration: 2,
  delay: 1,
  opacity: 1,
  repeat: -1,
  yoyo: true,
  // scale: 1,

});

// --------------------------------------------card-----------------------------------

gsap.from(".card", {
  duration: 5,
  delay: 0.5,
  // backgroundColor: "black",
});

gsap.to(".card", {
  duration: 5,
  delay: 0.5,
  // backgroundColor: "#ebf382",
  repeat: -1,
  yoyo: true,
});

// -------------------------

gsap.from(".card", {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  scale: 0.5,
});

gsap.to(".card", {
  duration: 1,
  delay: 0.5,
  opacity: 1,
  scale: 1,
});

// ----------------------------------

gsap.from(".card h1", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
});

gsap.to(".card h1", {
  y: 0,
  duration: 1,
  delay: 1,
  opacity: 1,
});

// ------------------------------------

gsap.from(" .detail h5, .detail button", {
  x: -100,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
});

gsap.to(".detail h5, .detail button", {
  x: 0,
  duration: 2,
  delay: 1,
  opacity: 1,
  stagger: 0.5,
});


// gsap.from(".page2,", {
//   x: -100,
//   duration: 2,
//   delay: 2,
//   opacity: 0,
//   stagger: 0.5,
// });

// gsap.to(".page2 h1",  {
//   x: 0,
//   duration: 2,
//   delay: 1,
//   opacity: 2,
//   stagger: 0.5,
// });
// -------------------------------------body---------------------------------------------

// gsap.from("body", {
//   backgroundColor: red,
//   duration: 2,
//   delay: 1,
//   repeat: -1,
//   yoyo: true,
//   // scale: 0,
// });

// gsap.to("body", {
//   backgroundColor: blue,
//   duration: 2,
//   delay: 1,
//   opacity: 1,
//   repeat: -1,
//   yoyo: true,
//   scale: 1,
// });

// ---------------------------------page2---------------


