
function validateName() {
  let x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateEmail() {
  let x = document.forms["myForm"]["mail"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}

function validateMessage() {
  let x = document.forms["myForm"]["msg"].value;
  if (x == "") {
    alert("Message must be filled out");
    return false;
  }
}



function ValidateCheckedBox()  
{  
    var checkboxes = document.getElementsByName("recruiter");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 1)  
    {  
        alert("You can't select more than one choice!");  
        return false;  
    }  
}  








const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById("firstname");
  let valid = true;

  if (!firstNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
}






















