new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    italic: {
      fontStyle: 'italic'
    },
    aqua: { 
      color: 'aquamarine'
    },
    userClass: '',
    myClass: {
      backgroundColor: '',
      width: 100 + 'px',
      height: 100 + 'px'
    },
    attach: false,
    barStyle: {
      backgroundColor: 'white',
      border: 1 + 'px solid slateblue',
      width: ''
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(() => {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function() {
      var vm = this;
      var count = 0;
      this.barStyle.width = '0px';
      this.barStyle.backgroundColor = 'red';
      setInterval(function() {
        count += 20;
        vm.barStyle.width = count + 'px !important';
      }, 500);
    }
  }
});
