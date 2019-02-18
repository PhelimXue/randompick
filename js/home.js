var myObject = new Vue({
    el: '#app',
    data: {
        intervalId: {n1:null,n2:null,n3:null,n4:null,n5:null,n6:null},
        randomNum: {n1:'',n2:'',n3:'',n4:'',n5:'',n6:''}
    },
    created: function () {
        window.addEventListener('keydown', this.onkey)
      },
    methods: {
        onkey(event){
            console.log(event.keyCode);
            if(event.keyCode === 49) 
                random('n1');

            if(event.keyCode === 50) 
                random('n2');

            if(event.keyCode === 51) 
                random('n3');

            if(event.keyCode === 52) 
                random('n4');

            if(event.keyCode === 53) 
                random('n5');

            if(event.keyCode === 54) 
                random('n6');
        }
    }
  })


  function random(key) {
    if(myObject.intervalId[key] != null)
        return;

    myObject.intervalId[key] = setInterval(() => {
        myObject.randomNum[key] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      },50)
      
      setTimeout(function() {
        clearInterval(myObject.intervalId[key]);
        myObject.intervalId[key] = null;
    }, 3600);
  }

 