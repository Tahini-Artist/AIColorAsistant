import React from 'react';
import { Link } from 'react-router-dom';

export default function CookiePolicyPage() {
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
            Cookie Policy
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

        {/* What are Cookies */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            What are Cookies?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            Cookies are small text files that are stored on your device when you visit a website. They serve various purposes, such as remembering your preferences, keeping you logged in, and helping us understand how you use our service.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            Cookies are widely used on the internet and are essential for many websites to function properly. They do not harm your device and contain no viruses or malware.
          </p>
        </section>

        {/* Why We Use Cookies */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            Why We Use Cookies
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We use cookies to enhance your experience on AIColorAsistant. Specifically, we use them to:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Remember your preferences:</strong> Store settings like color palette sizes and display options
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Analyze traffic:</strong> Understand how visitors use our tool to improve performance
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#e2e8f0' }}>Deliver relevant ads:</strong> Show advertisements that may be of interest to you
            </li>
            <li style={{ marginBottom: '0' }}>
              <strong style={{ color: '#e2e8f0' }}>Maintain security:</strong> Protect against fraudulent activities and ensure site integrity
            </li>
          </ul>
        </section>

        {/* Types of Cookies */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            Types of Cookies We Use
          </h2>
          
          {/* Essential Cookies */}
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '0.75rem',
            border: '1px solid #334155',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#e2e8f0'
            }}>
              Essential Cookies
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1rem'
            }}>
              These cookies are necessary for the website to function properly. They enable core functionality such as:
            </p>
            <ul style={{ 
              fontSize: '1.125rem',
              color: '#94a3b8',
              lineHeight: '1.8',
              paddingLeft: '1.5rem',
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                Site navigation and security
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Remembering your local preferences (e.g., color palette size)
              </li>
              <li style={{ marginBottom: '0' }}>
                Accessing secure areas of the website
              </li>
            </ul>
            <p style={{ 
              fontSize: '1rem', 
              color: '#64748b',
              marginTop: '1rem',
              margin: 0
            }}>
              <strong>Note:</strong> These cookies cannot be disabled without affecting the website's functionality.
            </p>
          </div>

          {/* Analytics Cookies */}
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '0.75rem',
            border: '1px solid #334155',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#e2e8f0'
            }}>
              Analytics Cookies
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1rem'
            }}>
              We use Google Analytics to collect anonymous information about how visitors use our website. This helps us:
            </p>
            <ul style={{ 
              fontSize: '1.125rem',
              color: '#94a3b8',
              lineHeight: '1.8',
              paddingLeft: '1.5rem',
              marginBottom: '1rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                Understand which pages are most popular
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Analyze user behavior and traffic patterns
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Identify and fix performance issues
              </li>
              <li style={{ marginBottom: '0' }}>
                Improve our tool's features and user experience
              </li>
            </ul>
            <p style={{ 
              fontSize: '1rem', 
              color: '#64748b',
              marginTop: '1rem',
              margin: 0
            }}>
              <strong>Privacy Note:</strong> Google Analytics collects anonymous data only. We do not collect personal information through analytics cookies.
            </p>
          </div>

          {/* Advertising Cookies */}
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '0.75rem',
            border: '2px solid #3b82f6',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#3b82f6'
            }}>
              Advertising Cookies
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1rem'
            }}>
              We plan to display advertisements on our website through <strong style={{ color: '#e2e8f0' }}>Google AdSense</strong>. As a third-party service, Google may use cookies to:
            </p>
            <ul style={{ 
              fontSize: '1.125rem',
              color: '#94a3b8',
              lineHeight: '1.8',
              paddingLeft: '1.5rem',
              marginBottom: '1rem'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                Deliver personalized advertisements based on your interests
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Track ad performance and effectiveness
              </li>
              <li style={{ marginBottom: '0' }}>
                Serve ads based on your visits to this website and other websites
              </li>
            </ul>
            <div style={{ 
              padding: '1rem',
              backgroundColor: '#0f172a',
              borderRadius: '0.5rem',
              border: '1px solid #334155'
            }}>
              <p style={{ 
                fontSize: '1rem', 
                color: '#e2e8f0', 
                lineHeight: '1.7',
                margin: 0
              }}>
                <strong style={{ color: '#fbbf24' }}>Important:</strong> Google, as a third-party provider, controls these cookies and their use. We do not have access to or control over Google's cookie practices.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Cookies */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#f8fafc'
          }}>
            Table of Cookies
          </h2>
          <div style={{ 
            overflowX: 'auto',
            borderRadius: '0.75rem',
            border: '1px solid #334155',
            backgroundColor: '#1e293b'
          }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '1rem'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#0f172a' }}>
                  <th style={{ 
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#f8fafc',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #334155'
                  }}>
                    Category
                  </th>
                  <th style={{ 
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#f8fafc',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #334155'
                  }}>
                    Purpose
                  </th>
                  <th style={{ 
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#f8fafc',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #334155'
                  }}>
                    Provider
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #334155' }}>
                  <td style={{ 
                    padding: '1rem',
                    color: '#e2e8f0',
                    fontWeight: '500'
                  }}>
                    Necessary
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#94a3b8'
                  }}>
                    Site navigation & Security
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#94a3b8'
                  }}>
                    AIColorAsistant
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #334155' }}>
                  <td style={{ 
                    padding: '1rem',
                    color: '#e2e8f0',
                    fontWeight: '500'
                  }}>
                    Analytics
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#94a3b8'
                  }}>
                    Traffic analysis & User behavior
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#94a3b8'
                  }}>
                    Google Analytics
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    padding: '1rem',
                    color: '#e2e8f0',
                    fontWeight: '500'
                  }}>
                    Advertising
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#94a3b8'
                  }}>
                    Personalized ad delivery
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#94a3b8'
                  }}>
                    Google AdSense
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Third-party Cookies */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            Third-Party Cookies
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We may allow third parties, such as Google (for analytics and advertising), to place cookies on your device through our website. These third-party cookies are governed by the respective third parties' privacy policies, not ours.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We do not have control over third-party cookies. For more information about how Google uses cookies, please visit:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#3b82f6', 
                  textDecoration: 'none',
                  borderBottom: '1px solid #3b82f6',
                  paddingBottom: '0.125rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#60a5fa'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = '#3b82f6'}
              >
                Google's Cookie Policy
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#3b82f6', 
                  textDecoration: 'none',
                  borderBottom: '1px solid #3b82f6',
                  paddingBottom: '0.125rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#60a5fa'}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = '#3b82f6'}
              >
                Google's Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        {/* How to Control Cookies */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            How to Control Cookies
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser to refuse or delete cookies. If you choose to reject cookies, you may still use our website, but your access to some functionality and features may be restricted.
          </p>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#e2e8f0'
          }}>
            Browser Settings
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            Most web browsers allow you to:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            marginBottom: '1rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              View what cookies are stored and delete them individually
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Block third-party cookies
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Delete all cookies when you close your browser
            </li>
            <li style={{ marginBottom: '0' }}>
              Block cookies from specific websites
            </li>
          </ul>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            marginTop: '1.5rem',
            color: '#e2e8f0'
          }}>
            Opt-Out of Personalized Advertising
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            If you prefer not to receive personalized advertisements, you can opt out by visiting Google's ad settings:
          </p>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '0.75rem',
            border: '1px solid #334155',
            textAlign: 'center'
          }}>
            <a 
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0-5-5" />
                <polyline points="12 17 5 17 5 12" />
              </svg>
              Google Ad Settings
            </a>
          </div>
        </section>

        {/* Cookie Banner Notice */}
        <section style={{ 
          padding: '2rem',
          backgroundColor: 'rgba(251, 191, 36, 0.1)',
          borderRadius: '0.75rem',
          border: '1px solid #fbbf24',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
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
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <path d="M12 16v-4" />
              <path d="M12 8v4" />
              <path d="M4.93 4.93a1 1 0 0 0-1.41 1.41" />
              <path d="M19.07 4.93a1 1 0 0 0-1.41 1.41" />
            </svg>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              color: '#fbbf24',
              margin: 0
            }}>
              Important for EU Users
            </h3>
          </div>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: '0 0 1rem 0'
          }}>
            If you are located in the European Union, we are required by law to obtain your consent before placing cookies on your device. When you first visit our website, you will see a cookie banner asking for your consent.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            You can withdraw your consent at any time by adjusting your browser settings or using the opt-out options mentioned above.
          </p>
        </section>

        {/* Contact Information */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            Contact Us
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            If you have questions about our use of cookies, please contact us:
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

        {/* Footer */}
        <footer style={{ 
          paddingTop: '2rem',
          borderTop: '1px solid #1e293b',
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: '1rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            For more information, please visit our{' '}
            <Link 
              to="/privacy"
              style={{ 
                color: '#3b82f6', 
                textDecoration: 'none',
                borderBottom: '1px solid #3b82f6',
                paddingBottom: '0.125rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#60a5fa'}
              onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = '#3b82f6'}
            >
                Privacy Policy
              </Link>.
          </p>
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
