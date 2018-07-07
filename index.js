module.exports = function(func, interval){
    if (typeof func === 'function')
        func();
    return setInterval(func, interval);
}