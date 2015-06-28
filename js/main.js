   $(document).ready(function() {
       $.ajax({
           url: "menu.html",
           success: function(result) {
               $("#page").prepend(result);

               $("#menu").mmenu({
                   "header": {
                       "title": "PhoneGap Demo Menu",
                       "add": true,
                       "update": true
                   }
               });
           }
       });

       FastClick.attach(document.body);
   });