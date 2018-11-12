new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        gameRunning: false,
        log: []
    },
    watch: {
        playerLife: function() {
            if(this.playerLife <= 0) {
                alert('game over, boy!');
                this.reset();
            }
        },
        monsterLife: function() {
            if(this.monsterLife <= 0) {
                alert('You won!');
                this.reset();
            }
        }
    },
    methods: {
        attack: function () {
            let damage = this.calculeDamage(10, 3);
            this.monsterLife -= damage;
            this.log.unshift('you deal ' + damage + ' to monster.');
            this.monsterAttack();
        },
        specialAttack: function() {
            let damage = this.calculeDamage(17, 6);
            this.monsterLife -= damage;
            this.log.unshift('you deal ' + damage + ' to monster.');
            this.monsterAttack();
        },
        monsterAttack: function() {
            let damage = this.calculeDamage(12, 5);
            this.playerLife -= damage;
            this.log.unshift('the monster deal ' + damage + ' to you.');
        },
        heal: function() {
            if(this.playerLife == 100)
                alert('you are full life.');
            else {
                this.playerLife += 9;
                this.log.unshift('you heal ' + 9 + ' of life.');            
            }
            this.monsterAttack();
        },
        calculeDamage: function(max, min) {
            return Math.floor(Math.max(Math.random() * max, min));
        },
        reset: function() {
            this.gameRunning = false;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.log = [];
        }
    }
});