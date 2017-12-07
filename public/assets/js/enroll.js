
// Capture Button Click
   $("#submit-form").on("click", function(event) {
     event.preventDefault();
    //  Capture Parents Info
     var firstNparent = $("#pfirst").val().trim();
     var lastNparent = $("#plast").val().trim();
     var maleParent = $("#pmale-btn").val().trim();
     var femaleParent = $("#pfemale-btn").val().trim();
     var email = $("#email-input").val().trim();
     var password = $("#password-input").val().trim();
     var confirm = $("#passwordc-input").val().trim();
     var phone = $("#phone-input").val().trim();
     // Capture Childs Inputs and store them into variables
     var firstName = $("#first").val().trim();
     var lastName = $("#last").val().trim();
     var male = $("#male-btn").val().trim();
     var female = $("#female-btn").val().trim();
     var birthday = $("#bday").val().trim();
     var agree = $("#agreed").val().trim();
     // Console log each of the user inputs to confirm we are receiving them
     console.log(firstNparent);
     console.log(lastNparent);
     console.log(maleParent);
     console.log(femaleParent);
     // Output all of the new information into the relevant HTML sections
     $("#name-display")registered.html(firstNparent);
     $("#email-display")registered.html(lastNparent);
     $("#age-display")registered.html(maleParent);
     $("#comment-display")registered.html(femaleParent);
   });
