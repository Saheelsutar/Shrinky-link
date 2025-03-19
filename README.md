# 🔗 Shrinky Link

Shrinky Link is a URL shortener web application built using Next.js 15 with TypeScript, MongoDB for data storage, and Tailwind CSS for styling and responsiveness.

## ✨ Features
- 🔽 Shorten long URLs into easily shareable short links
- 🔄 Redirect users from short URLs to original links
- 📊 View and manage shortened URLs
- 📱 Fully responsive design styled with Tailwind CSS

## 🛠 Tech Stack
- **🚀 Framework**: Next.js 15 (App Router)
- **💻 Language**: TypeScript
- **🗄 Database**: MongoDB
- **🎨 Styling**: Tailwind CSS

## 📦 Installation

### Steps
1. 📥 Clone the repository:
   ```bash
   git clone https://github.com/Saheelsutar/Shrinky-link.git
   cd shrinky-link
   ```

2. 📦 Install dependencies:
   ```bash
   npm install
   ```

3. 🔧 Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. ▶️ Run the development server:
   ```bash
   npm run dev
   ```
   The app should be running on `http://localhost:3000`

## 🎯 Usage
- ✏️ Enter a long URL in the input field and generate a short URL
- 🔗 Copy the short link and share it anywhere
- 🚀 Visiting the short link will redirect to the original URL

## 🚢 Deployment
### Deploy to Vercel
1. 📦 Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. 🚀 Run the deployment command:
   ```bash
   vercel
   ```
3. ✅ Follow the instructions to deploy your application.

