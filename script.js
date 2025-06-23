const qrText = document.getElementById("qr-text")
const sizes = document.getElementById("sizes")
const generateBtn = document.getElementById("generate")
const downloadBtn = document.getElementById("download")

const qrContainer = document.querySelector(".qr-body")

let size = sizes.value;


generateBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    isEmptyInput();
    generateQRCode();
});

sizes.addEventListener("change", (e)=>{
    size = e.target.value;
    isEmptyInput();
    generateQRCode();
})

function isEmptyInput(){
    qrText.value.length>0 ? generateQRCode:alert("Please Enter the Text or URL to generate QR code");
}
function generateQRCode(){
    qrContainer.innerHTML = ""
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark: "#000",
    });
}

downloadBtn.addEventListener("click", ()=>{
    let img = document.querySelector(".qr-body img");
    if(img !== null){
        let imgAtrr = img.getAttribute("src");
        downloadBtn.setAttribute("href", imgAtrr)
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`)
    }
})