# Vercel Speed Insights Setup

This project has been configured to use Vercel Speed Insights to track Core Web Vitals and other performance metrics.

## What Was Installed

1. **Package**: `@vercel/speed-insights@2.0.0` has been added to `package.json`
2. **Scripts**: 
   - `/scripts/speed-insights.mjs` - The Speed Insights library
   - `/scripts/init-speed-insights.js` - Initialization script
3. **HTML Pages**: All HTML files have been updated with the Speed Insights script tag

## How It Works

Speed Insights is now integrated into all pages of the website:
- index.html
- about.html
- rooms.html
- gallery.html
- location.html

The script automatically tracks:
- **Core Web Vitals**: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift)
- **Other Performance Metrics**: FCP (First Contentful Paint), TTFB (Time to First Byte), INP (Interaction to Next Paint)

## Required: Enable in Vercel Dashboard

**Important**: Speed Insights must be enabled in your Vercel project dashboard for data collection to work.

### Steps to Enable:

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project (Imperial Hotel)
3. Navigate to the "Speed Insights" tab or "Analytics" section
4. Click "Enable Speed Insights"

Alternatively, visit directly:
```
https://vercel.com/[your-team]/[your-project]/speed-insights
```

## Important Notes

- **Development Mode**: Speed Insights does NOT track data in development mode. It only works on deployed (production/preview) environments.
- **No Code Changes Needed**: Once enabled in the dashboard, the tracking will automatically start working on your deployed site.
- **Privacy**: Speed Insights is privacy-focused and does not use cookies or track personal information.
- **Cost**: Speed Insights is available on all Vercel plans, including the free hobby plan.

## Viewing Analytics

Once enabled and your site is deployed:

1. Visit your Vercel Dashboard
2. Go to your project
3. Click on "Speed Insights" or "Analytics"
4. View real-time performance data and Core Web Vitals scores

## Testing

To verify Speed Insights is working after deployment:

1. Deploy your site to Vercel
2. Visit your production URL
3. Open browser DevTools > Network tab
4. Look for requests to Vercel's analytics endpoints
5. Check the Vercel Dashboard Speed Insights section for incoming data (may take a few minutes to appear)

## Documentation

For more information, visit:
- [Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart)
- [Speed Insights Package Documentation](https://vercel.com/docs/speed-insights/package)
- [Understanding Core Web Vitals](https://web.dev/vitals/)

## Troubleshooting

If you don't see data:

1. ✅ Verify Speed Insights is enabled in the Vercel Dashboard
2. ✅ Ensure you've deployed the changes to Vercel
3. ✅ Check that you're viewing the production or preview deployment (not localhost)
4. ✅ Wait a few minutes for data to populate
5. ✅ Check browser console for any JavaScript errors

---

Last updated: July 19, 2026
