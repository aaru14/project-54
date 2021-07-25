var number=document.getElementById("length").value
function calculate(){
 var number=document.getElementById("length").value
 var area=number*number
 var perimeter=4*number
 document.getElementById("label_area").innerHTML=area
    document.getElementById("label_perimeter").innerHTML=perimeter
}