let listDivImg = document.querySelectorAll('.list-img div')  // listImg
let next = document.querySelector('.next')                   //nextBtn
let prev = document.querySelector('.prev')                   //prevBtn
let imgWrap = document.querySelector('.img-wrap img') // var imgFeature 

let currentIndex = 0;

function setCurrent(index){
    currentIndex = index;
    imgWrap.src = listDivImg[currentIndex].querySelector('img').src;

    
    // remove all active img
    listDivImg.forEach((item) =>{
        item.classList.remove('active')
    })

    // set active 
    listDivImg[currentIndex].classList.add('active')
}

listDivImg.forEach((img,index) =>{
    img.addEventListener('click', (e) =>{
        imgWrap.style.opacity = '0.1'
        setTimeout(()=>{
            setCurrent(index)
            imgWrap.style.opacity = '1'
        },200)
        
    })
})

next.addEventListener('click', () =>{
    if (currentIndex == listDivImg.length -1){
        currentIndex = 0;
    } else currentIndex++;
    


    imgWrap.style.animation = ''
    setTimeout(()=>{
        setCurrent(currentIndex)
        imgWrap.style.animation = 'slideRight 1s ease-in-out forwards'
    },400)
})

prev.addEventListener('click',() =>{

    if (currentIndex == 0){
        currentIndex = listDivImg.length - 1;
    } else { currentIndex--;}

    

    imgWrap.style.animation = ''
    setTimeout(()=>{
        setCurrent(currentIndex)
        imgWrap.style.animation = 'slideLeft 1s ease-in-out forwards'
        
    },400)
})