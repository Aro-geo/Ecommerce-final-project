# SoleEssence - Premium Footwear Website

**SoleEssence** is a modern, responsive e-commerce front-end template designed to showcase premium footwear collections. Built with clean HTML, CSS, and JavaScript, this site offers an elegant user experience across all devices.

## 🌐 Live Demo

👉 [https://soleessence.netlify.app/](https://soleessence.netlify.app/)

## 📁 Project Structure

```
.
├── index.html
├── css/
│   ├── styles.css
│   └── components.css
├── js/
│   ├── main.js
│   └── products.js
├── netlify.toml
```

## 📌 Features

- **Responsive Layout**: Seamless experience across desktop, tablet, and mobile devices.
- **Navigation Bar**: Links to various shoe categories including Women’s, Men’s, Kids’, Formal, and Essentials.
- **Hero Section**: Highlights the “Everyday Essentials” collection.
- **Dynamic Product Section**: Placeholder for JavaScript-rendered featured products.
- **Newsletter Signup**: Integrated email capture form for promotions and updates.
- **Footer Section**: Quick links, help center, and social media integrations.
- **SEO Ready**: Includes meta tags for better visibility and social sharing.

## 🚀 Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Aro-geo/Ecommerce-project.git
   
   ```

2. Open the project:
   ```bash
   open index.html  # macOS
   start index.html # Windows
   ```

3. (Optional) Use a local server:
   ```bash
   npx serve .
   ```

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts (Inter)
- SVG Icons

## 🌐 Deployment

This project is configured for deployment using **Netlify**.

### Netlify Configuration (`netlify.toml`)

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

To deploy with Netlify:

1. Push your code to a Git repository (e.g., GitHub).
2. Connect the repository to Netlify.
3. Netlify automatically reads `netlify.toml` and deploys the app to [https://soleessence.netlify.app/](https://soleessence.netlify.app/).

## ✨ Future Improvements

- Backend integration for cart and checkout
- Real-time inventory and search functionality
- Enhanced filtering and sorting for products
- User authentication and profile pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
