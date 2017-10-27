$("#pop1").on("click", function() {
   $('#imagepreview').attr('src', $('#image1').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#firstmodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("#pop2").on("click", function() {
   $('#imagepreview').attr('src', $('#image2').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#secondmodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("#pop3").on("click", function() {
   $('#imagepreview').attr('src', $('#image3').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#thirdmodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});