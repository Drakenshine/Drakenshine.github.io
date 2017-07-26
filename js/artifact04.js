function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validFirstName = false;
 var validLastName = false;
 var validPhoneNumber = false;
 var validAddress = false;
 var validCity = false;
 var validCountry = false;
 var validZip = false;
 var validEmail = false;
 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;
  
  
  
 var errorMessages ="";  // All the error messages are going to stay in this variable
 
 /*********** VALIDATES FIRSTNAME ******** */
 if (myContact.firstname.value==null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >20 ||
 !myContact.firstname.value.match(letters))
 errorMessages += "<p>The Firstname must be less than 20 characters and it is required. Only letters and numbers are accepted.</p>";
 else
 validFirstName = true; 
   
     /*********** VALIDATES LASTNAME ******** */
 if (myContact.lastname.value==null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >50 ||
 !myContact.lastname.value.match(letters))
 errorMessages += "<p>The Lastname must be less than 50 characters and it is required. Only letters and numbers are accepted.</p>";
 else
 validLastName = true; 
 
    /************ VALIDATES EMAIL************/
  
  //function validateEmail() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length)
        alert("Not a valid e-mail address");
      
      else
        validEmail = true;
        //return false; 
 
     /*********** VALIDATES PHONE NUMBER ******** */
 if (myContact.phone.value==null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15 ||
 !myContact.phone.value.match(numbers))
 errorMessages += "<p>The Phone Nnumber must be less than 15 characters and it is required.  Only numbers are accepted.</p>";
 else
 validPhoneNumber = true; 
 
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
 if (myContact.username.value.length > 12 || 
     myContact.username.value===null || 
     myContact.username.value==="")
    errorMessages += "<p>The Username must be less than 12 characters and it is required.</p>";
 else 
 validUsername =true;

  
 /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value==null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The Password must be less than 7 characters and it is required.</p>";
 else
 validUserPassword = true; 
  


      /*********** VALIDATES ADDRESS ******** */
 if (myContact.address.value==null ||
 myContact.address.value=== "" )
 errorMessages += "<p>The Address field is required.</p>";
 else
 validAddress = true; 
  
  //||!myContact.address.value.match(numbers)
  
       /*********** VALIDATES CITY ******** */
 if (myContact.city.value==null ||
 myContact.city.value=== "" ||
 myContact.city.value.length >15 ||
 !myContact.city.value.match(letters))
 errorMessages += "<p>The City field is required.  Only numbers are accepted.</p>";
 else
 validCity = true; 
  
       /*********** VALIDATES COUNTRY ******** */
 if (myContact.countries.value==null ||
 myContact.countries.value=== "")
 errorMessages += "<p>Select a Country as it is required.</p>";
 else
 validCountry = true; 
     
      //myContact.countries.value.length >15 ||
 //!myContact.countries.value.match(letters))
  
       /*********** VALIDATES ZIP CODE ******** */
 if (myContact.zipcode.value==null ||
 myContact.zipcode.value=== "" ||
 myContact.zipcode.value.length >5 ||
 myContact.countries.value==="United States" &&
 myContact.zipcode.value.match(letters))
 errorMessages += "<p>The Zip Code must be less than 5 characters if in the USA and it is required.  Only numbers are accepted for USA Zip Codes only.</p>";
 else
 validZip = true; 
   
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && validFirstName && validLastName && 
 validPhoneNumber && validCity && validAddress && validCountry && validZip && validEmail) ;
}

    

  