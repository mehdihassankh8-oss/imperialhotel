/**
 * Vercel Speed Insights Initialization
 * 
 * This script initializes Vercel Speed Insights for this static website.
 * 
 * Note: Speed Insights must be enabled in your Vercel Dashboard:
 * https://vercel.com/dashboard/[your-project]/speed-insights
 * 
 * The tracking will only work in production. No data is collected in development mode.
 */

import { injectSpeedInsights } from './speed-insights.mjs';

// Initialize Speed Insights with default configuration
// This will automatically track Core Web Vitals and other performance metrics
if (typeof window !== 'undefined') {
  injectSpeedInsights({
    debug: false, // Set to true for debugging in development
  });
}
