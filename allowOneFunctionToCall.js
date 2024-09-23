var once = function(fn) {
    let callvar=false;
    return function(...args){
        if(callvar){
            return undefined;
        }
        callvar = true;
        return fn(...args);
    }
};
