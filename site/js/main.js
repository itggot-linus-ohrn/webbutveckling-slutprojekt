let i = 0
let boxes = document.querySelectorAll(".start")
while(i < boxes.length){
    let box = boxes[i]
    x_pos = Math.floor(Math.random() * 80)
    y_pos = Math.floor(Math.random() * 80)
    box.style.left = x_pos+'%'
    box.style.top = y_pos+'%'
    i++;
    console.log("OMG")   
}