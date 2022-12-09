function appendJs(link) {
    var js = document.createElement("script");

    js.type = 'text/javascript';
    js.src = link
    document.body.appendChild(js)
}

function appendCss(link) {
    var css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = link
    document.head.appendChild(css)
}

var scripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js',
    'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/Scripts/ppc/index.js'
]

var styles = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.theme.min.css',
    'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/Scripts/ppc/style.css',
    //closed checkout
    'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/Scripts/ppc/closedCheckout.css'
]

styles.forEach(function (link) {
    appendCss(link)
})
scripts.forEach(function (link) {
    appendJs(link)
})
