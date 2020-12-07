function appendImageElem(keyword, index) {
    const imgElm = document.createElement('img');
    imgElm.src=`https://source.unsplash.com/400x225/?${keyword}&sig=${index}`
    

    const galleryElm=document.querySelector('.gallery')
    galleryElm.appendChild(imgElm);
}

function removePhotos(){
    const galleryElm = document.querySelector('.gallery');
    galleryElm.innerHTML=('');
}

function searchPhotos(event){
 const keyword = event.target.value;
 if (event.key==='Enter'&&keyword){
    removePhotos();
    for(let i=1;i<=9;i++){
        appendImageElem(keyword, `${i}`)
    }
 }
}


function run() {   
    
    const inputElm = document.querySelector('input');
    inputElm.addEventListener('keydown', searchPhotos);
}

run();