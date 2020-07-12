const url = 'https://www.google.com/imgres?imgurl=https://upload.wikimedia.org/wikipedia/commons/d/d2/Perro_esquimal_canadiense_6.jpg&imgrefurl=https://es.wikipedia.org/wiki/Perro_esquimal_canadiense&tbnid=XjNwJfSlcOurWM&vet=1&docid=uMKuDhX46e3r2M&w=704&h=681&q=perro&source=sh/x/im'

const newUrl = new URL(url)
const urlParams = new URLSearchParams(newUrl.search);
const imgUrl = urlParams.get('imgurl')
const imgRefUrl = urlParams.get('imgrefurl')

console.log(imgUrl)
console.log(imgRefUrl)

urlParams()