//select the form from the DOM

const form = document.getElementById("profile-form");
// const form = document.querySelector("#profile-form"); or this instead

//I need something to listen to the submit button

form.addEventListener(
  "submit",
  handleSubmit //submit here, not click
); //I do not use brackets because I am not calling the function here, I want the function to run when the submit even happens

//don't use a CBF, make a separate function to handle the submit event

function handleSubmit(event) {
  //I need to stop the default behaviour of a form
  event.preventDefault(); //this means the same as the "submit event" but have to use a parameter passed through the function to do it isntead
  //I need to make a template object to contain my form data
  const formData = new FormData(form); //used form const as a reference tomake the template using new
  //I need to give the formData object the actual form data
  //there are two ways of doing this
  //anonymous functions don't have the call feature or a name

  const formValues = Object.fromEntries(formData); //builds the object for me and is clever enough to make the input name the idenntifying key
  console.log(formValues);
  //i need to POST the formValues to the server
  //our fetch has an object second parameter which is an object sending to specify the reason why we are fetching
  fetch("http://localhost:8080/userdata", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}
