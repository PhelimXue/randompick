var myObject = new Vue({
    el: '#app',
    data: {
        intervalId1: null,
        intervalId2: null,
        intervalId3: null,
        intervalId4: null,
        intervalId5: null,
        intervalId6: null,
        message: 'Hello Vue!', 
        randomNum1: '', 
        randomNum2: '', 
        randomNum3: '', 
        randomNum4: '', 
        randomNum5: '', 
        randomNum6: ''}
  })
  
  function random1(){
    random(this.intervalId1);
  }

  function random(intervalId) {
    if(intervalId != null ) return;
    intervalId = setInterval(() => {
        myObject.randomNum1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      },50)
      setTimeout(function() {
        clearInterval(intervalId)
        //當我清除定時器之後，重新讓intervalId為null
        intervalId = null;
    }, 3600);
  }

 