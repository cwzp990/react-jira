const test = () => {
  let num = 0;

  const effect = () => {
    num += 1;
    const message = "现在的num值," + num;
    return function unmount() {
      console.log(message);
    };
  };

  return effect
};

// 执行test 返回effect函数
const add = test()
// 执行effect 返回引用message的unmount函数
const unmount = add()
// 再一次执行effect 返回引用了新的message的unmount函数
add()
add()
add()
unmount()