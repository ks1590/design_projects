async function f() {
  let test = new Promise((resolve, reject) => {
    setTimeout(() => resolve('処理終了'), 5000)
  });

  let result = await test;

  console.log(result);
}

f();