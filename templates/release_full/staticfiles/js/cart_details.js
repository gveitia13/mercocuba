// d = document
let cant = 0
d.querySelectorAll('.input-cantidad').forEach(e => cant++)
let product = cant === 1 ? `producto` : 'productos',
  total = 0

d.querySelectorAll('.card-s-cart div div > span.span-price b').forEach(e =>
  total += parseFloat(e.children[0].innerText))
d.querySelector('#total-price').innerHTML =
  ` <b>$${total.toFixed(2)}</b> (${cant} ${product}) : <b>Total</b> `
total = 0

d.querySelectorAll('.input-cantidad')
  .forEach(e =>
    e.addEventListener('change', function () {
      let value = parseFloat(this.value),
        parent = this.parentElement.parentElement.parentElement,
        price = parseFloat(parent.children[0].value).toFixed(2),
        input = parent.children[parent.children.length - 1].children[0].children[0].children[0]
      input.innerText = `${parseFloat(value * price).toFixed(2)}`

      d.querySelectorAll('.card-s-cart div div > span.span-price b').forEach(e =>
        total += parseFloat(e.children[0].innerText))

      d.querySelector('#total-price').innerHTML =
        ` <b>$${total.toFixed(2)}</b> (${cant} ${product}) : <b>Total</b> `
      total = 0
    }))