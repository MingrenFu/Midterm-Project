const app = {

  initialize: function () {
    document.getElementById('submit_btn').addEventListener('click', () => {
      this.formChecker();
    });
  },
  
    formChecker: function() {
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    if (userName !== '' && email !== '' && validateEmail(email) == true && number !== '') {
      document.getElementById("submit_btn").style.display = "none";
      const element1 = document.getElementById("loading_animation");
      element1.classList.add("loader");
      setTimeout(function(){ document.getElementById("post_submit").classList.add("submit_message"); element1.classList.remove("loader"); }, 3000);
      let userNameInput = document.getElementById("username");
      let emailInput = document.getElementById("email");
      let emailLabel = document.getElementById("emailNote");
      firstNameBox.classList.remove("redFormInput");
      lastNameBox.classList.remove("redFormInput");
      emailBox.classList.remove("redFormInput");
      emailLabel.classList.remove("emailErrorLabel");
      console.log ("Valid Content");
      setTimeout(function(){ window.location.replace("index.html"); }, 10000);
    }
    else {
      const element1 = document.getElementById("loading_animation");
      element1.classList.remove("loader");
      if (userName == '') {
        let firstNameBox = document.getElementById("firstName");
        firstNameBox.classList.add("redFormInput");
      }
      if (userName !== '') {
        let firstNameBox = document.getElementById("firstName");
        firstNameBox.classList.remove("redFormInput");
      }
      if (email == '') {
        let emailBox = document.getElementById("email");
        emailBox.classList.add("redFormInput");
      }
      if (email !== '') {
        if (validateEmail(email) == false) {
          let emailLabel = document.getElementById("emailNote");
          emailLabel.classList.add("emailErrorLabel");
          let emailBox = document.getElementById("email");
          emailBox.classList.add("redFormInput");
        } else {
          let emailBox = document.getElementById("email");
          emailBox.classList.remove("redFormInput");
          emailLabel.classList.remove("emailErrorLabel");
        }
      }
      if (number == '') {
        let numberBox = document.getElementById("number").value;
        numberBox.classList.add("redFormInput");
      }
      if (number !== '') {
        let numberBox = document.getElementById("number").value;
        numberBox.classList.remove("redFormInput");
      }
    }
  }

}
