const d = document

$(document).ready(function () {
  $('.select2').select2({
    dropdownAutoWidth: false
  });

  $('.selectpicker').selectpicker();

  /*  if (isMobile()) {
      document.querySelectorAll('.swiper-wrapper').forEach(e =>
        e.style += 'display: flex;' +
          'flex-wrap: nowrap;' +
          'overflow-x: auto;' +
          ' -webkit-overflow-scrolling: touch;')
      document.querySelectorAll('.swiper-slide').forEach(e =>
        e.style += 'display: flex;' +
          'flex-wrap: nowrap;' +
          'overflow-x: auto;' +
          'flex: 0 0 auto;')
    } else {*/

  /*    let cant = 9
      if (window.outerWidth < 1200)
        cant = 8
      if (window.outerWidth < 1000)
        cant = 7
      if (window.outerWidth < 800)
        cant = 6
      if (window.outerWidth < 700)
        cant = 5
      if (window.outerWidth < 600)
        cant = 4
      if (window.outerWidth < 500)
        cant = 3

      console.log(window.outerWidth)
      console.log(cant)
      var swiper = new Swiper(".mySwiper", {
          slidesPerView: cant,
          spaceBetween: 15,
          freeMode: true,
          pagination: {
            clickable: true,
          },
        })*/
  // }
  if (!isMobile()) {
    d.querySelectorAll('.app').forEach(e => e.classList.remove('app'))
    d.querySelectorAll('.hs').forEach(e => e.classList.remove('hs', 'full', 'no-scrollbar'))
    d.querySelectorAll('.item').forEach(e => e.classList.remove('item'))
  }
  $('#inputGroupSelect').change(function () {
    if ($(this).val() === 'Otro') {
      $(this)
        .attr('name', '')
        .hide()
        .next('input').attr({
        'type': 'number',
        'name': 'selectNavbar',
        'min': 0,
        'class': 'form-control bg-light text-center form-control-sm',
        'style': 'border-bottom-right-radius: 0;border-top-right-radius: 0;border: 1px solid #00366d;width: 70px;',
      })
        .focus()
    }
  })
});

function isMobile() {
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/i))
  );
}
