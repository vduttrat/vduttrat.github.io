const myname = document.querySelector("#me");

myname.addEventListener('mouseover', (ev) => {
    console.log(ev);
    console.log(ev.target);
    const word="Virottam Dutt Raturi";
    let it = word.length;
    let r = -1;
    if (myname.textContent.length==word.length){
         const int = setInterval(function() {
        myname.innerHTML = word.slice(0,it);
        if (it==1 && r==-1){
                r=1;
        }
        else if (it<=word.length){
            it+=r;
        }
        else {
            it = word.length;
            clearInterval(int);
        }
        }, 100)
    }
})
