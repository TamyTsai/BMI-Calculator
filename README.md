## 簡介
- [Demo Link](https://tamytsai.github.io/BMI-Calculator/)
- 本專案為一台BMI計算機
- 以HTML、CSS及JavaScript撰寫，為一頁式靜態網頁
- 其中應用Normalize解決不同瀏覽器預設CSS樣式不同的問題
- 運用Flexbox操縱部分元素排版
- 使用MathJax以顯示BMI計算公式


## 功能
- 輸入身高、體重（可有小數點），按下計算按鈕後，右邊將出現BMI計算結果，並根據不同計算結果，顯示不同體位判斷結果
- 體位正常時，為黑字；體位異常時，為紅字
- 未輸入身高或體重時，將跳出對應提醒視窗

## 畫面
### 初始畫面
![截圖 2024-05-09 專案畫面](https://github.com/TamyTsai/BMI-Calculator/assets/97825677/2cab3338-1676-4f40-9f96-2b2bbd6ef32a)
### 有輸入框未輸入時
![截圖 2024-05-09 未輸入體重](https://github.com/TamyTsai/BMI-Calculator/assets/97825677/1cf23ff3-6ded-46ed-b5a9-786d38482c3a)
### 體位正常
![截圖 2024-05-09 健康體位](https://github.com/TamyTsai/BMI-Calculator/assets/97825677/8868cdae-8364-427c-a63c-78a96caf144d)
### 體位異常
![截圖 2024-05-09 異常體位](https://github.com/TamyTsai/BMI-Calculator/assets/97825677/ba9a832a-86fc-4c52-8ff9-65fa0f24ab38)


## 安裝
### 取得專案
```bash
git clone https://github.com/TamyTsai/BMI-Calculator.git
```
### 移動到專案內
```bash
cd BMI-Calculator
```

## 資料夾及檔案說明
- scripts - JS檔案放置處
  - script.js - 頁面JS檔案，負責網頁功能
- styles - 樣式放置處
  -   normalize.css - normalize檔案
  -   style.css - 頁面樣式檔案
- index.html - 頁面HTML檔

## 專案技術
- HTML
- CSS
  - Normalize v8.0.1
  - FlexBox
- JavaScript
- MathJax v3.2.1
