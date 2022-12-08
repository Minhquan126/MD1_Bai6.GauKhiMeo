let anhCat1 = document.getElementById('cat1')
let anhCat2 = document.getElementById('cat2')
let anhCat3 = document.getElementById('cat3')
var click1 = 0
var click2 = 1
var click3 = 2

function changeImage1(){
    click1++
if(click1 ==1){
    anhCat1.src = 'image/Gau1.png'
} else if (click1  == 2){
    anhCat1.src = 'image/Khi1.png'
} else if(click1==3) {
    anhCat1.src = 'image/Cat1.png'
    click1 = 0;
}
checkShadow();
}
function changeImage2(){
    click2++
    if (click2 == 1){
        anhCat2.src = 'image/Gau 2.png'
    } else if (click2 == 2){
        anhCat2.src = 'image/Khi 2.png'
    } else if (click2 == 3) {
        anhCat2.src = 'image/Cat 2.png'
        click2= 0
    }
    checkShadow()
}
function changeImage3(){
    click3++
    if (click3 == 1){
        anhCat3.src = 'image/Gau 3.png'
    } else if(click3 == 2){
        anhCat3.src = 'image/Khi 3.png'
    } else if(click3 == 3){
        anhCat3.src = 'image/Cat 3.png'
        click3 = 0
    }
    checkShadow()
}

function checkShadow(){
if (click1 == click2 && click2 == click3){
    anhCat1.style.boxShadow = 'red 4px 4px 9px'
    anhCat2.style.boxShadow = ' red 4px 4px 9px'
    anhCat3.style.boxShadow = 'red 4px 4px 9px'
} else {
    anhCat1.style.boxShadow = "blue 4px 4px 9px"
    anhCat2.style.boxShadow = "blue 4px 4px 9px"
    anhCat3.style.boxShadow = "blue 4px 4px 9px"
}
}