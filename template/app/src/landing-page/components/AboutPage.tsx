import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      color: '#0f172a',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* Hero Section */}
        <section style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          padding: '4rem 2rem',
          backgroundColor: '#f0f9ff',
          borderRadius: '1rem',
          border: '1px solid #bae6fd'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#0f172a'
          }}>
            Better Color Control for AI Artists
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b', 
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We built this tool because we discovered that AI art generation tools like Midjourney and Stable Diffusion struggle with precise color control. We provide color reference cards, RGB codes, and professional color names, all converted into AI-ready prompts.
          </p>
        </section>

        {/* Our Story */}
        <section style={{ 
          marginBottom: '4rem',
          padding: '3rem',
          backgroundColor: '#faf5ff',
          borderRadius: '1rem',
          border: '1px solid #e9d5ff'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#0f172a'
          }}>
            Our Story
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#475569', 
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            As AI art enthusiasts ourselves, we faced a frustrating challenge: getting the exact colors we wanted in our AI-generated artwork. We tried countless prompts, experimented with different parameters, and spent hours tweaking settings—yet the colors always felt slightly off.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#475569', 
            lineHeight: '1.8'
          }}>
            That's when we decided to build a "color bridge"—a tool that would translate the colors we see in the real world into language that AI art generators understand. We wanted something simple, powerful, and respectful of user privacy.
          </p>
        </section>

        {/* Key Features */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#0f172a'
          }}>
            Key Features
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem'
          }}>
            
            <div style={{ 
              padding: '2rem', 
              borderRadius: '1rem',
              backgroundColor: '#fef3c7',
              border: '1px solid #fde68a'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#d97706'
              }}>
                Smart Color Extraction
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: '#78350f', 
                lineHeight: '1.6'
              }}>
                Upload any image and our intelligent algorithm extracts the most prominent colors with precision, preserving their proportions and relationships.
              </p>
            </div>

            <div style={{ 
              padding: '2rem', 
              borderRadius: '1rem',
              backgroundColor: '#dcfce7',
              border: '1px solid #bbf7d0'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#16a34a'
              }}>
                Professional Color Naming
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: '#14532d', 
                lineHeight: '1.6'
              }}>
                Every extracted color is matched with artistic color names from a comprehensive database, giving you precise terminology for your creative work.
              </p>
            </div>

            <div style={{ 
              padding: '2rem', 
              borderRadius: '1rem',
              backgroundColor: '#fce7f3',
              border: '1px solid #fbcfe8'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#db2777'
              }}>
                AI-Ready Prompts
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: '#831843', 
                lineHeight: '1.6'
              }}>
                Generate optimized prompts with a single click, complete with color reference cards that AI art generators can understand and reproduce accurately.
              </p>
            </div>

          </div>
        </section>

        {/* Privacy Commitment */}
        <section style={{ 
          padding: '3rem', 
          backgroundColor: '#f0f9ff', 
          borderRadius: '0.75rem',
          border: '1px solid #bae6fd',
          marginBottom: '4rem'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#0369a1'
          }}>
            Privacy Commitment
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#0c4a6e', 
            lineHeight: '1.8',
            fontWeight: '500'
          }}>
            Your images never leave your browser.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#075985', 
            lineHeight: '1.8',
            marginTop: '1rem'
          }}>
            All image processing happens locally on your device. We don't store, upload, or transmit your images to any server. Your creative work remains yours alone.
          </p>
        </section>

        {/* Call to Action */}
        <section style={{ 
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: '#ecfdf5',
          borderRadius: '1rem',
          border: '1px solid #a7f3d0'
        }}>
          <button 
            onClick={() => navigate('/picker_color')}
            style={{ 
              padding: '1rem 2rem', 
              border: 'none', 
              borderRadius: '0.5rem', 
              backgroundColor: '#3b82f6', 
              color: 'white', 
              fontSize: '1.125rem', 
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            Try Color Picker →
          </button>
        </section>

      </div>
    </div>
  );
}
