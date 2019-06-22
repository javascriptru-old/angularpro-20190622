
const oldSetTimeout = setTimeout;
setTimeout = (callback, timer) => {
    console.log('Start');
    oldSetTimeout(() => {
        callback();
        console.log('FINISH!');
    }, timer);
}


//-----------------------------


setTimeout(_ => {
   console.log('DONE!');
}, 3000);


// obj
// obj.x = 5 
// obj.x.set(5) => obj2