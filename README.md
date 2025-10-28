# Shop Easy Cart - E-commerce Shopping Cart Application

A modern ReactJS application that allows users to browse products from the Fake Store API and manage their shopping cart through an intuitive modal interface. Built with pure CSS for optimal performance and clean code.

## 🚀 Features

- **Product Browsing**: Fetch and display products from the Fake Store API
- **Shopping Cart**: Add products to cart with quantity management
- **Duplicate Prevention**: Alert users when trying to add items already in cart
- **Cart Modal**: Beautiful modal interface to view and manage cart items
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Cart count updates instantly in the navbar
- **Remove Items**: Easy removal of items from cart
- **Quantity Control**: Increase/decrease item quantities
- **Total Calculation**: Automatic price calculation for cart items
- **Indian Currency**: All prices displayed in Indian Rupees (₹)
- **Consistent Layout**: Uniform card heights with aligned buttons and prices
- **Image Optimization**: Full product images visible without cropping

## 🛠️ Tech Stack

- **ReactJS** - Frontend framework
- **Pure CSS** - Custom styling and responsive design
- **JavaScript** - Application logic
- **Fake Store API** - Product data source

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Shop_Easy_Cart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar with cart button
│   ├── ProductGrid.jsx    # Grid layout for products
│   ├── ProductCard.jsx    # Individual product card
│   ├── CartModal.jsx      # Shopping cart modal
│   └── Alert.jsx          # Alert notification component
├── App.jsx                # Main application component
├── App.css                # Application styles
└── index.css              # Global styles with custom CSS
```

## 🎯 Key Components

### App.jsx
- Main application component managing state
- Handles API calls to Fake Store API
- Manages cart state and operations
- Coordinates between all child components

### Navbar.jsx
- Displays cart count badge
- Opens cart modal on click
- Responsive navigation design

### ProductGrid.jsx
- Responsive grid layout for products
- Passes products to individual cards

### ProductCard.jsx
- Displays product information
- Add to cart functionality
- Hover effects and responsive design

### CartModal.jsx
- Modal interface for cart management
- Quantity controls for each item
- Remove item functionality
- Total price calculation
- Empty cart state handling

### Alert.jsx
- Toast notification for duplicate items
- Auto-dismissing alert system

## 🎨 Features in Detail

### Responsive Design
- Mobile-first approach with custom CSS
- Grid layout adapts to screen size:
  - 1 column on mobile
  - 2 columns on small screens
  - 3 columns on large screens
  - 4 columns on extra large screens
- Consistent card heights with aligned content
- Optimized image display without cropping

### Cart Management
- Add products with duplicate checking
- Quantity adjustment with +/- buttons
- Remove individual items
- Real-time total calculation
- Empty cart state with helpful message

### User Experience
- Loading spinner while fetching products
- Smooth animations and transitions
- Intuitive button interactions
- Clear visual feedback for all actions
- Indian Rupee (₹) currency display
- Consistent product card layouts
- Full product image visibility

## 🌐 API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Data includes**: Product ID, title, price, description, image, category
- **Error handling**: Graceful fallback for API failures

## 🚀 Deployment

### Netlify Deployment (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Shop Easy Cart - React shopping cart with CSS"
git push origin main
```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy!

### Manual Deployment

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder to the deploy area
   - Your site will be live instantly!

### Build Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node Version**: 18.x (default)
- **No Environment Variables Required**

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing product data
- [React](https://reactjs.org/) for the component-based architecture
- Custom CSS implementation for optimal performance

## 📸 Screenshots

- **Product Grid**: Responsive grid layout with consistent card heights
- **Shopping Cart**: Modal interface with quantity controls
- **Mobile View**: Optimized for mobile devices
- **Indian Currency**: All prices displayed in ₹ (Indian Rupees)

---

**Happy Shopping! 🛒**

*Built with ❤️ using React and Pure CSS*