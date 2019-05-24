// export function Transition(){
//   const $firstPage = document.getElementById('main');
//   const $secondtPage = document.getElementById('nosotros');
//   const $thirdPage = document.getElementById('servicios');
//   const $fourthPage = document.getElementById('videobg');
//   const main = document.querySelectorAll("[id='mainButton']");
  
//   main.addEventListener('click', function(){
//     $firstPage.style.zIndex = "100";
//     console.log('aaa')

//   })

//   console.log(main)
//   var pages = [$firstPage,$secondtPage,$thirdPage,$fourthPage]
//   console.log(pages)




//   function bringToFront(elem) {
//     elem.style.zIndex = '1'
//   }
//   for (let i = 0; i < pages.length; i++) {
//     const element = pages[i];
    
//   }
  

// }
// export default Transition;


  // Transition effect for navbar 
  $(window).scroll(function () { //function is called while you scrolls 
    // checks if window is scrolled more than 300px, adds/removes solid class
    if ($(this).scrollTop() > 300) {
      $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
    } else {
      $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
    }
  });
