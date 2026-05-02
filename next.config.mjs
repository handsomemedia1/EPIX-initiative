/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Force HTTPS for 2 years, include subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Prevent the site from being embedded in iframes (clickjacking protection)
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Prevent MIME-type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Control how much referrer info is sent
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Disable access to sensitive browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Enable DNS prefetching for performance
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Content Security Policy — only allow trusted sources
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Allow Google Fonts stylesheets
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Allow Google Fonts font files
      "font-src 'self' https://fonts.gstatic.com",
      // Allow scripts from self only (Next.js uses inline scripts at runtime)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Allow images from self and data URIs (for inline SVGs)
      "img-src 'self' data: blob:",
      // Allow connections to self only
      "connect-src 'self'",
      // Block all plugins
      "object-src 'none'",
      // Block framing from external origins
      "frame-ancestors 'self'",
      // Block form submissions to external origins
      "form-action 'self'",
      // Upgrade insecure HTTP requests to HTTPS
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

