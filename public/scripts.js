window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  let page = document.querySelector('.page')
  let initialTransformation = 200
  let changableTransformation = initialTransformation

  let lastKnownScrollPosition = 0
  let ticking = false

  function doSomething(scrollPos) {
    // Do something with the scroll position

  }

  document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY
    console.log();

    if (!ticking) {
      window.requestAnimationFrame(function() {
        // offset = 3/lastKnownScrollPosition

        // page.style.transform = `translateX(${changableTransformation}px)`
        doSomething(lastKnownScrollPosition)
        ticking = false;
      });

      ticking = true;
    }
  });


  // DIV FOLLOW MOUSE //
  // var filler = document.getElementById("content");
  // var caption = document.getElementById("caption");
  //
  // const follow = e => {
  //   caption.style.top = e.offsetY+ 20 + "px";
  //   caption.style.left = e.offsetX + 10 + "px";
  // };
  // document.addEventListener("mousemove", follow);

  // document.addEventListener("mouseover", follow);

  // filler.addEventListener("mouseover", follow);

  document.querySelectorAll("#caption").forEach((caption) => {
    // let caption = document.getElementById("caption");

    const follow = e => {
      caption.style.top = e.offsetY+ 20 + "px";
      caption.style.left = e.offsetX + 10 + "px";
    };
    document.addEventListener("mousemove", follow);



  })

  // END OF DIV FOLLOW MOUSE //


  // ––––––––––––––SLIDER–––––––––––––––––//
  let max = 'next';

  document.querySelectorAll("#content").forEach((container) => {
    let el = container;
    let list = el.getElementsByTagName('li')
    let numbering = el.querySelector('span')



    container.addEventListener('click', () => {

      // console.log(numbering.innerHTML)

      for (i = 0; i < list.length; i++) {

        let liste_classe = list[i].classList;

        for (j = 0; j < list.length; j++) {
          if (liste_classe[j] === "active") {
            var index_active = list[i],
              index_future;

            if (max === 'next') {
              if (i + 1 !== list.length) {
                numbering.innerHTML = i + 2;
                index_future = list[i + 1];

              } else {
                index_future = list[0];
                max = 'prev';
                numbering.innerHTML = 1;
              }
            } else if (max === 'prev') {
              if (i - 1 >= 0) {
                index_future = list[i - 1];
                numbering.innerHTML = i + 2;

              } else {
                index_future = list[i + 1];
                max = 'next';
                numbering.innerHTML = i + 2;
              }
            }

          }
        }
      }

      index_active.classList.remove('active');
      index_future.classList.add('active');

      console.log(list)

    });
  });
  // ––––––––––––––SLIDER END–––––––––––––––––//

});
