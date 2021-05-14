async function bubbleSort(){
    for(let i=0;i<r-1;i++){
        for(let j=0;j<r-1-i;j++){
            let el1=barstyle[j];
            let el2=barstyle[j+1];
            if(el1.offsetHeight>el2.offsetHeight){
                el1.style.background="red";
                el2.style.background="red";
                await new Promise(resolve => setTimeout(() => {resolve()},1000-sp));
                swap(el1,el2);
                el1.style.background="yellow";
                el2.style.background="yellow";
            }
        }
        barstyle[r-1-i].style.background="green";
    }
    barstyle[0].style.background="green";
    toenable();
}

