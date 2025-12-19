const inputEl = document.getElementById("input")
const sizeEl = document.getElementById("size")
const generateEl = document.getElementById("generate")
const qrcode = document.getElementById("qrcode")
const download = document.getElementById("download")

let qr;

function generate(){
   let input = inputEl.value.trim()
   let size = parseInt(sizeEl.value)

    if(!input){
        alert("Enter something!")
    } else {
        qrcode.innerHTML = ""

        qr = new QRCode(qrcode, {
            text: input,
            width: size,
            height: size
        })
        download.style.display = "block"
    }
}

generateEl.addEventListener("click", generate)

download.addEventListener("click", ()=>{

    const canvas = qrcode.querySelector("canvas")
    
    if(!canvas){
        alert("QR code not found")
        return
    }
    const pngimage = canvas.toDataURL()

    let link = document.createElement("a")
    link.href = pngimage
    link.download = "tyob.png"
    link.click()
})
    