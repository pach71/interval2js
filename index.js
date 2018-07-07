module.exports = function(func, interval){
    if (typeof func === 'function') {
        func();
        setInterval(func, interval);
    }else{
        setInterval(func, interval);
    }
}