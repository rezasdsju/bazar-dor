# Bazar Dor 🛒

**Bazar Dor** is a web application that tracks the prices of essential commodities and helps users compare prices across different markets, divisions, and time periods. It provides insights into daily price changes, making it easier to monitor price increases and decreases.

## 🔗 Live Demo

[Visit Bazar Dor](https://bazar-dor-two.vercel.app/)

## ✨ Features

- **Price Change Marquee:** View product price changes and percentage increases or decreases.
- **Browse by Category:** Explore products organized by category.
- **Most Price-Increased Products:** Discover products with the highest price increases.
- **Most Price-Decreased Products:** Find products with the largest price decreases.
- **All Products:** Browse the complete product collection.
- **Product Details:** View detailed product information and price comparisons across markets and divisions, as well as historical prices from previous days and weeks.
- **Email Authentication:** Sign up and sign in using email and password.
- **Social Authentication:** Sign in using Google and GitHub.
- **Profile Management:** View your profile and update your profile information.

## 🛠️ Technologies Used

- **Next.js** — React framework for building the web application
- **TypeScript** — Type-safe JavaScript development
- **Tailwind CSS** — Utility-first styling
- **DaisyUI** — Tailwind CSS component library
- **React Toastify** — Toast notifications
- **React Icons** — Icon library
- **Better Auth** — Authentication
- **MongoDB** — Database

## 📁 Project Structure

```text
bazar-dor/
├── .env
├── .gitignore
├── README.md
├── AGENTS.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── tsconfig.json
├── public/
│   ├── bazar-hero.png
│   ├── favicon-1.ico
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── logo-icon.png
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── my-profile/
│   │   │   │   └── page.tsx
│   │   │   ├── sign-in/
│   │   │   │   └── page.tsx
│   │   │   └── sign-up/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   ├── categoryDetail/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── not-found.tsx
│   │   ├── productDetail/
│   │   │   ├── [productId]/
│   │   │   │   └── page.tsx
│   │   │   └── not-found.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── assets/
│   ├── components/
│   │   ├── categoryDetails/
│   │   │   ├── Details.tsx
│   │   │   └── SortProduct.tsx
│   │   ├── homepage/
│   │   │   ├── AllProducts.tsx
│   │   │   ├── Banner.tsx
│   │   │   ├── BrowseButton.tsx
│   │   │   ├── PriceDecreasedProducts.tsx
│   │   │   └── PriceIncreasedProducts.tsx
│   │   ├── productDetails/
│   │   │   └── ProductDetail.tsx
│   │   └── shared/
│   │       ├── AuthButtons.tsx
│   │       ├── AuthItemsCard.tsx
│   │       ├── Footer.tsx
│   │       ├── Header.tsx
│   │       ├── Marquee.tsx
│   │       ├── NavItem.tsx
│   │       ├── NavLinks.tsx
│   │       └── ProductCard.tsx
│   ├── lib/
│   │   ├── auth-client.ts
│   │   └── auth.ts
│   ├── proxy.ts
│   └── types/
└── ...
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- A MongoDB database connection
- The required authentication environment variables

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/rezasdsju/bazar-dor.git
```

**2. Navigate to the project directory**

```bash
cd bazar-dor
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the project root and add the environment variables required by your MongoDB connection and Better Auth configuration.

```env
# Add your actual environment variables here
```

Use your own credentials and follow the project's configuration. Never commit your `.env` file or expose secret keys.

**5. Start the development server**

```bash
npm run dev
```

**6. Open the application**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 👨‍💻 Author

**Rezaul Karim Rifat**

- GitHub: [@rezasdsju](https://github.com/rezasdsju)
- Portfolio: [Developer Portfolio](https://developer-portfolio-1e1b.vercel.app/)

---

If you find this project useful, feel free to explore the repository and share your feedback.
