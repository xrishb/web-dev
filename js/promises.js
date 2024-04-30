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
    // some async operation going on
    const x = "gfg";
    const y = "gfg";

    if(x == y) {
        // process the data
        resolve();
    } else {
        // reject the promise
        reject();
    }
});
promise.
    // handle the successful operation
    then(function(){
        console.log('Success');
    }).
    // handle errors
    catch(function(){
        console.log('some error came');
    });

/**
 * .then() method is called when the promise is resolved or rejected, it takes data from promise and further executes it.
 * catch() method is used when the promise is rejected or some error has occured in execution.
 * 
 * 
 * pretty useful for :
 * handling HTTP requests
 * Timers and Delays
 * File operation
 * DataBase operations
 * Animation and UI operations
 * Fetching remote resources.
 */