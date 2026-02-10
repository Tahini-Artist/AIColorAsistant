import React, { useState } from 'react';
import PageLayout from './PageLayout';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const email = 'jazenfowr@gmail.com';

  const tableOfContents = [
    { id: 'email', title: 'Contact Email' },
    { id: 'reasons', title: 'Why Contact Us?' },
    { id: 'response-time', title: 'Response Time' },
    { id: 'help-us', title: 'Help Us Grow' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <PageLayout 
      title="We'd Love to Hear From You"
      tableOfContents={tableOfContents}
    >
      {/* Header */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          We're an indie development team dedicated to optimizing AI art workflows. Your feedback helps us build better tools for the creative community.
        </p>
      </section>

      {/* Email Card */}
      <section 
        id="email"
        style={{ marginBottom: '3rem' }}
      >
        <div style={{ 
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
          borderRadius: '1rem',
          border: '2px solid #c7d2fe',
          textAlign: 'center',
          position: 'relative',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            color: '#6366f1',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Contact Email
          </div>
          
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem'
          }}>
            <a 
              href={`mailto:${email}`}
              style={{ 
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#6366f1',
                textDecoration: 'none',
                wordBreak: 'break-all'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6366f1'}
            >
              {email}
            </a>
            
            <button
              onClick={handleCopyEmail}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4f46e5';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(99, 102, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6366f1';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(99, 102, 241, 0.2)';
              }}
            >
              {copied ? (
                <>
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
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
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>

          {copied && (
            <div style={{ 
              fontSize: '0.875rem',
              color: '#059669',
              fontWeight: '500',
              animation: 'fadeIn 0.3s ease-in-out'
            }}>
              ✓ Email copied to clipboard
            </div>
          )}
        </div>
      </section>

      {/* Contact Reasons */}
      <section 
        id="reasons"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          color: '#1f2937',
          textAlign: 'center'
        }}>
          Why Contact Us?
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          
          {/* Feedback & Suggestions */}
          <div style={{ 
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#eef2ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ color: '#6366f1' }}
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#1f2937'
            }}>
              Feedback & Suggestions
            </h3>
            <p style={{ 
              fontSize: '0.9375rem', 
              color: '#6b7280', 
              lineHeight: '1.6',
              margin: 0
            }}>
              Tell us what features you'd like to see next. Your ideas shape our roadmap.
            </p>
          </div>

          {/* Bug Reports */}
          <div style={{ 
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#fee2e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ color: '#dc2626' }}
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#1f2937'
            }}>
              Bug Reports
            </h3>
            <p style={{ 
              fontSize: '0.9375rem', 
              color: '#6b7280', 
              lineHeight: '1.6',
              margin: 0
            }}>
              Found inaccurate color matching? Send us a screenshot and we'll fix it.
            </p>
          </div>

          {/* Business Inquiries */}
          <div style={{ 
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#f3e8ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ color: '#8b5cf6' }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81-.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#1f2937'
            }}>
              Business Inquiries
            </h3>
            <p style={{ 
              fontSize: '0.9375rem', 
              color: '#6b7280', 
              lineHeight: '1.6',
              margin: 0
            }}>
              Open to partnerships, collaborations, and business opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* Response Time */}
      <section 
        id="response-time"
        style={{ 
          padding: '2rem',
          backgroundColor: '#dbeafe',
          borderRadius: '0.75rem',
          border: '1px solid #bfdbfe',
          textAlign: 'center',
          marginBottom: '3rem'
        }}
      >
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1rem'
        }}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ color: '#2563eb' }}
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span style={{ 
            fontSize: '1.125rem',
            color: '#1e40af',
            fontWeight: '500'
          }}>
            Response Time
          </span>
        </div>
        <p style={{ 
          fontSize: '1rem', 
          color: '#1e3a8a', 
          lineHeight: '1.6',
          margin: 0
        }}>
          We typically respond to all emails within <strong style={{ color: '#1e40af' }}>24-48 hours</strong>. Your feedback matters to us.
        </p>
      </section>

      {/* Help Us Grow */}
      <section 
        id="help-us"
        style={{ 
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
          borderRadius: '1rem',
          border: '1px solid #c7d2fe',
          textAlign: 'center',
          marginBottom: '3rem'
        }}
      >
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ color: '#f59e0b' }}
          >
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2v1" />
            <path d="M12 7a5 5 0 1 0 5 5" />
            <path d="M12 7a5 5 0 1 0-5 5" />
          </svg>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937',
            margin: 0
          }}>
            Help Us Grow
          </h2>
        </div>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          As an indie project, your feedback is our fuel. Is there a specific AI model (like Flux or Adobe Firefly) you want us to optimize for? Or a color palette format you need? Drop us a line!
        </p>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </PageLayout>
  );
}