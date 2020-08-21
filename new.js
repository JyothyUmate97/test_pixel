function formValidation() {
    // Make quick references to our fields.
    var firstname = document.getElementById('firstname');
    var rollnumber =document.getElementById('rollnumber');
    var collegename=document.getElementById('college-name');

    var universityname=document.getElementById('university-name');

    var academicyear=document.getElementById('academic-year');
    var classname=document.getElementById('class-name');


    // To check empty form fields.
    if (firstname.value.length == 0) {
        document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
        firstname.focus();
        return false;
        }
           // Check each input in the order that it appears in the form.
        if (inputAlphabet(firstname, "* For your name please use alphabets only *")) {
            if (textAlphanumeric(rollnumber, "* For Roll Number please use numbers and letters *")) {
            return true;
        }
    }
        return false;
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z ]+$/;
    if (inputtext.value.match(alphaExp)) {
    return true;
    } else {
    document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
    //alert(alertMsg);
    inputtext.focus();
    return false;
    }
    }
   // Function that checks whether input text includes alphabetic and numeric characters.
   function textAlphanumeric(inputtext, alertMsg) {
    var alphaExp = /^[0-9A-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
    return true;
    } else {
    document.getElementById('p2').innerText = alertMsg; // This segment displays the validation rule for address.
    inputtext.focus();
    return false;
    }
    }

    if( collegename.value == "" ) {
        alert( "Please provide your name!" );
        college-name.focus() ;
        return false;
     }
}

function addHtmlTableRow(){
    //get table by id
    var table=document.getElementById('table');
    newRow =table.insertRow(table.length),
    cell1=newRow.insertCell(0),
    cell2=newRow.insertCell(1),
    cell3=newRow.insertCell(2),

    subject=document.getElementById("subject").value;
    outofmarks=document.getElementById("outofmarks").value;
    obtainedmarks=document.getElementById("obtainedmarks").value;

    //add values to cell
    cell1.innerHTML=subject;
    cell2.innerHTML=outofmarks;
    cell3.innerHTML=obtainedmarks;
    //call the function to set the event to the new row
    selectedRowToInput();

}

//display selected row data into input text
function selectedRowToInput(){
    var rIndex,table=document.getElementById("table");
    for(var i=1;i<table.rows.length;i++){
        table.rows[i].onclick=function()
        {
            //get selected row index
            rIndex=this.rowIndex;
            document.getElementById("subject").value=this.cells[0].innerHTML;
            document.getElementById("outofmarks").value=this.cells[1].innerHTML;
            document.getElementById("obtainedmarks").value=this.cells[2].innerHTML;
        }
    }
}
selectedRowToInput();

function editHtmlTableSelectedRow(){
    var subject=document.getElementById('subject').value;
        outofmarks=document.getElementById('outofmarks').value;
      obtainedmarks=document.getElementById('obtainedmarks').value;
    table.rows[rIndex].cells[0].innerHTML=subject;
    table.rows[rIndex].cells[0].innerHTML=outofmarks;
    table.rows[rIndex].cells[0].innerHTML=obtainedmarks;
}

function removeSelectedRow()
{
    var rIndex,table=document.getElementById("table");
    for(var i=1;i<table.rows.length;i++){
        table.rows[i].onclick=function()
        {
            //index=this.parentElement.rowIndex;
             table.deleteRow(rIndex+1);
            // console.log(index);
        }
    }
}
function btnClicked(){
    document.location.href="per.html"

}


