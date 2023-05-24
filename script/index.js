window.onload = () => {
    
    document.addEventListener('keydown', (event) => {
        if(event.code === "KeyR"){
            const audio = new Audio("/images/trex.mp3");
            audio.play();
        }
    });
}