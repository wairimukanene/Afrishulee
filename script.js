function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        port:"2525",
        // smtp.UseDefaultCredentials = false;
        Username : "mercykanene254@gmail.com",
        Password : "8ED2B62FA81E28969D9FA64CAC0813114A81",
        To : 'mercykanene254@gmail.com',
        From : 'mercykanene254@gmail.com', 

        ReplyFrom : document.getElementById("email").value,
        // From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "name: " + document.getElementById("name").value
        + "<br> email: "+document.getElementById("email").value
        + "<br> subject: "+document.getElementById("subject").value

    }).then(
      message => alert(message)
    );

}