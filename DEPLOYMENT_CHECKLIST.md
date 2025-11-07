# Deployment Checklist for Yihune Belay Portfolio

## Pre-Deployment Checklist

- [x] ✅ `.env` file added to `.gitignore`
- [x] ✅ Vite config `base` path set to `/` for Netlify
- [x] ✅ `.env.example` created for reference
- [x] ✅ Build process tested successfully
- [x] ✅ README updated with deployment instructions
- [ ] Environment variables configured in deployment platform

## Netlify Deployment Steps

### Option 1: Quick Deploy via Netlify UI (Recommended)

1. **Prepare Repository**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your repository: `yihune1234/Portfolio`
   - Configure settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: 18 (automatically set from `netlify.toml`)

3. **Add Environment Variables**
   - Go to Site settings > Environment variables
   - Add these variables:
     ```
     VITE_APPWRITE_PROJECT_ID = 690c7732001ec1c2933b
     VITE_APPWRITE_PROJECT_NAME = New project
     VITE_APPWRITE_ENDPOINT = https://nyc.cloud.appwrite.io/v1
     ```

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (usually 2-3 minutes)

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI** (if not already installed)
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

4. **Set Environment Variables via CLI**
   ```bash
   netlify env:set VITE_APPWRITE_PROJECT_ID "690c7732001ec1c2933b"
   netlify env:set VITE_APPWRITE_PROJECT_NAME "New project"
   netlify env:set VITE_APPWRITE_ENDPOINT "https://nyc.cloud.appwrite.io/v1"
   ```

## Post-Deployment Verification

After deployment, verify the following:

- [ ] Website loads correctly at your Netlify URL
- [ ] All sections navigate properly (Hero, About, Skills, Projects, Contact)
- [ ] Dark/Light theme toggle works
- [ ] Contact form submits successfully to Appwrite
- [ ] All images and assets load properly
- [ ] Responsive design works on mobile devices
- [ ] No console errors in browser developer tools
- [ ] Page load performance is acceptable

## Custom Domain Setup (Optional)

1. Go to Netlify Dashboard > Domain settings
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)

## Continuous Deployment

Your site is now set up for continuous deployment! Any push to your `main` branch will automatically trigger a new deployment on Netlify.

## Troubleshooting

### Build Fails
- Check Node version matches `netlify.toml` (Node 18)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Environment Variables Not Working
- Ensure all `VITE_*` prefixed variables are set
- Redeploy after adding new environment variables
- Variables must start with `VITE_` to be accessible in the app

### Contact Form Not Working
- Verify Appwrite project is active
- Check Appwrite database and collection permissions
- Ensure environment variables are correct

### 404 Errors
- Check `netlify.toml` redirects configuration
- Verify `dist` folder contains `index.html`

## Support

If you encounter issues:
1. Check Netlify build logs
2. Review browser console for errors
3. Verify environment variables are set correctly
4. Ensure Appwrite project is properly configured

## Success! 🎉

Once deployed, share your portfolio:
- Add the URL to your GitHub profile
- Share on LinkedIn
- Include in your resume
- Add to your email signature

---

**Deployment Date**: [Fill in after deployment]
**Live URL**: [Add your Netlify URL here]
