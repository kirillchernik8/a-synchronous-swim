 (function () {
   const serverUrl = 'http://127.0.0.1:3000';

   function getDirection() {
     $.ajax({
       url: serverUrl,
       method: 'GET',
       success: (direction) => SwimTeam.move(direction), // once we got a response with data, we can use that data to move the team
       complete: () => setTimeout(getDirection, 100)// prevents stopping execution that could have been caused by success malfunc
     })
   }
   getDirection();
 })();