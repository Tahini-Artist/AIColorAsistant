import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout';

export default function AboutPage() {
  const navigate = useNavigate();

  const tableOfContents = [
    { id: 'hero', title: 'Overview' },
    { id: 'story', title: 'Our Story' },
    { id: 'features', title: 'Key Features' },
    { id: 'privacy', title: 'Privacy Commitment' },
  ];

  return (
    <PageLayout 
      title="Better Color Control for AI Artists"
      tableOfContents={tableOfContents}
    >
      {/* Hero Section */}
      <section 
        id="hero"
        style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          padding: '3rem 2rem',
          backgroundColor: '#eef2ff',
          borderRadius: '1rem',
          border: '1px solid #c7d2fe'
        }}
      >
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4f46e5', 
          lineHeight: '1.8',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          We built this tool because we discovered that AI art generation tools like Midjourney and Stable Diffusion struggle with precise color control. We provide color reference cards, RGB codes, and professional color names, all converted into AI-ready prompts.
        </p>
      </section>

      {/* Our Story */}
      <section 
        id="story"
        style={{ 
          marginBottom: '3rem',
          padding: '2.5rem',
          backgroundColor: '#fef3c7',
          borderRadius: '1rem',
          border: '1px solid #fde68a'
        }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          Our Story
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          As AI art enthusiasts ourselves, we faced a frustrating challenge: getting exact colors we wanted in our AI-generated artwork. We tried countless prompts, experimented with different parameters, and spent hours tweaking settings—yet colors always felt slightly off.
        </p>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8'
        }}>
          That's when we decided to build a "color bridge"—a tool that would translate colors we see in the real world into language that AI art generators understand. We wanted something simple, powerful, and respectful of user privacy.
        </p>
      </section>

      {/* Key Features */}
      <section 
        id="features"
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem',
          color: '#1f2937'
        }}>
          Key Features
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem'
        }}>
          
          <div style={{ 
            padding: '1.75rem', 
            borderRadius: '1rem',
            backgroundColor: '#d1fae5',
            border: '1px solid #a7f3d0'
          }}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '0.875rem',
              color: '#059669'
            }}>
              Smart Color Extraction
            </h3>
            <p style={{ 
              fontSize: '0.9375rem', 
              color: '#065f46', 
              lineHeight: '1.6'
            }}>
              Upload any image and our intelligent algorithm extracts most prominent colors with precision, preserving their proportions and relationships.
            </p>
          </div>

          <div style={{ 
            padding: '1.75rem', 
            borderRadius: '1rem',
            backgroundColor: '#fce7f3',
            border: '1px solid #fbcfe8'
          }}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '0.875rem',
              color: '#db2777'
            }}>
              Professional Color Naming
            </h3>
            <p style={{ 
              fontSize: '0.9375rem', 
              color: '#9d174d', 
              lineHeight: '1.6'
            }}>
              Every extracted color is matched with artistic color names from a comprehensive database, giving you precise terminology for your creative work.
            </p>
          </div>

          <div style={{ 
            padding: '1.75rem', 
            borderRadius: '1rem',
            backgroundColor: '#e0e7ff',
            border: '1px solid #c7d2fe'
          }}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '0.875rem',
              color: '#4f46e5'
            }}>
              AI-Ready Prompts
            </h3>
            <p style={{ 
              fontSize: '0.9375rem', 
              color: '#3730a3', 
              lineHeight: '1.6'
            }}>
              Generate optimized prompts with a single click, complete with color reference cards that AI art generators can understand and reproduce accurately.
            </p>
          </div>

        </div>
      </section>

      {/* Privacy Commitment */}
      <section 
        id="privacy"
        style={{ 
          padding: '2.5rem', 
          backgroundColor: '#dbeafe', 
          borderRadius: '1rem',
          border: '1px solid #bfdbfe',
          marginBottom: '3rem'
        }}
      >
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1e40af'
        }}>
          Privacy Commitment
        </h2>
        <p style={{ 
          fontSize: '1.1875rem', 
          color: '#1e3a8a', 
          lineHeight: '1.8',
          fontWeight: '600',
          marginBottom: '0.75rem'
        }}>
          Your images never leave your browser.
        </p>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#1e40af', 
          lineHeight: '1.8'
        }}>
          All image processing happens locally on your device. We don't store, upload, or transmit your images to any server. Your creative work remains yours alone.
        </p>
      </section>

      {/* Call to Action */}
      <section style={{ 
        textAlign: 'center',
        padding: '2.5rem',
        backgroundColor: '#d1fae5',
        borderRadius: '1rem',
        border: '1px solid #a7f3d0'
      }}>
        <button 
          onClick={() => navigate('/picker_color')}
          style={{ 
            padding: '0.875rem 1.75rem', 
            border: 'none', 
            borderRadius: '0.5rem', 
            backgroundColor: '#6366f1', 
            color: 'white', 
            fontSize: '1.0625rem', 
            fontWeight: '600',
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
          Try Color Picker →
        </button>
      </section>
    </PageLayout>
  );
}