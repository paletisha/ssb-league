console.log("dasjhdka");
var myApp = new Vue({
    el:"#app",
    data: {
        target: "index"
        
    },
    
   methods: {
    newTag: function(id) {
        this.target = id; 
    }
}
    
});

