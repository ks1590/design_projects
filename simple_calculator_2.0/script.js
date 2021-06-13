const jsFrame = new JSFrame();

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {

  const windowName = 'calc';
  const windowExists = jsFrame.containsWindowName(windowName);

  let item = localStorage.getItem("calc")
  if (windowExists) {
    console.log(windowExists)
  } else {
    const frame = jsFrame.create({
      name: 'calc',
      // title: '電卓',
      left: 20, top: 20, width: 400, height: 645,
      movable: true,
      resizable: false,
      url: "calculator.html",
    });
    frame.show();
  }

  jsFrame.showToast({
    align: 'center', html: 'Toast displayed in the center'
  });
});