export const filteredList = {
    data: function() {
        return {
            fruits: ['strawberry', 'mango', 'melon', 'bluebarry'],
            filterInput: ''
        }
    },
    computed: {
        filteredFruits: function() {
            return this.fruits.filter((el) => {
                return el.match(this.filterInput);
            });
        }
    },
    created: function() {
        console.log('mixin log');
    }
}