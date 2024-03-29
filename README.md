這是從這個模板改的[MoloxBlogTheme](https://github.com/BaseMax/MoloxBlogTheme)  
由於維護問題，所以我轉而使用hugo生成網站，之後不確定會不會繼續更新和研究，這算是一個html跟css練習  
這個網站有製作手機版適配，不過在手機板下頭像會出現被壓縮的情況   




目前網站的圖片
![網站圖片](./image/demoimg/webmemo3.png)
已修改
![網站圖片](/image/demoimg/webdemo2.png)
已修改
![網站圖片](/image/demoimg/webdemo.png)
現在產文困難

----
### 去做
- [x] 標籤頁面 
- [x] 404頁面
- [ ] 網頁搜尋(已擱置)  
- [ ] 手機版網頁做完
- [x] 全站點黑暗模式白晝模式切換
- [ ] 解決手機瀏覽頁面被壓縮的bug  

------
### 更新and工作日誌

##### 2023/3/8:
* 把原本整體靠左的網頁全部往中間移動一點  
  
##### 2023/3/9:  
* 手機板在瀏覽的時候頭像會被壓縮，推測能是被旁邊的文字壓縮
* 在做post頁面的黑暗模式時候發現黑暗模式按鈕會跟hackmd自帶的小工具衝突，嘗試過把hackmd的小工具去除跟換邊，但是發現hackmd的字體是灰色，切了黑暗模式會看不清因此貼文頁面黑暗模式擱置，要想一個最高效的發布貼文的方法，才不用一直去東改西改  
* 網頁搜尋目前還在研究，不過當務之急是要先解決手機瀏覽頭像被壓縮的問題
修正了有些頁面沒有網頁圖標的問題
* 把404頁面做出來了，不過在貼文裡面404特效出不來
     
   
   
##### 2023/3/10  
* 修改了網頁排版，把自介頁面變成主頁，一點開網站會是自介然後把所有貼文的回到主頁改成回到上一頁，因為如果是回到主頁人機互動會不太好，原本瀏覽的標籤可能要重新找，所以換成上一頁
* 新增了"link page"裡面有社交連結跟友站的連結
* 新增了"關於我"頁面並寫了一點東西
* 修正了一些頁面黑暗模式切換按鈕沒有emoji的小bug
* 修復linux標籤頁面的貼文位置跑掉
* 把Windows11安裝跳過連接網路那篇的排版改掉，棄用在hackmd寫好轉html的方法，直接用html就可以了，目前理論上可以實現全站黑暗跟白晝模式切換
* 把404頁面修改一下，解決了瀏覽404頁面時整個網站都沒辦法按的問題
* 晚餐吃牛肉炒飯
* 修改了404頁面如下圖
![](./image/demoimg/4041.png)
* 新增了程式碼區塊，使用了[prismjs](https://prismjs.com/)提供的css以及js腳本，效果如下，解決了在黑暗模式下程式碼區塊不清楚或是看不到的情況
![](image/demoimg/codeblockview.png)  

##### 2023/3/11
* 新增評論系統
* 修復評論系統無法驗證的錯誤，後面經過排除發現是因為文章含有中文字，gitalk會把中文字轉換編碼變成ID，但是gitalk限制編碼不可以超過50字，所以把文章名稱改成英文即可
* 基於安全性把某些js腳本加密，且隱藏起來  
* 修正了在筆記頁面點開windows11安裝跳過連接網路的文章時會導向404頁面
* 目前還是未能解決手機瀏覽網頁時頭像被擠壓的問題，目前想到改善的方案是讓網頁左邊固定右邊可以自由縮放，讓第一個被壓縮的是右邊的空間不是左邊的
* 目前已經實現全站可以切換黑暗模式，使用的是[Darkmode.Js提供的腳本](https://darkmodejs.learn.uno/)
* 修正部分文章格式，棄用hackmd轉html然後再修改的笨方法





