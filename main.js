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
    if (index == items.length) index = 0;
        showItem();
        showDot();
    }

function prev() {
    index--;
    
    if (index == -1) index = items.length -1;
        showItem();
        showDot();
    }
//    console.log("編號:" + index);
// }

// 下一張按鈕.點擊 = 下一張按鈕的功能
nextBtn.oneclick = next;
prevtBtn.oneclick = prev;

// 顯示項目
function showItem() {
    // 迴圈執行每一張項目
    for (let i = 0; i < items.length; i++) {
        // 刪除每一個項目的 啟動樣式
        items[i].classList.remove("slider-active");
    }

    // 指定目前要顯示的項目 添加 啟動樣式
    items[index].classList.add("slider-active");
}

// 取得所有點點
var dots = document.getElementsByClassName("slider-dot");

// 顯示點點
function showDot() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("slider-dot-active");
    }

    dots[index].classList.add("slider-dot-active");
}

// 點擊點點(接收點點的編號)
function clickDot(i) {
    // 更新編號
    index = i;     
    showItem();
    showDot();
}

// 利用迴圈指定每一個點點 按下去 傳編號給 clickDot
for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        clickDot(i);
    };
}


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
    var dots = document.getElementById("slider-dots");
    dots.style["display"] = "none";
}





