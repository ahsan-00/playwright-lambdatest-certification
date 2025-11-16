# LambdaTest Certification – Playwright Automation Project

This repository contains the coding assignment for the **LambdaTest Playwright 101 Certification**.

---

## 🚀 How to Run Tests in Gitpod

1. Click **Open in Gitpod**
2. Gitpod will auto-install dependencies using `.gitpod.yml`
3. Add your LambdaTest credentials:
```
    export LT_USERNAME=your_username
    export LT_ACCESS_KEY=your_access_key
```
4. Run tests:
    ```
    npx playwright test
    ```

---

## 🔧 Project Setup

- **Playwright version:** Latest  
- **Language:** TypeScript  
- **Parallel Execution:** Enabled  
- **LambdaTest Grid:** Enabled via `connectOptions`
- **Artifacts Captured:**  
✔ Network Logs  
✔ Console Logs  
✔ Video Recording  
✔ Screenshots  
✔ Tracing  

---

## 🧪 Sample Test Included

The `sample.spec.ts` file demonstrates:
- Navigation  
- Locators  
- Assertions  
- Running on LambdaTest Grid  

---

## 🌐 LambdaTest Integration

The configuration uses `wsEndpoint`:

```
    wss://cdp.lambdatest.com/playwright?capabilities=...
```


This allows Playwright to run tests on LambdaTest cloud browsers.

---

## 📝 How to Submit

When tests finish, go to:

**LambdaTest Dashboard → Automation Logs**

Collect the following:
- **Test Session IDs**
- **Test Names**
- **Build Name**

Include them in your assignment submission.

---

## 📂 Folder Structure
```
    /tests --> Test files
    playwright.config.ts
    .gitpod.yml
    .env.example
    README.md
```
