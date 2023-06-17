let cnt = 1;
function counter(cnt) {
  console.log(cnt);
  cnt += 1;
  setTimeout(() => {
    counter(cnt);
  }, 1000);
}

counter(cnt);
