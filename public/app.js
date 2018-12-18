
var myApp = new Vue({
    el: "#app",
    data: {
        gamers: data.players,
        target: "index",
        name:""
    },

    methods: {
        newTag: function (id,name) {
            this.target = id;
            this.name = name;
        }
    },
    computed: {
        desiredgamer(){
            return this.gamers.find(gamer => gamer.name == this.name);
        }
    }

});


