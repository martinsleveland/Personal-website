document.querySelector(".dots-btn").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });

function saveEmail(){
    var email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    console.log(email);
    var name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    console.log(name);
    var message = document.getElementById("message").value;
    localStorage.setItem("message", message);
    console.log(message);
  
    obj = [email, name, message];
  
    firebase.firestore().collection("saveEmail").add(obj).then(function(docRef) {
      console.log("Email message written with ID: ", docRef.id);
    }).catch(function(error) {
      console.error("Error adding email message: ", error);
    })
  }
