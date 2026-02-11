import React from 'react';
import PageLayout from './PageLayout';

export default function CookiePolicyPage() {
  const tableOfContents = [
    { id: 'what-are-cookies', title: 'What are Cookies?' },
    { id: 'why-use-cookies', title: 'Why We Use Cookies' },
    { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
    { id: 'table-of-cookies', title: 'Table of Cookies' },
    { id: 'third-party-cookies', title: 'Third-Party Cookies' },
    { id: 'how-to-control-cookies', title: 'How to Control Cookies' },
    { id: 'contact', title: 'Contact Information' },
    { id: 'changes', title: 'Changes to Policy' },
  ];

  return (
    <PageLayout 
      title="Cookie Policy"
      subtitle="Last Updated: February 5, 2026"
      tableOfContents={tableOfContents}
    >

        {/* What are Cookies */}
        <section id="what-are-cookies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            What are Cookies?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            Cookies are small text files that are stored on your device when you visit a website. They serve various purposes, such as remembering your preferences, keeping you logged in, and helping us understand how you use our service.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            margin: 0
          }}>
            Cookies are widely used on the internet and are essential for many websites to function properly. They do not harm your device and contain no viruses or malware.
          </p>
        </section>

        {/* Why We Use Cookies */}
        <section id="why-use-cookies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Why We Use Cookies
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We use cookies to enhance your experience on AIColorAssistant. Specifically, we use them to:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#4b5563',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#374151' }}>Remember your preferences:</strong> Store settings like color palette sizes and display options
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#374151' }}>Analyze traffic:</strong> Understand how visitors use our tool to improve performance
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: '#374151' }}>Deliver relevant ads:</strong> Show advertisements that may be of interest to you
            </li>
            <li style={{ marginBottom: '0' }}>
              <strong style={{ color: '#374151' }}>Maintain security:</strong> Protect against fraudulent activities and ensure site integrity
            </li>
          </ul>
        </section>

        {/* Types of Cookies */}
        <section id="types-of-cookies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Types of Cookies We Use
          </h2>
          
          {/* Essential Cookies */}
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#374151'
            }}>
              Essential Cookies
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#4b5563', 
              lineHeight: '1.8',
              marginBottom: '1rem'
            }}>
              These cookies are necessary for the website to function properly. They enable core functionality such as:
            </p>
            <ul style={{ 
              fontSize: '1.125rem',
              color: '#4b5563',
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
              color: '#6b7280',
              marginTop: '1rem',
              margin: 0
            }}>
              <strong>Note:</strong> These cookies cannot be disabled without affecting the website's functionality.
            </p>
          </div>

          {/* Analytics Cookies */}
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#374151'
            }}>
              Analytics Cookies
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#4b5563', 
              lineHeight: '1.8',
              marginBottom: '1rem'
            }}>
              We use Google Analytics to collect anonymous information about how visitors use our website. This helps us:
            </p>
            <ul style={{ 
              fontSize: '1.125rem',
              color: '#4b5563',
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
              color: '#6b7280',
              marginTop: '1rem',
              margin: 0
            }}>
              <strong>Privacy Note:</strong> Google Analytics collects anonymous data only. We do not collect personal information through analytics cookies.
            </p>
          </div>

          {/* Advertising Cookies */}
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
            borderRadius: '0.75rem',
            border: '2px solid #c7d2fe',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#6366f1'
            }}>
              Advertising Cookies
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#4b5563', 
              lineHeight: '1.8',
              marginBottom: '1rem'
            }}>
              We plan to display advertisements on our website through <strong style={{ color: '#374151' }}>Google AdSense</strong>. As a third-party service, Google may use cookies to:
            </p>
            <ul style={{ 
              fontSize: '1.125rem',
              color: '#4b5563',
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
              backgroundColor: '#ffffff',
              borderRadius: '0.5rem',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ 
                fontSize: '1rem', 
                color: '#374151', 
                lineHeight: '1.7',
                margin: 0
              }}>
                <strong style={{ color: '#f59e0b' }}>Important:</strong> Google, as a third-party provider, controls these cookies and their use. We do not have access to or control over Google's cookie practices.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Cookies */}
        <section id="table-of-cookies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#1f2937'
          }}>
            Table of Cookies
          </h2>
          <div style={{ 
            overflowX: 'auto',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            backgroundColor: '#ffffff'
          }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '1rem'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <th style={{ 
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#1f2937',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Category
                  </th>
                  <th style={{ 
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#1f2937',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Purpose
                  </th>
                  <th style={{ 
                    padding: '1rem',
                    textAlign: 'left',
                    color: '#1f2937',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #e5e7eb'
                  }}>
                    Provider
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ 
                    padding: '1rem',
                    color: '#374151',
                    fontWeight: '500'
                  }}>
                    Necessary
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#4b5563'
                  }}>
                    Site navigation & Security
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#4b5563'
                  }}>
                    AIColorAssistant
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ 
                    padding: '1rem',
                    color: '#374151',
                    fontWeight: '500'
                  }}>
                    Analytics
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#4b5563'
                  }}>
                    Traffic analysis & User behavior
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#4b5563'
                  }}>
                    Google Analytics
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    padding: '1rem',
                    color: '#374151',
                    fontWeight: '500'
                  }}>
                    Advertising
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#4b5563'
                  }}>
                    Personalized ad delivery
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#4b5563'
                  }}>
                    Google AdSense
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Third-party Cookies */}
        <section id="third-party-cookies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Third-Party Cookies
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We may allow third parties, such as Google (for analytics and advertising), to place cookies on your device through our website. These third-party cookies are governed by the respective third parties' privacy policies, not ours.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We do not have control over third-party cookies. For more information about how Google uses cookies, please visit:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#4b5563',
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
                  color: '#6366f1', 
                  textDecoration: 'none',
                  borderBottom: '1px solid #6366f1',
                  paddingBottom: '0.125rem'
                }}
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
                  color: '#6366f1', 
                  textDecoration: 'none',
                  borderBottom: '1px solid #6366f1',
                  paddingBottom: '0.125rem'
                }}
              >
                Google's Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        {/* How to Control Cookies */}
        <section id="how-to-control-cookies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            How to Control Cookies
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser to refuse or delete cookies. If you choose to reject cookies, you may still use our website, but your access to some functionality and features may be restricted.
          </p>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#374151'
          }}>
            Browser Settings
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            Most web browsers allow you to:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#4b5563',
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
            color: '#374151'
          }}>
            Opt-Out of Personalized Advertising
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            If you prefer not to receive personalized advertisements, you can opt out by visiting Google's ad settings:
          </p>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
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
                backgroundColor: '#6366f1',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
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
            color: '#4b5563', 
            lineHeight: '1.8',
            margin: '0 0 1rem 0'
          }}>
            If you are located in the European Union, we are required by law to obtain your consent before placing cookies on your device. When you first visit our website, you will see a cookie banner asking for your consent.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            margin: 0
          }}>
            You can withdraw your consent at any time by adjusting your browser settings or using the opt-out options mentioned above.
          </p>
        </section>

        {/* Contact Information */}
        <section id="contact" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Contact Us
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            If you have questions about our use of cookies, please contact us:
          </p>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb'
          }}>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#374151', 
              lineHeight: '1.7',
              margin: '0 0 0.5rem 0'
            }}>
              <strong style={{ color: '#1f2937' }}>Email:</strong> jazenfowr@gmail.com
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#374151', 
              lineHeight: '1.7',
              margin: 0
            }}>
              <strong style={{ color: '#1f2937' }}>Website:</strong> https://ai-color-assistant.vercel.app
            </p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section id="changes" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Changes to This Policy
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563', 
            lineHeight: '1.8',
            margin: 0
          }}>
            You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
          </p>
        </section>
      </PageLayout>
    );
  }
