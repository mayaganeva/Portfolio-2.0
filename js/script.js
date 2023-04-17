

var checkbox = document.querySelector( '#toggle' );
var icon = document.querySelector( '#burger' );
var listener = function( e ) {
  if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );

  }
};

checkbox.addEventListener( 'click', function(){
  if( this.checked ) {
    document.addEventListener( 'click', listener );
  } 
});


// let galleryItems = document.getElementsByClassName("gallery__item");
// console.log(galleryItems);

// for (let i = 0; i < galleryItems.length; i++) {
//     galleryItems[i].classList.add("class");
// }

// Array.from( document.querySelectorAll('[data-expand]'), (input)=>{
//   let parent = input.parentNode;
//   function updateSize(){
//     parent.dataset.value = input.value
//   }
//   input.addEventListener('input', updateSize);
//   updateSize();
// });




// let c = document.getElementById("#ham");

// function toggleNav() {
//   console.log(c);
// }


// Auto resize textareas

// var tx = document.getElementsByTagName('textarea');
// for (var i = 0; i < tx.length; i++) {
//   tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
//   tx[i].addEventListener("input", OnInput, false);
// }

// function OnInput(e) {
//   this.style.height = 'auto';
//   this.style.height = (this.scrollHeight) + '1px';
// }



// const navButton = document.querySelector(".hamburger__open");

//   function toggleNav() {
//     if (navButton.getElementsByClassName.display === "block") {
//       navButton.style.display = "none";
//     } else {
//       navButton.style.display = "block";
//     }
//   }

//   navButton.addEventListener('click', toggleNav);
