let arrow = document.querySelector('.arrow')
let sidebar = document.querySelector('.sidebar')
let text = document.querySelectorAll('.text');// находим все text
let al = document.querySelectorAll('.al');
let porofileWrap = document.querySelector('.porofile__wrap')


arrow.addEventListener('click', function() {// стрелке добавляем в список событие клик и выполняем функцию
  arrow.classList.toggle('arrow__active');// стрелке в список классов перключатель _active
  sidebar.classList.toggle('sidebar__active');// сайдбару в список классов перключатель _active
  for (var i = 0; i < text.length; i++) {// для (от 0, пока меньше длины масива text, выполняем следующему)
      text[i].classList.toggle('text__active');// всем text в список классов перключатель _active
  }
})

///////////////////////////////////////////////////////////////////////////////////////////////////
for(let e=0;e<al.length;e++) {
    const t=al[e];
        t.addEventListener("mouseenter",(function(e) {
            t.classList.add("hover__active")
        })
    ),
        t.addEventListener("mouseleave",(function(e) {
            t.classList.remove("hover__active")
        })
    )
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function toggleItem(elem) {
  for (var i = 0; i < al.length; i++) {
    al[i].addEventListener("click", function(e) {
      var current = this;
      for (var i = 0; i < al.length; i++) {
        if (current != al[i]) {
          al[i].classList.remove('click');
        } 
        // else if (current.classList.contains('click') === true) {
        //   current.classList.remove('click');
        // }
         else {
          current.classList.add('click')
        }
      }
      e.preventDefault();
    });
  };
}
toggleItem(al);
////////////////////////////////////////////////////////////////////
// porofileWrap.addEventListener('click', function() {
//   sidebar.classList.toggle('sidebar__active');
// })