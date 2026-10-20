# 專案工作指引

## 專案目標

打造一個以聯合國永續發展目標（SDGs）為核心的互動式數位策展網站。網站以 Awwwards 等級的視覺與互動品質為設計目標，但不宣稱或保證得獎。作品應像一個線上展場，以清楚的策展敘事、章節導覽、沉浸式視覺和精緻動態帶領觀眾理解主題。

網站採響應式靜態架構，使用 GSAP 與 ScrollTrigger 實現展場動態與捲動敘事。網站以 GitHub Pages 發佈，使用 GitHub CLI（`gh`）協助管理 GitHub 專案。網站不蒐集觀眾回饋、不傳送使用者文字，也不串接 Google 試算表或 Apps Script。

## 目前階段

目前策展主題為台灣東南亞移工，主要觀眾為國中生。網站已包含五題測驗、工作與國籍統計、縣市分布、最低薪資保障及展覽收束頁。政府開放資料以靜態內容呈現，不做即時串接。

## 設計與內容

- 以明確的策展主張串起 SDG 主題、展覽章節與視覺系統。
- 追求有辨識度的字體、網格、色彩、影像和版面節奏；避免套用通用範本或只堆疊動畫。
- 先以行動裝置和小螢幕可用為前提，再延伸至桌機大畫面。
- 使用語意化 HTML、鍵盤可操作的控制項、清楚的焦點狀態、足夠的對比和有意義的替代文字。
- 尊重 `prefers-reduced-motion`；動態應服務敘事，不能阻止閱讀或導覽。
- 不得杜撰 SDG 數據或來源。引用數據、影像與文字時記錄來源及授權資訊。
- 不新增回饋表單、觀眾文字蒐集或資料提交功能。

## 技術與整合

- 前端使用 Vite、原生 JavaScript ES modules、GSAP 和 GSAP 內含的 ScrollTrigger；保持網站為可部署到靜態主機的前端，不新增伺服器端依賴。
- 使用 ScrollTrigger 時由應用程式載入並註冊插件，並處理頁面重排、圖片載入和元件清理等生命週期。
- 政府資料以來源可追溯的靜態資料呈現；更新資料時保留年份、單位與統計範圍說明。

## GitHub 與部署

- 預設分支為 `main`。使用 Git 維護變更，使用 `gh` 管理 GitHub 專案與 Pages 狀態。
- GitHub Pages 由 `.github/workflows/deploy.yml` 建置 `dist/` 並部署；Vite 的 base path 依 GitHub repository 名稱設定，以支援專案型 Pages 網址。
- 第一次成功部署後，將實際 GitHub Pages 網址寫入 `README.md`，再提交並推送更新。
- 不要假設遠端 repository 已存在；確認使用者指定或現有的 GitHub repository 後再連結遠端。
- 不提交建置輸出、`node_modules`、本機環境檔或秘密資訊。

## 套件命令

- `npm ci`：依 lockfile 安裝套件。
- `npm run dev`：啟動 Vite 開發伺服器（建立網站入口頁後可用）。
- `npm run build`：建置靜態網站至 `dist/`（建立網站入口頁後可用）。
- `npm run preview`：預覽 production build。

## 完成條件

1. 策展內容、SDG 焦點和敘事完整，資料與素材有可查來源。
2. 桌機、平板和手機都能完整閱讀、操作與導覽。
3. GSAP/ScrollTrigger 動態穩定、可存取，並尊重減少動態偏好。
4. 不蒐集或傳送觀眾回饋；所有展覽內容皆可直接閱讀與操作。
5. `npm run build` 成功，GitHub Actions Pages 部署成功且網站可公開瀏覽。
6. `README.md` 含實際 Pages 網址，且最後變更已推送到指定 GitHub repository。
