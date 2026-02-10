import React from 'react';
import PageLayout from './PageLayout';

export default function PrivacyPolicyPage() {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-collect', title: 'Data We Collect' },
    { id: 'image-processing', title: 'How We Process Images' },
    { id: 'cookies', title: 'Cookies & Advertising' },
    { id: 'security', title: 'Data Security' },
    { id: 'contact', title: 'Contact Information' },
    { id: 'changes', title: 'Changes to Policy' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout 
      title="Privacy Policy"
      subtitle="Last Updated: February 5, 2026"
      tableOfContents={tableOfContents}
    >
      {/* Privacy at a Glance */}
      <section style={{ 
        padding: '2rem',
        backgroundColor: '#d1fae5',
        borderRadius: '0.75rem',
        border: '1px solid #a7f3d0',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem',
          color: '#065f46'
        }}>
          Privacy at a Glance
        </h2>
        <ul style={{ 
          fontSize: '1.0625rem',
          color: '#064e3b',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          margin: 0
        }}>
          <li style={{ marginBottom: '0.75rem' }}>
            ✅ <strong style={{ color: '#065f46' }}>No image uploads.</strong> Your images never leave your device.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            ✅ <strong style={{ color: '#065f46' }}>No account required.</strong> Use our tool without signing up.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            ✅ <strong style={{ color: '#065f46' }}>No selling of personal data.</strong> We don't collect or sell your information.
          </li>
        </ul>
      </section>

      {/* Important Alert */}
      <section style={{ 
        padding: '1.5rem',
        backgroundColor: '#fef3c7',
        borderRadius: '0.75rem',
        border: '2px solid #fde68a',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <p style={{ 
          fontSize: '1.1875rem', 
          color: '#92400e',
          fontWeight: 'bold',
          margin: 0,
          lineHeight: '1.6'
        }}>
          🔒 Your images stay on your device.
        </p>
      </section>

      {/* Introduction */}
      <section 
        id="introduction"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          1. Introduction
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          AIColorAsistant ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our AI color extraction tool. By using our service, you agree to the terms outlined in this policy.
        </p>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8'
        }}>
          We believe in transparency and simplicity. Our core principle is that your creative work belongs to you—and only you.
        </p>
      </section>

      {/* Data We Collect */}
      <section 
        id="data-collect"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          2. Data We Collect (and What We Don't)
        </h2>
        
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '0.75rem',
          color: '#374151'
        }}>
          What We Collect
        </h3>
        <ul style={{ 
          fontSize: '1.0625rem',
          color: '#4b5563',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Anonymous Usage Data:</strong> We use Google Analytics to collect anonymous information about how visitors use our website, such as page views, browser types, and geographic location (based on IP address). This data helps us improve our service and understand user behavior.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Cookies:</strong> We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze traffic patterns.
          </li>
        </ul>

        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '0.75rem',
          color: '#374151'
        }}>
          What We Don't Collect
        </h3>
        <ul style={{ 
          fontSize: '1.0625rem',
          color: '#4b5563',
          lineHeight: '1.8',
          paddingLeft: '1.5rem'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Personal Information:</strong> We do not collect names, email addresses, phone numbers, or any personally identifiable information.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Account Data:</strong> We do not require user registration or account creation.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Image Data:</strong> We do not upload, store, or transmit your images to any server.
          </li>
        </ul>
      </section>

      {/* How We Process Images */}
      <section 
        id="image-processing"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          3. How We Process Images
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          Our color extraction tool operates entirely within your web browser using client-side JavaScript. Here's what happens when you upload an image:
        </p>
        <ol style={{ 
          fontSize: '1.0625rem',
          color: '#4b5563',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '1.25rem'
        }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong style={{ color: '#374151' }}>Local Processing:</strong> Your image is loaded into your browser's memory and analyzed using JavaScript running on your device.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong style={{ color: '#374151' }}>Color Extraction:</strong> The algorithm extracts dominant colors from the image pixels.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong style={{ color: '#374151' }}>Color Matching:</strong> Extracted colors are matched against our local color database to find the closest professional color names.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong style={{ color: '#374151' }}>Result Display:</strong> The color palette and AI prompts are displayed in your browser for you to copy or download.
          </li>
        </ol>
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#fef3c7',
          borderRadius: '0.75rem',
          border: '1px solid #fde68a',
          borderLeft: '4px solid #f59e0b'
        }}>
          <p style={{ 
            fontSize: '1rem', 
            color: '#78350f', 
            lineHeight: '1.7',
            margin: 0
          }}>
            <strong style={{ color: '#92400e' }}>Key Point:</strong> At no point during this process does your image leave your browser or get transmitted to our servers. All processing happens locally on your device.
          </p>
        </div>
      </section>

      {/* Cookies & Third-Party Advertising */}
      <section 
        id="cookies"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          4. Cookies & Third-Party Advertising
        </h2>
        
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '0.75rem',
          color: '#374151'
        }}>
          Our Cookies
        </h3>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.5rem'
        }}>
          We use cookies to improve your experience by remembering your preferences and analyzing site traffic. You can control cookie settings through your browser preferences.
        </p>

        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '0.75rem',
          color: '#374151'
        }}>
          Third-Party Advertising
        </h3>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          We may use third-party advertising services, such as Google AdSense, to display advertisements on our website. These services may use cookies to serve ads based on your prior visits to our website or other websites.
        </p>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8'
        }}>
          Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'none', borderBottom: '1px solid #6366f1', paddingBottom: '0.125rem' }} onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = '#4f46e5'; e.currentTarget.style.color = '#4f46e5'; }} onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = '#6366f1'; e.currentTarget.style.color = '#6366f1'; }}>Google's Ads Settings</a> or the <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'none', borderBottom: '1px solid #6366f1', paddingBottom: '0.125rem', marginLeft: '0.5rem' }} onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = '#4f46e5'; e.currentTarget.style.color = '#4f46e5'; }} onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = '#6366f1'; e.currentTarget.style.color = '#6366f1'; }}>Network Advertising Initiative opt-out page</a>.
        </p>
      </section>

      {/* Data Security */}
      <section 
        id="security"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          5. Data Security
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          Since we do not collect or store your personal information or images, there is minimal risk of data breaches related to user content. However, we take the following measures to protect the data we do collect:
        </p>
        <ul style={{ 
          fontSize: '1.0625rem',
          color: '#4b5563',
          lineHeight: '1.8',
          paddingLeft: '1.5rem'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Secure Hosting:</strong> Our website is hosted on secure servers with SSL encryption.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Analytics Protection:</strong> We configure Google Analytics to anonymize IP addresses and respect user privacy settings.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>No Data Selling:</strong> We never sell, rent, or share your information with third parties for marketing purposes.
          </li>
        </ul>
      </section>

      {/* Contact Information */}
      <section 
        id="contact"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          6. Contact Information
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          If you have questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#dbeafe',
          borderRadius: '0.75rem',
          border: '1px solid #bfdbfe',
          textAlign: 'center'
        }}>
          <a 
            href="mailto:jazenfowr@gmail.com"
            style={{ 
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#2563eb',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#1d4ed8'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#2563eb'}
          >
            jazenfowr@gmail.com
          </a>
        </div>
      </section>

      {/* Changes to Policy */}
      <section 
        id="changes"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          7. Changes to This Policy
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          We may update this Privacy Policy from time to time. When we do, we will:
        </p>
        <ul style={{ 
          fontSize: '1.0625rem',
          color: '#4b5563',
          lineHeight: '1.8',
          paddingLeft: '1.5rem'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Post the updated policy</strong> on this page with a new "Last Updated" date.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: '#374151' }}>Notify users</strong> of significant changes through website notices.
          </li>
        </ul>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8'
        }}>
          Your continued use of our service after any changes constitutes acceptance of the updated policy.
        </p>
      </section>

    </PageLayout>
  );
}