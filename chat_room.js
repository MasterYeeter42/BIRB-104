function getData() {firebase.database().ref("/").on('value',
function (snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey  =
childSnapshot.Key;
                 Room_names = childKey;
                //Start code
                function redirectToRoomName(name)
                {
                  console.log(name);
                  function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
                }
                //End come
                })})}
          getData();

function logout() 
{ 
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}