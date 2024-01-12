let currentRowCount=document.getElementsByClassName("tableRow").length




//executed when insert button is clicked,Inserts a new row at end

function insert(){
let table=document.getElementById("table")


let newRow=table.insertRow(-1)
newRow.classList.add("tableRow")

let rowCount=currentRowCount+1
// console.log(currentRowCount)


let c1=newRow.insertCell(0)
let c2=newRow.insertCell(1)

c1.innerHTML=`Row ${rowCount} Col 1`
c2.innerHTML=`Row ${rowCount} Col 2`

currentRowCount+=1
}


//deletes Row From Start
function delStart(){
    let table=document.getElementById("table")
    table.deleteRow(0)

}

//deletes Row From End
function delEnd(){
    let table=document.getElementById("table")
    table.deleteRow(-1)

}