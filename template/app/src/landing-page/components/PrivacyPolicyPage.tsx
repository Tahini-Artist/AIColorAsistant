import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ 
      backgroundColor: '#0f172a', 
      color: '#e2e8f0',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '3rem' }}>
          <Link 
            to="/"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#3b82f6',
              textDecoration: 'none',
              fontSize: '1rem',
              marginBottom: '1.5rem',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#3b82f6'}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v-11a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </Link>
          
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc',
            lineHeight: '1.2'
          }}>
            Privacy Policy
          </h1>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: '600'
          }}>
            Last Updated: February 5, 2026
          </p>
        </header>

        {/* Privacy at a Glance */}
        <section style={{ 
          padding: '2rem',
          backgroundColor: '#1e293b',
          borderRadius: '0.75rem',
          border: '1px solid #334155',
          marginBottom: '3rem'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#f8fafc'
          }}>
            Privacy at a Glance
          </h2>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#e2e8f0',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.75rem' }}>
              ✅ <strong style={{ color: '#f8fafc' }}>No image uploads.</strong> Your images never leave your device.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              ✅ <strong style={{ color: '#f8fafc' }}>No account required.</strong> Use our tool without signing up.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              ✅ <strong style={{ color: '#f8fafc' }}>No selling of personal data.</strong> We don't collect or sell your information.
            </li>
          </ul>
        </section>

        {/* Important Alert */}
        <section style={{ 
          padding: '1.5rem',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '0.75rem',
          border: '2px solid #3b82f6',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#3b82f6',
            fontWeight: 'bold',
            margin: 0,
            lineHeight: '1.6'
          }}>
            🔒 Your images stay on your device.
          </p>
        </section>

        {/* Table of Contents */}
        <section style={{ 
          padding: '2rem',
          backgroundColor: '#1e293b',
          borderRadius: '0.75rem',
          border: '1px solid #334155',
          marginBottom: '3rem',
          position: 'sticky',
          top: '2rem',
          zIndex: 10
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#f8fafc'
          }}>
            Table of Contents
          </h2>
          <ul style={{ 
            fontSize: '1rem',
            color: '#e2e8f0',
            lineHeight: '2',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#introduction"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                1. Introduction
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#data-collect"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                2. Data We Collect (and What We Don't)
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#image-processing"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                3. How We Process Images
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#cookies"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                4. Cookies & Third-Party Advertising
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#security"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                5. Data Security
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#contact"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                6. Contact Information
              </a>
            </li>
            <li style={{ marginBottom: '0' }}>
              <a 
                href="#changes"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                7. Changes to This Policy
              </a>
            </li>
          </ul>
        </section>

        {/* Introduction */}
        <section id="introduction" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            1. Introduction
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            AIColorAsistant ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our AI color extraction tool. By using our service, you agree to the terms outlined in this policy.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            We believe in transparency and simplicity. Our core principle is that your creative work belongs to you—and only you.
          </p>
        </section>

        {/* Data We Collect */}
        <section id="data-collect" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            2. Data We Collect (and What We Don't)
          </h2>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#e2e8f0'
          }}>
            What We Collect
          </h3>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Anonymous Usage Data:</strong> We use Google Analytics to collect anonymous information about how visitors use our website, such as page views, browser types, and geographic location (based on IP address). This data helps us improve our service and understand user behavior.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Cookies:</strong> We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze traffic patterns.
            </li>
          </ul>

          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#e2e8f0'
          }}>
            What We Don't Collect
          </h3>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Personal Information:</strong> We do not collect names, email addresses, phone numbers, or any personally identifiable information.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Account Data:</strong> We do not require user registration or account creation.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Image Data:</strong> We do not upload, store, or transmit your images to any server.
            </li>
          </ul>
        </section>

        {/* How We Process Images */}
        <section id="image-processing" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            3. How We Process Images
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            Our color extraction tool operates entirely within your web browser using client-side JavaScript. Here's what happens when you upload an image:
          </p>
          <ol style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            marginBottom: '1rem'
          }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Local Processing:</strong> Your image is loaded into your browser's memory and analyzed using JavaScript running on your device.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Color Extraction:</strong> The algorithm extracts dominant colors from the image pixels.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Color Matching:</strong> Extracted colors are matched against our local color database to find the closest professional color names.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Result Display:</strong> The color palette and AI prompts are displayed in your browser for you to copy or download.
            </li>
          </ol>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '0.75rem',
            border: '1px solid #334155',
            borderLeft: '4px solid #3b82f6'
          }}>
            <p style={{ 
              fontSize: '1rem', 
              color: '#e2e8f0', 
              lineHeight: '1.7',
              margin: 0
            }}>
              <strong style={{ color: '#3b82f6' }}>Key Point:</strong> At no point during this process does your image leave your browser or get transmitted to our servers. All processing happens locally on your device.
            </p>
          </div>
        </section>

        {/* Cookies & Third-Party Advertising */}
        <section id="cookies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            4. Cookies & Third-Party Advertising
          </h2>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#e2e8f0'
          }}>
            Our Cookies
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            We use cookies to improve your experience by remembering your preferences and analyzing site traffic. You can control cookie settings through your browser preferences.
          </p>

          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#e2e8f0'
          }}>
            Third-Party Advertising
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We may use third-party advertising services, such as Google AdSense, to display advertisements on our website. These services may use cookies to serve ads based on your prior visits to our website or other websites.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', borderBottom: '1px solid #3b82f6', paddingBottom: '0.125rem' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = '#3b82f6'}>Google's Ads Settings</a> or the <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', borderBottom: '1px solid #3b82f6', paddingBottom: '0.125rem', marginLeft: '0.5rem' }} onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#60a5fa'} onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = '#3b82f6'}>Network Advertising Initiative opt-out page</a>.
          </p>
        </section>

        {/* Data Security */}
        <section id="security" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            5. Data Security
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            Since we do not collect or store your personal information or images, there is minimal risk of data breaches related to user content. However, we take the following measures to protect the data we do collect:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Secure Hosting:</strong> Our website is hosted on secure servers with industry-standard security protocols.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>HTTPS Encryption:</strong> All data transmitted between your browser and our website is encrypted using HTTPS.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Regular Updates:</strong> We regularly update our security practices to address emerging threats.
            </li>
          </ul>
        </section>

        {/* Contact Information */}
        <section id="contact" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            6. Contact Information
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            If you have questions about this Privacy Policy or how we handle your data, please contact us:
          </p>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '0.75rem',
            border: '1px solid #334155'
          }}>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#e2e8f0', 
              lineHeight: '1.7',
              margin: '0 0 0.5rem 0'
            }}>
              <strong style={{ color: '#f8fafc' }}>Email:</strong>{' '}
              <a 
                href="mailto:jazenfowr@gmail.com"
                style={{ 
                  color: '#3b82f6', 
                  textDecoration: 'none',
                  borderBottom: '1px solid #3b82f6',
                  paddingBottom: '0.125rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#60a5fa'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = '#3b82f6'}
              >
                jazenfowr@gmail.com
              </a>
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.7',
              margin: 0
            }}>
              We typically respond to inquiries within 24-48 hours.
            </p>
          </div>
        </section>

        {/* Changes to This Policy */}
        <section id="changes" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            7. Changes to This Policy
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify users of any material changes by posting the new policy on this page and updating the "Last Updated" date at the top of this document.
          </p>
        </section>

        {/* Footer */}
        <footer style={{ 
          paddingTop: '2rem',
          borderTop: '1px solid #1e293b',
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#64748b',
            margin: 0
          }}>
            © 2026 AIColorAsistant. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}
