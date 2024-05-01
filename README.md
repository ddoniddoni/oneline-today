# Oneline Today

하루를 마무리하며 한 줄을 적음으로써 생각하는 시간을 가질 수 있는 Web

## 기능

1. google login, logout (firebase auth)
2. 하루를 마무리하며 간단히 작성
3. Light, Dark 모드 구현

## Link

[Today's Oneline](https://today-one-line-eb9a5.web.app/)

## 기술스택

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![zustand](https://img.shields.io/badge/zustand-291c13?style=for-the-badge&&logoColor=white)

## 폴더구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📜google-btn.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading-screen.tsx
 ┃ ┣ 📜post-today-form.tsx
 ┃ ┣ 📜postcard.tsx
 ┃ ┣ 📜protectedRoute.tsx
 ┃ ┣ 📜timeline.tsx
 ┃ ┗ 📜user.tsx
 ┣ 📂pages
 ┃ ┣ 📂home
 ┃ ┃ ┗ 📜home.tsx
 ┃ ┗ 📂login
 ┃ ┃ ┗ 📜login.tsx
 ┣ 📂store
 ┃ ┣ 📜editStore.ts
 ┃ ┣ 📜themeStore.ts
 ┃ ┗ 📜userStore.ts
 ┣ 📜App.tsx
 ┣ 📜firebase.ts
 ┣ 📜main.tsx
 ┣ 📜theme.ts
 ┗ 📜vite-env.d.ts
```
