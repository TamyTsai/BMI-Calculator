// bmi計算
function bmi(height, weight) {
    var w = parseFloat(weight); // 把變數weight的值（HTML體重輸入框中的值）轉為有小數點的數字，再指定給 變數w
    var h = parseFloat(height) / 100; // 將公分換算為公尺

    return (w / (h*h)).toFixed(2); // 讓計算結果只顯示到小數點第二位
}
// 變數雖然定義在後面，但因為變數提昇的關係，所以這裡可以用？




// 點擊「計算按鈕」後 呼叫的函數:
// 抓取HTML元素DOM
// 呼叫bim計算函數 
// 顯示在結果區塊
function calculateBMI() {
    // var height = document.getElementById('bodyHeight');
    var height = document.querySelector('#bodyHeight').value; // 指定 HTML中id為bodyHeight輸入框 的 輸入值 給 變數height
    var weight = document.querySelector('#bodyWeight').value;
    var result = document.querySelector('#resultNumber');
    var resultTextNormal = document.querySelector('#resultTextNormal');
    var resultTextAbnormal = document.querySelector('#resultTextAbnormal');

    // console.log(bmi(height,weight));

    if ((height != '') && (weight != '')) { // 如果身高、體重輸入的值 皆 非 空字串，才顯示結果（避免顯示NaN（Not a number））
        result.innerHTML = bmi(height, weight); // 把指定給變數result的HTML元素 替換為 函數bmi所回傳的值
        if (bmi(height, weight) < 18.5){
            resultTextNormal.innerHTML = '';
            resultTextAbnormal.innerHTML = '體重過輕';
        } 
        else if (bmi(height, weight) >= 18.5 && bmi(height, weight) < 24) {
            resultTextNormal.innerHTML = '健康體位';
            resultTextAbnormal.innerHTML = '';
        }
        else if (bmi(height, weight) >= 24 && bmi(height, weight) < 27) {
            resultTextNormal.innerHTML = '';
            resultTextAbnormal.innerHTML = '過重';
        }
        else if (bmi(height, weight) >= 27 && bmi(height, weight) < 30) {
            resultTextNormal.innerHTML = '';
            resultTextAbnormal.innerHTML = '輕度肥胖';
        }
        else if (bmi(height, weight) >= 30 && bmi(height, weight) < 35) {
            resultTextNormal.innerHTML = '';
            resultTextAbnormal.innerHTML = '中度肥胖';
        }
        else {
            resultTextNormal.innerHTML = '';
            resultTextAbnormal.innerHTML = '重度肥胖';
        }
    } 
    else if ((height == '') && (weight != '')){
        alert('請輸入身高！');
    } // 如果身高為空字串 體重非空字串（沒輸入身高 有輸入體重）
    else if ((height != '') && (weight == '')){
        alert('請輸入體重！');
    } // 如果身高非空字串 體重為空字串（有輸入身高 沒輸入體重）
    else {
        alert('請輸入身高及體重！');
    } // 如果身高體重輸入的值 皆 為 空字串（身高、體重 皆未輸入）
}

// 判斷體位
// function body() {
//     if (bmi(height, weight) < 18.5) {
//         return ('體重過輕');
//     } else {
//         return ('體重正常');
//     }
// }