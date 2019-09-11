module.exports.init = function(ms) {
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    });
}