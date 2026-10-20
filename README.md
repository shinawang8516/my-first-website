# 在場｜看見工作，也看見人

台灣東南亞移工數位展覽原型。展覽從政府公開統計出發，呈現移工的工作類型、縣市分布與薪資保障，並邀請觀眾思考行政數字看得見與看不見的生活經驗。

## Project status

Responsive static exhibition prototype. The five-question quiz, charts, county distribution visualization, wage rules section, and closing summary are implemented. The website does not collect visitor feedback or connect to Google Sheets / Apps Script.

## Live site

https://shinawang8516.github.io/my-first-website/

## Planned stack

- Vite static build
- GSAP and ScrollTrigger for exhibit-style motion
- GitHub Pages deployment through GitHub Actions

## Data sources

- [Foreign workers by nationality and industry (dataset 41882)](https://data.gov.tw/dataset/41882)
- [Foreign workers by nationality and county/city (dataset 41881)](https://data.gov.tw/dataset/41881)
- [Basic wage history (dataset 6281)](https://data.gov.tw/dataset/6281)
- [Ministry of Labor: 2026 minimum wage](https://www.mol.gov.tw/1607/1632/1633/87257/post)
- [Ministry of Labor: migrant worker wage rules](https://www.mol.gov.tw/1607/28162/28166/28180/28182/28188/29020/)

The county and industry datasets have different statistical scopes. The site labels each source separately and does not merge their totals.

The site is a static exhibition and does not collect or transmit visitor responses.
