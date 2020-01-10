const banffImg =  document.querySelectorAll('img')

banffImg.forEach(img =>  {
    img.addEventListener('click', function(e){
        console.log('ive been clicked')
    })
})

const practice = document.querySelectorAll('a')

practice.forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault()
        console.log('test')
    })
})

