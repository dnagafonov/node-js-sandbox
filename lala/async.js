function pause500ms() {  
    return new Promise((res) => setTimeout(res, 500));
}

async function inSequence() {  
    pause500ms();
    pause500ms(); 
    console.log("I will be logged after 1000ms");
}
inSequence();