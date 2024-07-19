let readBtn = document.querySelector('.read')
let main = document.querySelector('main')
let imgRow = document.querySelector('.row')
let imgs = document.querySelector('.imgs')
let cv = document.querySelector('.cv')
let galleryBtn = document.querySelector('.gallery')
let container = document.querySelector('.container')
let images = [
    'https://files.fm/thumb_show.php?i=stxsufttz',
    'https://files.fm/thumb_show.php?i=bbpbxa7nk',
    'https://files.fm/thumb.php?i=2vzpsmqts',
    'https://files.fm/thumb_show.php?i=w32d25erc',
    'https://files.fm/thumb_show.php?i=3b978xcq9',
    'https://files.fm/thumb_show.php?i=grj659kb2',
    'https://files.fm/thumb_show.php?i=fyj2ndayq',
    'https://files.fm/thumb_show.php?i=xez6d4wmb',
    'https://files.fm/thumb_show.php?i=t55adbg9w',
    'https://files.fm/thumb_show.php?i=vprfvguw4',
    'https://files.fm/thumb_show.php?i=pcdj5rfu6',
    'https://files.fm/thumb_show.php?i=p2jn4tq4s',
    'https://files.fm/thumb_show.php?i=hqusdn53d',
    'https://files.fm/thumb_show.php?i=gr6jtwzng',
    'https://files.fm/thumb_show.php?i=h9cys69ep',
]


readBtn.addEventListener('click',() => {
    main.scrollIntoView()
    cv.style.display = 'block'
    imgs.style.display = 'none'
})
galleryBtn.addEventListener('click',() => {
    main.scrollIntoView()
    cv.style.display = 'none'
    imgs.style.display = 'block'
    
})
images.forEach(img => {
    imgRow.innerHTML+=`
        <div class="col-4 my-3 img-fluid">
            <img src="${img}" alt="">
        </div>
    `
});