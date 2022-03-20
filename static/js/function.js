const d = document

$(document).ready(function () {
  $('.select2').select2({
    dropdownAutoWidth: false
  });

  $('.selectpicker').selectpicker();

  let evt = new Event()
  m = new Magnifier(evt);
  // m.attach({
  //   thumb: '#prod-img-full',
  //   large: d.querySelector('#prod-img-full').src,
  //   mode: 'inside',
  //   zoom: 2,
  //   zoomable: true
  // })

  // try {
  d.querySelectorAll('.card-mini').forEach(a => a.addEventListener('click', function () {
    d.querySelectorAll('.card-mini').forEach(e => e.classList.remove('active'))
    this.classList.add('active')
    d.querySelector('#prod-img-full').src = this.src
    lupa(evt)

    let asd = d.querySelectorAll('#prod-img-full-lens')
    for (let i = 1; i < asd.length; i++) {
      asd[i].remove()
    }
    let img_large = d.querySelectorAll('#prod-img-full-large')
    img_large.forEach(e => {
      if (d.querySelector('#prod-img-full').src !== e.src)
        e.remove()
    })
  }))

  $('.card-mini:first').click()
  // } catch (e) {
  //   console.log(e)
  // }


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
  // magnify("prod-img-full", 2)

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

function lupa(evt) {
  m = new Magnifier(new Event());
  m.attach({
    thumb: '#prod-img-full',
    large: d.querySelector('#prod-img-full').src,
    mode: 'inside',
    zoom: 2,
    zoomable: true
  })
}

/*function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /!* Create magnifier glass: *!/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /!* Insert magnifier glass: *!/
  img.parentElement.insertBefore(glass, img);

  /!* Set background properties for the magnifier glass: *!/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /!* Execute a function when someone moves the magnifier glass over the image: *!/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /!*and also for touch screens:*!/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    /!* Prevent any other actions that may occur when moving over the image *!/
    e.preventDefault();
    /!* Get the cursor's x and y positions: *!/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /!* Prevent the magnifier glass from being positioned outside the image: *!/
    if (x > img.width - (w / zoom)) {
      x = img.width - (w / zoom);
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - (h / zoom)) {
      y = img.height - (h / zoom);
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /!* Set the position of the magnifier glass: *!/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /!* Display what the magnifier glass "sees": *!/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /!* Get the x and y positions of the image: *!/
    a = img.getBoundingClientRect();
    /!* Calculate the cursor's x and y coordinates, relative to the image: *!/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /!* Consider any page scrolling: *!/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x: x, y: y};
  }
}*/
