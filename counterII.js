
var createCounter = function(init) {
    let n=init;
     obj={
        increment(){
           init+=1;
            return init;
        },
        decrement(){
           return init-=1;
            
        },
        reset(){
          return  init=n;
             
        }
    }
    return obj;
};

