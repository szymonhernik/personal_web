window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  // ABOUT BUTTON SHOW AND CLOSE //
  // ABOUT BUTTON SHOW AND CLOSE //

  let aboutButton = document.getElementById("about-button")
  let aboutSection = document.getElementById("about-section")
  let closeAbout = document.getElementById("about-close")

  aboutButton.addEventListener("mouseover", function(event) {
    aboutSection.classList.add("in_view");
  }, false);
  aboutButton.addEventListener("close", function(event) {
    aboutSection.classList.add("in_view");
  }, false);

  closeAbout.addEventListener("click", function(event) {
    aboutSection.classList.remove("in_view");
  }, false);

  // END OF ABOUT BUTTON SHOW AND CLOSE //
  // END OF ABOUT BUTTON SHOW AND CLOSE //


});





// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//
// –––––UNUSED–––––––––UNUSED–––––––––––––UNUSED––––//



// ––––––––––––––SLIDER–––––––––––––––––//
// ––––––––––––––SLIDER–––––––––––––––––//
// ––––––––––––––SLIDER–––––––––––––––––//
// let max = 'next';
//
// document.querySelectorAll("#content").forEach((container) => {
//   let el = container;
//   let list = el.getElementsByTagName('li')
//   let numbering = el.querySelector('span')
//
//
//
//   container.addEventListener('click', () => {
//
//     // console.log(numbering.innerHTML)
//
//     for (i = 0; i < list.length; i++) {
//
//       let liste_classe = list[i].classList;
//
//       for (j = 0; j < list.length; j++) {
//         if (liste_classe[j] === "active") {
//           var index_active = list[i],
//             index_future;
//
//           if (max === 'next') {
//             if (i + 1 !== list.length) {
//               numbering.innerHTML = i + 2;
//               index_future = list[i + 1];
//
//             } else {
//               index_future = list[0];
//               max = 'prev';
//               numbering.innerHTML = 1;
//             }
//           } else if (max === 'prev') {
//             if (i - 1 >= 0) {
//               index_future = list[i - 1];
//               numbering.innerHTML = i + 2;
//
//             } else {
//               index_future = list[i + 1];
//               max = 'next';
//               numbering.innerHTML = i + 2;
//             }
//           }
//
//         }
//       }
//     }
//
//     index_active.classList.remove('active');
//     index_future.classList.add('active');
//
//     console.log(list)
//
//   });
// });
// ––––––––––––––SLIDER END–––––––––––––––––//
// ––––––––––––––SLIDER END–––––––––––––––––//
// ––––––––––––––SLIDER END–––––––––––––––––//
