let currentRowCount = document.getElementsByClassName("tableRow").length




//executed when insert button is clicked,Inserts a new row at end

function insert() {
    let table = document.getElementById("table")


    let newRow = table.insertRow(-1)
    newRow.classList.add("tableRow")

    let rowCount = currentRowCount + 1
    // console.log(currentRowCount)


    let c1 = newRow.insertCell(0)
    let c2 = newRow.insertCell(1)

    c1.innerHTML = `Row ${rowCount} Col 1`
    c2.innerHTML = `Row ${rowCount} Col 2`

    currentRowCount += 1




    //code to show a messagethat new  row is inserted and button becomes disabled until the message box is disappered
    let messageBox = document.createElement("div")
    messageBox.innerHTML = "<small>✅New Row Inserted</small>"
    messageBox.style.color = "red"
    document.getElementById("insert").disabled = true
    document.body.appendChild(messageBox)

    setTimeout(() => {
        messageBox.remove()
        document.getElementById("insert").disabled = false

    }, 1000)



}


//deletes Row From Start
function delStart() {


    //code to check if no more rows exist

    let remainingRows=document.getElementsByClassName("tableRow").length
    if(remainingRows<=0){
        let messageBox = document.createElement("div")
        messageBox.innerHTML = "<small>❌No more Rows to Delete</small>"
        messageBox.style.color = "red"
        document.getElementById("delStart").disabled = true
        document.body.appendChild(messageBox)
    
        setTimeout(() => {
            messageBox.remove()
            document.getElementById("delStart").disabled = false
    
        }, 1000)


        return
    }






    let table = document.getElementById("table")
    table.deleteRow(0)


    //messageBox
    let messageBox = document.createElement("div")
    messageBox.innerHTML = "<small>⚠️Row Deleted From Start</small>"
    messageBox.style.color = "red"
    document.getElementById("delStart").disabled = true
    document.body.appendChild(messageBox)

    setTimeout(() => {
        messageBox.remove()
        document.getElementById("delStart").disabled = false

    }, 1000)

}

//deletes Row From End
function delEnd() {

    //code to check if no more rows exist





    let table = document.getElementById("table")
    table.deleteRow(-1)


    let messageBox = document.createElement("div")
    messageBox.innerHTML = "<small>⚠️Row Deleted From End</small>"
    messageBox.style.color = "red"
    document.getElementById("delEnd").disabled = true
    document.body.appendChild(messageBox)

    setTimeout(() => {
        messageBox.remove()
        document.getElementById("delEnd").disabled = false

    }, 1000)

}