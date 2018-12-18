
document.getElementById("login").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);


getPosts();

function login() {

   // https://firebase.google.com/docs/auth/web/google-signin

   // Provider
   var provider = new firebase.auth.GoogleAuthProvider();

   // How to Log In

   firebase.auth().signInWithPopup(provider).then(function(){
       myApp.newTag('chat');
   }).then(function(){
       getPosts();
   });

   console.log("login");

}


function writeNewPost() {

   // https://firebase.google.com/docs/database/web/read-and-write
var textToSend = document.getElementById("textInput").value;
   // Values
   var message = {
       message: textToSend,
       name: firebase.auth().currentUser.displayName
   }

   firebase.database().ref("ssbleague-1b9b1").push(message)
   console.log(message);

   // A post entry.

   // Get a key for a new Post.

   //Write data

   console.log("write");

}


function getPosts() {
    var posts = document.getElementById("posts");
    posts.scrollTop = posts.scrollHeight;
    firebase.database().ref('ssbleague-1b9b1').on('value', function (data) {
        
        posts.innerHTML = "";



        var messages = data.val();

        for (var key in messages) {
            var text = document.createElement("div");
            var element = messages[key];
            
            document.getElementById('textInput').value = '';
            
            if (element.name == firebase.auth().currentUser.displayName) { //to target the user
               text.setAttribute("class", "owner")
           }

           if (element.name !== firebase.auth().currentUser.displayName) { //to target the guests
               text.setAttribute("class", "guest")
           };
            
            text.append(element.name + ":" + " ")
            text.append(element.message);
            posts.append(text);
            document.getElementById('textInput').value = '';
        }
        posts.scrollTop = posts.scrollHeight;
    })

   

}

/*function disapear(){

document.getElementById('textInput').value = '';
}*/