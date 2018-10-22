new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            storeKd: function(event) {
                this.value = event.target.value;
            },
            alertMe: function() {
                alert("a click occurred");
            }
        }
    });