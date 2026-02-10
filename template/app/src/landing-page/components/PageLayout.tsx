import React from 'react';
import { Link } from 'react-router-dom';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  tableOfContents: { id: string; title: string }[];
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, tableOfContents, children }: PageLayoutProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#fafbfc', 
      color: '#374151',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', gap: '3rem' }}>
        
        {/* Left Sidebar - Table of Contents */}
        <aside style={{ 
          width: '280px',
          flexShrink: 0,
          position: 'sticky',
          top: '2rem',
          height: 'fit-content',
          maxHeight: 'calc(100vh - 4rem)',
          overflowY: 'auto'
        }}>
          <nav style={{ 
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
          }}>
            <Link 
              to="/"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#6366f1',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                marginBottom: '1.5rem',
                transition: 'all 0.2s',
                fontWeight: '500',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: '#eef2ff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e0e7ff';
                e.currentTarget.style.transform = 'translateX(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#eef2ff';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span>←</span>
              <span>Back Home</span>
            </Link>
            
            <h3 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              color: '#9ca3af',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Contents
            </h3>
            <ul style={{ 
              fontSize: '0.875rem',
              color: '#4b5563',
              lineHeight: '1.75',
              paddingLeft: '0.75rem',
              margin: 0
            }}>
              {tableOfContents.map((item) => (
                <li key={item.id} style={{ marginBottom: '0.25rem' }}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    style={{ 
                      color: '#6366f1',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      display: 'block',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.375rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#eef2ff';
                      e.currentTarget.style.color = '#4f46e5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#6366f1';
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, minWidth: 0 }}>
          <header style={{ marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#1f2937',
              lineHeight: '1.2'
            }}>
              {title}
            </h1>
            {subtitle && (
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#9ca3af',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: '600'
              }}>
                {subtitle}
              </p>
            )}
          </header>

          {children}
        </main>

      </div>
    </div>
  );
}