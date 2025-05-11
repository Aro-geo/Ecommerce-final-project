// Mock Product Data
const products = [
  {
    id: '1',
    name: 'Classic Leather Derby',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal'
  },
  {
    id: '2',
    name: 'Urban Comfort Sneaker',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Casual'
  },
  {
    id: '3',
    name: 'Elegance Stiletto',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Formal'
  },
  {
    id: '4',
    name: 'Comfort Walking Flats',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Casual'
  }
];

// Render Product Cards
function renderProductCard(product) {
  return `
    <article class="product-card">
      <img 
        src="${product.imageUrl}" 
        alt="${product.name}"
        class="product-image"
      />
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="btn btn-primary" onclick="addToCart('${product.id}')">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

// Initialize Featured Products
const featuredProductsContainer = document.getElementById('featuredProducts');
if (featuredProductsContainer) {
  featuredProductsContainer.innerHTML = products
    .map(product => renderProductCard(product))
    .join('');
}

// Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  cart.push({
    ...product,
    quantity: 1
  });
  
  localStorage.setItem('cart', JSON.stringify(cart));
  showAlert('Product added to cart!', 'success');
}

// Initialize cart count
function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartIcon = document.querySelector('.cart-count');
  if (cartIcon) {
    cartIcon.textContent = cartCount;
  }
}

updateCartCount();