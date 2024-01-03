let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");


// function generateQR(){
//     if(qrtext.value.length > 0){
//     qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
//     imgbox.classList.add("show-img");
//     } else{
//         qrtext.classList.add("error");
//         setTimeout(()=>{
//             qrtext.classList.remove("error");
//         },1000);
//     }
    
// }
function generateQR() {
    if (qrtext.value.length > 0) {
        // If the input text is not empty
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgbox.classList.add("show-img");  // Show the image box
    } else {
        // If the input text is empty
        qrtext.classList.add("error");  // Add "error" class to the input text element
        setTimeout(() => {
            qrtext.classList.remove("error");  // Remove "error" class after 1000 milliseconds (1 second)
        }, 1000);
    }
}
