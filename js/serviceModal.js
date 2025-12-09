let servicePics = [
    {name: 'RSA', img:'./img/rsa.svg', size: '80px', sizeMax: '150px', id:'rsaModal'},
    {name: 'Bitsight', img: './img/bs.svg', size: '110px', sizeMax:'240px',id:'bsModal'},
    {name: 'Sumsub', img: './img/sumsub.svg', size:'130px', sizeMax:'200px', id:'sModal'},
    {name: 'Cyble', img: './img/cyble.png', size:'110px', sizeMax:'200px', id:'cModal'},
    {name: 'Illumio', img: './img/illumio.svg', size: '110px', sizeMax:'200px', id:'iModal'},
    {name: 'Aikido', img: './img/aikido.svg', size: '110px', sizeMax:'200px', id:'aModal'},
  ]

servicePics.forEach((service, index) => {
    let num = index + 1;
    $('.cell:nth-child('+num+')')
    .css('background-image', 'url('+service.img+')')
    .css('background-position', 'center')
    .css('background-origin','content-box')
    .css('background-repeat','no-repeat')
    .css('cursor', 'pointer')
    .css('background-size', $(window).width()<567 ? service.size : service.sizeMax);
})

window.addEventListener('resize', function(event) {
  servicePics.forEach((service, index) => {
    let num = index + 1;
    // console.log($(window).width())
    if ($(window).width() < 567) {
      $('.cell:nth-child('+num+')').css('background-size', service.size);
    }
    else {
      $('.cell:nth-child('+num+')').css('background-size', service.sizeMax);
    }
  })
}, true);