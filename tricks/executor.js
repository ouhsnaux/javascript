const tasks = [];
let done = true;
const addTask = async (func, wait) => {
  tasks.push({ func, wait });
  if (done) {
    done = false;
    for await (const d of tasks) {
      console.log(d);
    }
    done = true;
  }
};
tasks[Symbol.asyncIterator] = function () {
  return {
    next() {
      if (tasks.length > 0) {
        const { func, wait } = tasks.shift();
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ value: func(), done: false });
          }, wait);
        });
      } else {
        return { done: true };
      }
    },
  };
};

// 添加并执行任务
const now = Date.now();
const showTime = () => {
  console.log(Date.now() - now);
};
addTask(showTime, 1000);
addTask(showTime, 2000);
addTask(showTime, 3000);
addTask(showTime, 4000);
