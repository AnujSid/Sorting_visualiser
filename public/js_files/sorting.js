async function Sort(){
    for(let i=0;i<r;i++){
        let k=i;
        for(let j=i+1;j<r;j++){
            let el1H=barstyle[k].offsetHeight;
            let el2H=barstyle[j].offsetHeight;
            if(el1H>el2H){
                k=j;
            }
        }
        let el1=barstyle[i];
        let el2=barstyle[k];
        el1.style.background="red";
        el2.style.background="red";
        await new Promise(resolve => setTimeout(() => {resolve()},1000-sp));
        swap(el1,el2);
        el1.style.background="yellow";
        el2.style.background="yellow";
        barstyle[i].style.background="green";
    } 
    toenable();  
}