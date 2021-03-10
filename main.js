// 當前輪播圖的編號，從零開始
var index = 0;
// 下一張按紐與上一張按鈕
var nextBtn = document.querySelector("#slider-next");
var prevBtn = document.querySelector("#slider-prev");

// 取得所有輪播項目
var items = document.getElementsByName("xlider-item")

// 輸出輪播項目的數量
console.log("輪播項目的數量：" + items.length);

// 下一張與上一站按鈕的功能
function next() {
   index++;
    // 如果編號是 項目的數量 就將編號改為 零
    if (index == items.length) {
        index = 0;
    }
    
   console.log("編號:" + index);
}

// 下一張按鈕.點擊 = 下一張按鈕的功能
nextBtn.cneclick = next;
nextBtn.




// 自動播放
var box = document.getElementById("slider-box");
var interval = box.getAttribute("data-marys-interval")

function autoPlay() {
    next();
}

//計時器 
var timer = setInterval(autoPlay, interval);

// 重新設定計時器
function resetTimer(){
    // 清除計時器
    clearInterval(timer);
    //  重新設定間格
    timer = setInterval(auto, interval)
}

var showdots = box.getAttribute("data-marys-showdots");
if (showdots == "false") {
    var dots = document.getElementById("slider-dots")
}





