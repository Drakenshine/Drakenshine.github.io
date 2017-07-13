 
 // This is a prompt box which asks for a name
 // The name is then displayed in the browser (only if a name is entered)
 
 var name=prompt("Please enter your name","Enter name here");
 if (name!=null) // this means if the name is NOT empty
 {
 message="Hello " + name + "! How are you today?";
 document.write(message);
 } 
 