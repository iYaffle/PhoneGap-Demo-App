   $(document).ready(function () {
       $.ajax({
           url: "menu.html",
           success: function (result) {
               $("#page").prepend(result);
               $("#menu").mmenu();
           }
       });

       FastClick.attach(document.body);
   });