async function insertionSort(){
    for(let i=1;i<r;i++){
        for(let j=i;j>0;j--){
            let el1=barstyle[j-1];
            let el2=barstyle[j];
            if(el1.offsetHeight>el2.offsetHeight){
                el1.style.background="red";
                el2.style.background="red";
                await new Promise(resolve => setTimeout(() => {resolve()},1000-sp));
                swap(el1,el2);
                el1.style.background="green";
                el2.style.background="green";
            }
        }
    }
    toenable();
}

