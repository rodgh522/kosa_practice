function run(){
    return new Promise(resolve=> {
        setTimeout(()=> {
            console.log('run Done');
            resolve();
        }, 1000);
    });
}

async function playRun(){
    await run();
    await run();
    console.log('Done');
    return 'result';
}

playRun().then(a=> console.log(a));
