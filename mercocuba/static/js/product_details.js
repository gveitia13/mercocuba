let m = new Magnifier(new Event())
try {
  d.querySelectorAll('.card-mini').forEach(a => a.addEventListener('click', function () {
    d.querySelectorAll('.card-mini').forEach(e => e.classList.remove('active'))
    this.classList.add('active')
    d.querySelector('#prod-img-full').src = this.src
    if (!isMobile()) {
      m = new Magnifier(new Event());
      m.attach({
        thumb: '#prod-img-full',
        large: d.querySelector('#prod-img-full').src,
        mode: 'inside',
        zoom: 2,
        zoomable: true
      })

      let asd = d.querySelectorAll('#prod-img-full-lens')
      for (let i = 1; i < asd.length; i++) {
        asd[i].remove()
      }
      let img_large = d.querySelectorAll('#prod-img-full-large')
      img_large.forEach(e => {
        if (d.querySelector('#prod-img-full').src !== e.src)
          e.remove()
      })
    }
  }))
  $('.card-mini:first').click()
} catch (e) {
  console.log(e)
}