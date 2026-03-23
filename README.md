# 🛍️ E‑Commerce Frontend Application

A modern, fully responsive e‑commerce frontend built with **React** and **Bootstrap**. This project simulates a complete online shopping experience with product catalog, shopping cart, wishlist, dark mode, and mock authentication – all without a backend, using client‑side state management and `localStorage` persistence.

![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.3-7952b3?logo=bootstrap)
![React Router](https://img.shields.io/badge/React_Router-6.8.0-ca4245?logo=react-router)
![Swiper](https://img.shields.io/badge/Swiper-11.0.0-6332f6?logo=swiper)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Live Demo

> **Live Demo:** *Coming soon*

---

## 🚀 Features

### Core Features
- **Product Catalog** – Browse products with filtering by category, price range, rating, and gender
- **Product Details** – View detailed product information with quantity selector
- **Shopping Cart** – Add/remove items, update quantities, persistent storage via `localStorage`
- **Wishlist** – Save favorite products with persistent storage
- **Checkout Flow** – Mock checkout with form validation and order confirmation
- **User Authentication** – Mock login/register functionality (no backend)
- **Product Search** – Real‑time search with debouncing for optimal performance

### UI/UX Features
- **Dark Mode** – Toggle between light and dark themes with persistent preference
- **Responsive Design** – Fully responsive layout using Bootstrap grid system
- **Toast Notifications** – Visual feedback for cart and wishlist actions
- **Loading Skeletons** – Smooth loading states for better user experience
- **Product Badges** – "New", "Sale", and custom deal badges
- **Discount Pricing** – Display original price with percentage off
- **Star Ratings** – Visual rating system with teal accent (`#20c997`)

### Navigation & Layout
- **Sticky Top Navbar** – Logo, search bar, wishlist, cart, user menu, theme toggle
- **Category Bar** – Quick navigation to Home, Fashion (with Men/Women dropdown), Sports, Electronics
- **Hero Banner** – Elegant Swiper.js carousel with autoplay and navigation
- **Footer** – Company info, quick links, customer service, social media icons

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, React Router DOM v6, React Bootstrap, Bootstrap 5 |
| **State Management** | React Context API (Cart, Wishlist, Auth, Theme) |
| **Carousel** | Swiper.js |
| **Icons** | React Icons |
| **Notifications** | React Toastify |
| **Styling** | Custom CSS + Bootstrap |
| **Persistence** | `localStorage` |
| **Build Tool** | Create React App |

---

## 📁 Project Structure
ecommerce/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ ├── images/
│ │ └── styles/
│ │ └── custom.css
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── CategoriesBar.jsx
│ │ ├── Footer.jsx
│ │ ├── HeroBanner.jsx
│ │ ├── ProductCard.jsx
│ │ ├── CartItem.jsx
│ │ ├── FilterSidebar.jsx
│ │ ├── Rating.jsx
│ │ └── SkeletonProductCard.jsx
│ ├── context/
│ │ ├── CartContext.jsx
│ │ ├── AuthContext.jsx
│ │ ├── WishlistContext.jsx
│ │ └── ThemeContext.jsx
│ ├── data/
│ │ └── products.json
│ ├── hooks/
│ │ └── useDebounce.js
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── ProductListPage.jsx
│ │ ├── ProductDetailsPage.jsx
│ │ ├── CartPage.jsx
│ │ ├── WishlistPage.jsx
│ │ ├── CheckoutPage.jsx
│ │ ├── LoginPage.jsx
│ │ ├── RegisterPage.jsx
│ │ ├── ContactPage.jsx
│ │ ├── FaqPage.jsx
│ │ ├── ReturnsPage.jsx
│ │ └── ShippingPage.jsx
│ ├── utils/
│ │ └── helpers.js
│ ├── App.js
│ └── index.js
├── package.json
└── README.md

text

---

## 🎨 Color Palette

| Usage | Color | Hex |
|-------|-------|-----|
| Buttons & Prices | Gold | `#ffc107` |
| Rating Stars & Underlines | Teal | `#20c997` |
| Primary Text | Dark Gray | `#212529` |
| Secondary Text | Gray | `#6c757d` |
| Active Wishlist | Teal Green | `#1d9974` |

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Steps
# 1. Clone the repository
git clone https://github.com/jomol2003/ecommerce.git

# 2. Navigate to project folder
cd ecommerce

# 3. Install dependencies
npm install

# 4. Start development server
npm start
The app will open at http://localhost:3000.

🧪 How to Use
Browse Products – Visit the Products page. Use filters (category, price, rating, gender) to narrow results.

Search – Type in the search bar (top navbar) to find products instantly.

Add to Cart – Click "Add to Cart" on any product. A toast notification confirms the action.

Wishlist – Click the heart icon on a product to save it. Access your wishlist via the heart icon in the navbar.

Cart Management – Go to the Cart page to update quantities or remove items.

Checkout – Fill in the mock checkout form and place an order (simulated).

Dark Mode – Toggle the moon/sun icon in the navbar.

Login/Register – Use the mock forms (any credentials work).

📱 Responsive Design
The application is fully responsive and works seamlessly on:

Desktop (1024px and above)

Tablet (768px – 1024px)

Mobile (below 768px)

🗂️ Data Structure
All product data is stored in src/data/products.json. Each product includes:

json
{
  "id": 1,
  "name": "Wireless Headphones",
  "price": 59.99,
  "originalPrice": 79.99,
  "category": "Electronics",
  "image": "https://...",
  "rating": 4.5,
  "numReviews": 120,
  "description": "...",
  "isNew": false,
  "isSale": true,
  "deal": "Limited Deal",
  "gender": null
}
Categories: Electronics, Sports, Fashion, Home
Fashion items include a gender field (male / female).

🌟 Future Enhancements
Backend integration with Node.js/Express

Real payment gateway (Stripe/PayPal)

User profile management

Product reviews and ratings

Order history tracking

Advanced product filters

Email notifications

Multi‑language support

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Jomol

GitHub: @jomol2003

🙏 Acknowledgments
Bootstrap – CSS framework

React Bootstrap – React components

Swiper.js – Carousel library

React Icons – Icon library

React Toastify – Toast notifications
