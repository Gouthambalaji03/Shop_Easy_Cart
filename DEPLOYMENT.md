# Deployment Guide for Netlify

## Quick Deployment Steps

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit - ShopCart application"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "New site from Git"
   - Choose your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

### Option 2: Manual Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder to the deploy area
   - Your site will be live instantly!

## Build Configuration

The application is configured for production builds with:
- Optimized bundle size
- Minified CSS and JavaScript
- Static asset optimization
- Responsive design ready

## Environment Variables

No environment variables are required for this application as it uses the public Fake Store API.

## Custom Domain (Optional)

After deployment, you can:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check for any TypeScript/JavaScript errors
- Verify Tailwind CSS configuration

### Styling Issues
- Make sure Tailwind CSS is properly configured
- Check that `@tailwind` directives are in `src/index.css`
- Verify `tailwind.config.js` includes the correct content paths

### API Issues
- The Fake Store API is public and doesn't require authentication
- Check your internet connection
- Verify the API endpoint is accessible

## Performance Tips

- The application is optimized for production
- Images are loaded from the Fake Store API
- Consider adding image optimization for better performance
- Enable gzip compression on Netlify (usually enabled by default)

---

**Your ShopCart application is now ready for deployment! 🚀**
