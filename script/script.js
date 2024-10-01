let SearchForm = document.querySelectorAll('.search')
let control_box = document.querySelector('.control-box')


SearchForm.forEach(
    function(e){
        e.addEventListener('submit', function(e){
            e.preventDefault();
            MyAlert('Can\'t Search Images, Database not connected\nWebsite is only for Project purpose.');
        let searchBox = document.querySelector('#searchBox')
        searchBox.value = ""
        })
})

let hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', function(){
    control_box.classList.toggle('control-box-active')
})

let UploadButton = document.querySelector('#UploadButton')
let ul = document.getElementById('Album')

let ImageLi = ul.querySelectorAll('li')

UploadButton.addEventListener('change',
    function(){
        control_box.classList.remove('control-box-active')

        let TitleText = prompt("Enter your Image Title");

        const [file] = UploadButton.files
        let url = URL.createObjectURL(file)

        let img = document.createElement('img')
        img.setAttribute("src",url)
        img.setAttribute("loading","lazy")
        


        let h4 = document.createElement('h4')
        h4.innerHTML = TitleText
        
        let Button = document.createElement('Button')
        Button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="false" style="flex-shrink: 0;"><desc lang="en-US">Arrow pointing down</desc><path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path></svg>
        `
        let a = document.createElement('a')
        a.href = url
        a.setAttribute('download',url)
        a.appendChild(Button)

        let TitleDiv = document.createElement('div')
        TitleDiv.className = "title"
        TitleDiv.appendChild(h4)
        TitleDiv.appendChild(a)


        let li = document.createElement('li')
        li.appendChild(img)
        li.appendChild(TitleDiv)

        ul.appendChild(li)
        ImageEvent()



    }
)

//===================================UnderDevelop Option=============================================

let navUL = document.querySelector('#menu')
let navLI = navUL.querySelectorAll('li')
navLI.forEach((e)=>{
    e.addEventListener('click',
        function(){
            // alert('This is not a Orignal Website, its is a clone project\, \ndesign by Priyanka')
            MyAlert('This is not a Orignal Website, its is a clone project\, \ndesign by Priyanka')
        }
    )
})

let login = document.querySelector('.control-box')
let loginP = login.querySelector('p')

loginP.addEventListener('click',
    function(){
        // alert('Can\'t Login to WebSite,\nits not a Orignal Website\nits is a clone project\, \ndesign by Priyanka')
        control_box.classList.remove('control-box-active')
        MyAlert('Can\'t Login to WebSite,\nits not a Orignal Website, its is a clone project \ndesign by Priyanka')
    }
)

let ribbon = document.querySelector('.ribbon')
let ribbonUL = ribbon.querySelectorAll('ul')

ribbonUL.forEach((e)=>{
    e.addEventListener('click',
        function(){
            // alert('This is not a Orignal Website, its is a clone project\, \ndesign by Priyanka')
            MyAlert('This is not a Orignal Website, its is a clone project\, \ndesign by Priyanka')
      
        }
    )
})

//==========================Custom Alert=====================================================

function MyAlert(Text){
    let alertBox = document.createElement('div')
    alertBox.id = 'alertBox'
     
    let h2 = document.createElement('h2')
    h2.innerText = 'Priyanka says'

    let p = document.createElement('p')
    p.innerText = Text

    let div = document.createElement('div')
    let button = document.createElement('button')
    button.innerText = 'OK'
    div.appendChild(button)

    alertBox.appendChild(h2)
    alertBox.appendChild(p)
    alertBox.appendChild(div)

    let clickDiv = document.createElement('div')
    clickDiv.appendChild(alertBox)
    clickDiv.id = 'clickDiv'
    document.body.appendChild(clickDiv)

    button.addEventListener('click',
        function(){
            clickDiv.remove()
        }
    )
}


//===========================PreviewImage=================================================

function PreviewImage(src,title,index){

    let downloadButton = document.createElement('button')
    downloadButton.innerText = 'Download free'

    let a = document.createElement('a')
    a.href = src
    a.setAttribute("download",src)
    a.appendChild(downloadButton)

    let h5 = document.createElement('h5')
    h5.innerText = title

    let ImageHeader = document.createElement('div')
    ImageHeader.className = 'ImageHeader'
    ImageHeader.appendChild(h5)
    ImageHeader.appendChild(a)

    let img = document.createElement('img')
    img.src = src
    let classPreview = document.createElement('div')
    classPreview.className = 'classPreview'
    classPreview.appendChild(img)

    let imagePreviewBox = document.createElement('div')
    imagePreviewBox.className = 'imagePreviewBox'
    imagePreviewBox.appendChild(ImageHeader)
    imagePreviewBox.appendChild(classPreview)



    let closeButton = document.createElement('button')
    closeButton.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="false" style="flex-shrink: 0;">
    <desc lang="en-US">An X shape</desc>
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
    </svg>
    `

    let previewBtn = document.createElement('div')
    previewBtn.className = "previewBtn"
    previewBtn.innerHTML =`
    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="false" style="flex-shrink: 0;"><desc lang="en-US">Chevron left</desc><path d="M15.5 18.5 14 20l-8-8 8-8 1.5 1.5L9 12l6.5 6.5Z"></path></svg>
    `


    let nextBtn = document.createElement('div')
    nextBtn.className ="nextBtn"
    nextBtn.innerHTML =`
    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="false" style="flex-shrink: 0;"><desc lang="en-US">Chevron right</desc><path d="M8.5 5.5 10 4l8 8-8 8-1.5-1.5L15 12 8.5 5.5Z"></path></svg>
    `
let count = 0
ImageLi = ul.querySelectorAll('li')
ImageLi.forEach(
    function(_,i){
        if(index == i){
            count = index
            previewBtn.addEventListener('click',
            function(){
                    if(count!=0){
                        // console.log(count)
                    let previousElement = ImageLi[count].previousElementSibling
                
                    let div = previousElement.querySelector('div')
                    let previousText = div.querySelector('h4')
                    
                    h5.innerText = previousText.innerText
                    a.href = previousElement.querySelector("img").src
                    a.setAttribute("download",previousElement.querySelector("img").src)
                    img.src = previousElement.querySelector("img").src
                    count-- 
                    }               
                })

            nextBtn.addEventListener('click',
            function(){
                    if(count!=ImageLi.length - 1){
                        // console.log(ImageLi.length)
                    let nextBtn = ImageLi[count].nextElementSibling
                        
                    let div = nextBtn.querySelector('div')
                    let previousText = div.querySelector('h4')
                    
                    h5.innerText = previousText.innerText
                    
                    a.href = nextBtn.querySelector("img").src
                    a.setAttribute("download",nextBtn.querySelector("img").src)
                    img.src = nextBtn.querySelector("img").src

                    img.src = ImageLi[count].nextElementSibling.querySelector("img").src
                    count++ 
                }               
                })
        }
})

    let clickImgDiv = document.createElement('div')
    clickImgDiv.id = 'clickImgDiv'
    clickImgDiv.appendChild(closeButton)
    clickImgDiv.appendChild(previewBtn)
    clickImgDiv.appendChild(nextBtn)
    clickImgDiv.appendChild(imagePreviewBox)

    closeButton.addEventListener('click',
        function(){
            clickImgDiv.remove()
        }
    )
  document.body.appendChild(clickImgDiv)
}



//===============================ImagePreview=================


function ImageEvent(){
    ImageLi = ul.querySelectorAll('li')
    ImageLi.forEach(
        function(e,index){
            let img = e.querySelector('img')
            let div = e.querySelector('div')
            let h4 = div.querySelector('h4')
            img.addEventListener('click',
                function(){
                    // console.log(h4)
                    PreviewImage(img.src,h4.innerText,index)
                }
            )
        }
    ) 
}

ImageEvent()

