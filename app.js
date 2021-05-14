let bars=document.querySelector('#bars');
let newArr=document.querySelector('.is-danger');
let bubble=document.querySelector('.is-primary');
let sort=document.querySelector('.is-link');
let insertion=document.querySelector('.is-warning');
let quick=document.querySelector('.is-info');
let size=document.querySelector("#size");
let speed=document.querySelector("#speed");

let arr=[];
let r=size.value;
let sp=speed.value;
create();

speed.addEventListener("change",function(){
    sp=speed.value;
});
size.addEventListener("change",recreate);

let barstyle=document.querySelectorAll('.barstyle');

newArr.addEventListener("click",function(){
    recreate();
})

bubble.addEventListener("click",function(){
    todisable();
    bubbleSort();
});
sort.addEventListener("click",function(){
    todisable();
    Sort();
});
insertion.addEventListener("click",function(){
    todisable();
    insertionSort();
});
quick.addEventListener("click",function(){
    todisable();
    quickSort();
});

function swap(el1,el2){
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    
    el1.style.height = transform2;
    el2.style.height = transform1;
}

function create(){
    r=size.value;
    let w=(600-(r))/(r);
    for(let i=0;i<r;i++){
        let n=Math.floor(Math.random()*500)+1;
        arr.push(n);
        let divs=document.createElement("div");
        divs.style.height=`${arr[i]}px`;
        divs.style.width=`${w}px`;
        divs.classList.add('barstyle');
        bars.appendChild(divs);
    }
}

function recreate(){
    while(bars.hasChildNodes()==true){
        bars.removeChild(bars.childNodes[0]);   
    }
    arr.splice(0,arr.length);
    create();
    barstyle=document.querySelectorAll('.barstyle');
    toenable();
}

function todisable(){
    bubble.disabled=true;
    sort.disabled=true;
    insertion.disabled=true;
    quick.disabled=true;
    size.disabled=true;
    newArr.disabled=true;
    speed.disabled=true;
}
function toenable(){
    bubble.disabled=false;
    sort.disabled=false;
    insertion.disabled=false;
    quick.disabled=false;
    size.disabled=false;
    newArr.disabled=false;
    speed.disabled=false;
}

