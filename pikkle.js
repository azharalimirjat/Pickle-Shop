// // Select the navbar, hamburger icon, nav-list, open icon, and close icon
// const navbar = document.querySelector('.navbar');
// const hamburger = document.querySelector('.hamburger');
// const navList = document.querySelector('.nav-list');
// const menuIcon = document.querySelector('[name="menu-outline"]');
// const closeIcon = document.querySelector('[name="close-outline"]');


// // Function to close the navbar menu
// function closeNavbarMenu() {
//     navList.classList.remove('active');
//     navbar.classList.remove('expanded');
//     menuIcon.style.display = 'block';
//     closeIcon.style.display = 'none';
// }

// // Add event listener to the hamburger icon
// hamburger.addEventListener('click', function() {
//   // Toggle the 'active' class on the nav-list
//   navList.classList.toggle('active');

//   // Toggle the 'expanded' class on the navbar
//   navbar.classList.toggle('expanded');
  
//   // Toggle between showing menu icon and close icon
//   if (menuIcon.style.display === 'none') {
//     menuIcon.style.display = 'block';
//     closeIcon.style.display = 'none';
//   } else {
//     menuIcon.style.display = 'none';
//     closeIcon.style.display = 'block';
//   }
// });

// // Add event listener to document to close navbar menu when clicking outside navbar
// document.addEventListener('click', function(event) {
//     const isClickInsideNavbar = navbar.contains(event.target);
//     if (!isClickInsideNavbar) {
//       closeNavbarMenu();
//     }
// });
// $(document).ready(function(){
//     $('a[href^="#"]').on('click', function(event) {
//       var target = $(this.getAttribute('href'));
//       if( target.length ) {
//         event.preventDefault();
//         $('html, body').stop().animate({
//           scrollTop: target.offset().top
//         }, 1000);
//       }
//     });
//   });
