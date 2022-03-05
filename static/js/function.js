$(document).ready(function () {
  d = document
  $('.select2').select2({
    dropdownAutoWidth: false
  });

  $('.selectpicker').selectpicker();

  $('.card-mini').on('click', function () {
    d.querySelectorAll('.card-mini').forEach(e => e.classList.remove('active'))
    this.classList.add('active')
    d.querySelector('#prod-img-full').src = this.src
  })
});
