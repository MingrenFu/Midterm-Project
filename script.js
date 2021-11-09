const app = {

  initialize: function () {
    document.getElementById('submit_btn').addEventListener('click', () => {
      this.formChecker();
    });
  },
    
   postContent: function(){
     document.getElementById('postButton').addEventListener('click', () => {
     this.addWindow();
     });
   },
  
    addWindow: function() {
      let mainSection = document.getElementById("post_section");
      mainSection.classList.add("post_message");
    }
  
    formChecker: function() {
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let comment = document.getElementById("comment").value;
    if (userName !== '' && email !== '' && validateEmail(email) == true && number !== '' && comment !== '') {
      document.getElementById("submit_btn").style.display = "none";
      const element1 = document.getElementById("loading_animation");
      element1.classList.add("loader");
      setTimeout(function(){ document.getElementById("post_submit").classList.add("submit_message"); element1.classList.remove("loader"); }, 3000);
      let userNameInput = document.getElementById("username");
      let emailInput = document.getElementById("email");
      let emailLabel = document.getElementById("emailNote");
      let numberInput = document.getElementById("number");
      let commentInput = document.getElementById("comment");
      userNameInput.classList.remove("redFormInput");
      emailInput.classList.remove("redFormInput");
      emailLabel.classList.remove("emailErrorLabel");
      numberInput.classList.remove("redFormInput");
      commentInput.classList.remove("redFormInput");
      console.log ("Valid Content");
      setTimeout(function(){ window.location.replace("index.html"); }, 10000);
    }
    else {
      const element1 = document.getElementById("loading_animation");
      element1.classList.remove("loader");
      if (userName == '') {
        let userNameInput = document.getElementById("username");
        userNameInput.classList.add("redFormInput");
      }
      if (userName !== '') {
        let userNameInput = document.getElementById("username");
        userNameInput.classList.remove("redFormInput");
      }
      if (email == '') {
        let emailInput = document.getElementById("email");
        emailInput.classList.add("redFormInput");
      }
      if (email !== '') {
        if (validateEmail(email) == false) {
          let emailLabel = document.getElementById("emailNote");
          emailLabel.classList.add("emailErrorLabel");
          let emailInput = document.getElementById("email");
          emailInput.classList.add("redFormInput");
        } else {
          let emailInput = document.getElementById("email");
          emailInput.classList.remove("redFormInput");
          emailLabel.classList.remove("emailErrorLabel");
        }
      }
      if (number == '') {
        let numberInput = document.getElementById("number");
        numberInput.classList.add("redFormInput");
      }
      if (number !== '') {
        let numberInput = document.getElementById("number");
        numberInput.classList.remove("redFormInput");
      }
      if (comment == '') {
        let commentInput = document.getElementById("comment");
        commentInput.classList.add("redFormInput");
      }
      if (comment !== '') {
        let commentInput = document.getElementById("comment");
        commentInput.classList.remove("redFormInput");
      }
    }
  }

}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
