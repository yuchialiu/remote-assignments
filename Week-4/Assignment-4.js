function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(n1 + n2);
    }, delayTime);
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

async function main() {
  /* your code here, you should call delayedResultPromise here and
    get the result using async/await.*/
  await delayedResultPromise(4, 5, 3000).then(console.log);
}
main(); // result will be shown in the console after <delayTime> seconds;
