let currentRowCount;
//executed when insert button is clicked,Inserts a new row at end
function insert(){
let table=document.getElementById("table")


let newRow=table.insertRow(-1)
newRow.classList.add("tableRow")

let rowCount=document.getElementsByClassName("tableRow").length
currentRowCount=rowCount
// console.log(currentRowCount)


let c1=newRow.insertCell(0)
let c2=newRow.insertCell(1)

c1.innerHTML=`Row ${currentRowCount} Col 1`
c2.innerHTML=`Row ${currentRowCount} Col 2`

}