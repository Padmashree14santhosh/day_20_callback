const time=1000;
let displayNum=document.getElementById("numid");
displayNum.innerText="";
function tencount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function ninecount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function eightcount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function sevencount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function sixcount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function fivecount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function fourcount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function threecount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function twocount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function onecount(callback){
    setTimeout(()=>{
        callback();
    },time);
}

function dispalymsg(callback){
    setTimeout(()=>{
        callback();
    },time);
}

tencount(()=>{
    displayNum.innerText=10;
    ninecount(()=>{
        displayNum.innerText=9;
        eightcount(()=>{
            displayNum.innerText=8;
            sevencount(()=>{
                displayNum.innerText=7;
                sixcount(()=>{
                    displayNum.innerText=6;
                    fivecount(()=>{
                        displayNum.innerText=5;
                        fourcount(()=>{
                            displayNum.innerText=4;
                            threecount(()=>{
                                displayNum.innerText=3;
                                twocount(()=>{
                                    displayNum.innerText=2;
                                    onecount(()=>{
                                        displayNum.innerText=1;
                                        dispalymsg(()=>{
                                            displayNum.innerText="Happy Independence Day";
                                        });
                                    });
                                });
                            });
                        });
                    });
                });

            });
        });
    });
});