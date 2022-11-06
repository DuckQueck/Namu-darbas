document.querySelector('.show').addEventListener('click', ()=>{imgShow();});
document.querySelector('.mix').addEventListener('click', ()=>{imgMix();});

function imgShow(){

    const container = document.querySelector('.container');
    const newDiv = document.createElement("div");

    newDiv.classList.add('imgs');

    for(let i = 1; i < 11; i++){

        const img = document.createElement("img");

        img.classList.add('pic');
        img.src = "imgs/img-" + i + ".jpg";
        newDiv.appendChild(img);
    }
    container.appendChild(newDiv);
}

function imgMix(){

    const imgs = document.querySelectorAll('.pic');
    const arr = new Array(imgs.length);
    let number = 0;

    for(const img of imgs){

        arr[number] = img.src;
        number++;
    }

    const randomItem = arr => arr.splice((Math.random() * arr.length) | 0, 1);

    for(const img1 of imgs){
        img1.src = randomItem(arr);
    }
}

