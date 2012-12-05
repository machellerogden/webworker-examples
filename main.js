var worker = new Worker('worker.js');
worker.onmessage = function (e) {
  console.log('message recieved from worker: ' + e.data);
  console.log('this is main. message receieved. go ahead worker.');
};
worker.postMessage('worker, do you copy');
