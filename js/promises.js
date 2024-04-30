/**
 * a promise is a proxy for the value that is not known at the moment of when promise is created.
 * a promise is made up of these:
 * pending: initial, to be fulfilled or rejected.
 * fulfilled: meaning that operation was completed sucessfully.
 * rejected: operation was failed.  
 * 
 * syntax:
 * let promise = new Promise(function(resolve, reject)) {
 *      some code;
 * };
 * 
 * Promise constructor takes only one argument, which is a callback function.
 * callback function only takes 2 args which are Resolve and Reject.
 * 
 * four states of promise:
 * fulfilled: Action related to the promise succeeded
 * rejected: Action related to the promise failed
 * pending: Promise is still pending i.e. not fulfilled or rejected yet
 * settled: Promise has been fulfilled or rejected.
 * 
 * 
*/

let promise = new Promise(function(resolve, reject) {
    const x = "gfg";
    const y = "gfg";

    if(x == y) {
        resolve();
    } else {
        reject();
    }
});
promise.
    then(function(){
        console.log('Success');
    }).
    catch(function(){
        console.log('some error came');
    });