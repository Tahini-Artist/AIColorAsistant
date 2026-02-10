import React from 'react';
import { Palette } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

export default function FooterNew() {
  const footerLinks = {
    product: [
      { name: 'Image Color Picker', href: '/picker_color' },
      { name: 'Documentation', href: '/docs' }
    ],
    resources: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  return (
    <footer style={{ 
      backgroundColor: '#f8fafc', 
      borderTop: '1px solid #e2e8f0',
      padding: '3rem 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '200px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ 
                width: '2.5rem', 
                height: '2.5rem', 
                background: 'linear-gradient(to bottom right, #3b82f6, #60a5fa)', 
                borderRadius: '0.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <Palette style={{ width: '1.5rem', height: '1.5rem', color: '#ffffff' }} />
              </div>
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
              AIColorAsistant
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Transform images into AI-ready color palettes.
            </p>
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.product.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{ 
                      color: '#64748b', 
                      textDecoration: 'none', 
                      fontSize: '0.875rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.resources.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{ 
                      color: '#64748b', 
                      textDecoration: 'none', 
                      fontSize: '0.875rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.legal.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{ 
                      color: '#64748b', 
                      textDecoration: 'none', 
                      fontSize: '0.875rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', marginTop: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Copyright © 2026 AIColorAsistant. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
