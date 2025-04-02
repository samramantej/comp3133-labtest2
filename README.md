# 🚀 SpaceX Mission Tracker

**Author:** Mantej Singh Samra 
**Student ID:** 101410416 

**Live Demo:** [https://comp3133-labtest2-dusky.vercel.app](https://comp3133-labtest2-dusky.vercel.app)

---

## 🧾 Project Overview

This Angular application fetches and displays SpaceX mission data using the public SpaceX REST API. It is built as part of **COMP3133 – Lab Test 2**.

Users can:
- View a list of all missions
- Filter by launch year, launch success, and landing success
- Click a mission to view full details

---

## 🖼️ Screenshots

### ✅ Home Page + Filter
![image](https://github.com/user-attachments/assets/3573db09-681f-42ec-a4fa-4e4c96547f4e)


### ✅ Filtered Mission List
![image](https://github.com/user-attachments/assets/d58204a5-267e-413f-8c14-29d806a52de4)

### ✅ Mission Details
![image](https://github.com/user-attachments/assets/cd7d4970-c144-4853-bb5c-0a06b4d95823)
![image](https://github.com/user-attachments/assets/f16ec188-3997-4cf0-aa1f-734155965cd7)
![image](https://github.com/user-attachments/assets/7bb07e42-8fac-4347-b2ad-9ebab99e41fd)

---

## 🛠️ Tech Stack

- Angular (Standalone Components)
- Angular Material
- SpaceX REST API v3
- Vercel (Hosting)
- GitHub (Version control)

---

## 📦 How to Run Locally

1. Clone the repository:
```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install dependencies:
```
npm install
```

3. Run the app:
```
ng serve
```

Then open `http://localhost:4200/` in your browser.---

## 📂 Project Structure Highlights

```
/src
  /app
    /missionlist         → Lists all missions
    /missionfilter       → Filters for year, launch, landing
    /missiondetails      → Individual mission details
    /network             → API service for SpaceX data
    /models              → Mission data interface
```

---

## ✅ Features

- Angular standalone app setup
- Angular Material cards and spinners
- SpaceX REST API integration
- Filter functionality:
  - By launch year
  - Launch success (radio)
  - Landing success (radio)
- Clickable mission cards → routed mission detail view
- Responsive design
- Deployed via Vercel

---

## 📬 Submission Info

- ✅ GitHub Repo: https://github.com/samramantej/comp3133-labtest2
- ✅ Deployed App: [https://comp3133-labtest2-dusky.vercel.app](https://comp3133-labtest2-dusky.vercel.app)
- ✅ Screenshots: included in this README

---

**Submitted for COMP3133 – Lab Test 2**

