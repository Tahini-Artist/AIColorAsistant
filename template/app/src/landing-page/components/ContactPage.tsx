import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const email = 'jazenfowr@gmail.com';

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
    <div style={{ 
      backgroundColor: '#0f172a', 
      color: '#e2e8f0',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* Header */}
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#f8fafc',
            lineHeight: '1.2'
          }}>
            We'd Love to Hear From You
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We're an indie development team dedicated to optimizing AI art workflows. Your feedback helps us build better tools for the creative community.
          </p>
        </section>

        {/* Email Card */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ 
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            borderRadius: '1rem',
            border: '2px solid',
            borderImage: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) 1',
            textAlign: 'center',
            position: 'relative',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              color: '#64748b',
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
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: '#3b82f6',
                  textDecoration: 'none',
                  wordBreak: 'break-all'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#3b82f6'}
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
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
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
                color: '#34d399',
                fontWeight: '500',
                animation: 'fadeIn 0.3s ease-in-out'
              }}>
                ✓ Email copied to clipboard
              </div>
            )}
          </div>
        </section>

        {/* Contact Reasons */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '2rem',
            color: '#f8fafc',
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
              backgroundColor: '#1e293b',
              borderRadius: '0.75rem',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
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
                  style={{ color: '#3b82f6' }}
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '0.75rem',
                color: '#f8fafc'
              }}>
                Feedback & Suggestions
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: '#94a3b8', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Tell us what features you'd like to see next. Your ideas shape our roadmap.
              </p>
            </div>

            {/* Bug Reports */}
            <div style={{ 
              padding: '2rem',
              backgroundColor: '#1e293b',
              borderRadius: '0.75rem',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
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
                  style={{ color: '#ef4444' }}
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '0.75rem',
                color: '#f8fafc'
              }}>
                Bug Reports
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: '#94a3b8', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Found inaccurate color matching? Send us a screenshot and we'll fix it.
              </p>
            </div>

            {/* Business Inquiries */}
            <div style={{ 
              padding: '2rem',
              backgroundColor: '#1e293b',
              borderRadius: '0.75rem',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
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
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '0.75rem',
                color: '#f8fafc'
              }}>
                Business Inquiries
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: '#94a3b8', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Open to partnerships, collaborations, and business opportunities.
              </p>
            </div>

          </div>
        </section>

        {/* Response Time */}
        <section style={{ 
          padding: '2rem',
          backgroundColor: '#1e293b',
          borderRadius: '0.75rem',
          border: '1px solid #334155',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
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
              style={{ color: '#60a5fa' }}
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span style={{ 
              fontSize: '1.125rem',
              color: '#e2e8f0',
              fontWeight: '500'
            }}>
              Response Time
            </span>
          </div>
          <p style={{ 
            fontSize: '1rem', 
            color: '#94a3b8', 
            lineHeight: '1.6',
            margin: 0
          }}>
            We typically respond to all emails within <strong style={{ color: '#f8fafc' }}>24-48 hours</strong>. Your feedback matters to us.
          </p>
        </section>

        {/* Help Us Grow */}
        <section style={{ 
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
          borderRadius: '1rem',
          border: '1px solid #334155',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
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
              style={{ color: '#fbbf24' }}
            >
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2v1" />
              <path d="M12 7a5 5 0 1 0 5 5" />
              <path d="M12 7a5 5 0 0 1-5 5" />
            </svg>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#f8fafc',
              margin: 0
            }}>
              Help Us Grow
            </h2>
          </div>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            As an indie project, your feedback is our fuel. Is there a specific AI model (like Flux or Adobe Firefly) you want us to optimize for? Or a color palette format you need? Drop us a line!
          </p>
        </section>

        {/* Back to Home */}
        <section style={{ textAlign: 'center' }}>
          <Link 
            to="/"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#1e293b',
              color: '#e2e8f0',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              border: '1px solid #334155'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#334155';
              e.currentTarget.style.borderColor = '#475569';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1e293b';
              e.currentTarget.style.borderColor = '#334155';
            }}
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

      </div>
    </div>
  );
}
