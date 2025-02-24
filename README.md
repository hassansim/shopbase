# ShopBase

A full-stack e-commerce web application built with React, Node.js, Express, and MongoDB.

🔗 **Live Demo**: [https://shopbase-nv0a.onrender.com](https://shopbase-nv0a.onrender.com)

## Features

- **Product Catalog**: Browse products across different categories with responsive layouts.
- **Product Details**: Dedicated product page with pricing, descriptions, and related product recommendations.
- **Cart & Discounts**: Manage cart items, update quantities, and apply discount coupon codes.
- **Checkout & Payments**: Stripe checkout integration with order fulfillment and automatic demo checkout fallback.
- **Admin Dashboard**: Manage inventory (create products with Cloudinary image upload, toggle featured items, delete products) and view sales analytics.
- **Authentication**: User sign up and login using JWT access and refresh tokens stored in HTTP-only cookies.
- **Caching**: Upstash Redis caching for fast retrieval of featured products.

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Zustand, Lucide Icons
- **Backend**: Node.js, Express, MongoDB, Mongoose, Upstash Redis
- **Payments**: Stripe API
- **Image Storage**: Cloudinary

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas or local MongoDB
- Upstash Redis database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hassansim/shopbase.git
   cd shopbase
   ```

2. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install && cd ..
   ```

3. Configure environment variables in a `.env` file in the project root based on `.env.example`:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_uri
   UPSTASH_REDIS_URL=your_upstash_redis_url
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   npm run start
   ```

## License

This project is licensed under the MIT License.
