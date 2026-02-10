import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('how-it-works');
  const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;

  const sections = [
    { id: 'how-it-works', title: 'How it Works' },
    { id: 'data-source', title: 'Data Source' },
    { id: 'algorithm', title: 'The Algorithm' },
    { id: 'step-by-step', title: 'Step-by-Step Guide' },
    { id: 'why-it-matters', title: 'Why it Matters for AI Art' },
    { id: 'pro-tips', title: 'Pro Tips: Managing Color Ambiguity' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#0f172a', 
      color: '#e2e8f0',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex' }}>
        
        {/* Sidebar Navigation */}
        <aside style={{ 
          position: 'sticky',
          top: '0',
          width: '280px',
          height: '100vh',
          padding: '2rem 1.5rem',
          borderRight: '1px solid #1e293b',
          overflowY: 'auto',
          backgroundColor: '#0f172a'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <Link 
              to="/"
              style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                color: '#3b82f6',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ color: '#60a5fa' }}>←</span> Back to Home
            </Link>
          </div>
          
          <nav>
            <h3 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              color: '#64748b',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Documentation
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sections.map((section) => (
                <li key={section.id} style={{ marginBottom: '0.5rem' }}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.5rem 0.75rem',
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: activeSection === section.id ? '#3b82f6' : '#94a3b8',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      borderRadius: '0.375rem',
                      transition: 'all 0.2s',
                      borderLeft: activeSection === section.id ? '2px solid #3b82f6' : '2px solid transparent',
                      paddingLeft: activeSection === section.id ? '0.5rem' : '0.75rem'
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== section.id) {
                        e.currentTarget.style.color = '#e2e8f0';
                        e.currentTarget.style.backgroundColor = '#1e293b';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== section.id) {
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ 
          flex: 1,
          padding: '4rem 4rem 8rem',
          maxWidth: '900px'
        }}>
          
          {/* How it Works Section */}
          <section id="how-it-works" style={{ marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#f8fafc',
              lineHeight: '1.2'
            }}>
              How it Works
            </h1>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              AIColorAsistant bridges the gap between real-world colors and AI-generated art. Our tool transforms the colors you see in images—photographs, artwork, nature—into precise, AI-ready prompts that art generators like Midjourney and Stable Diffusion can understand and reproduce accurately.
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8'
            }}>
              By extracting dominant colors from any image, matching them with professional color names, and generating optimized prompts with reference cards, we empower artists to maintain precise color control in their AI-generated artwork.
            </p>
          </section>

          {/* Data Source Section */}
          <section id="data-source" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#f8fafc'
            }}>
              Data Source
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              Our color naming system is powered by the open-source <strong>color-name-list</strong> project, specifically the curated "best-of" collection. This comprehensive database contains thousands of carefully named colors, each chosen for its artistic quality and descriptive power.
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              We chose this library because it provides color names with genuine "artistic sensibility" and "descriptive richness"—not just cold, technical hex codes. Instead of generic labels like "dark blue," you get evocative names like "Midnight Blue," "Abyssal Waters," or "After Dark" that carry emotional and visual context.
            </p>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#1e293b',
              borderRadius: '0.75rem',
              border: '1px solid #334155',
              marginBottom: '1.5rem'
            }}>
              <p style={{ 
                fontSize: '1rem', 
                color: '#e2e8f0', 
                lineHeight: '1.7',
                fontStyle: 'italic',
                margin: 0
              }}>
                By leveraging the curated "best-of" collection from the color-name-list community, we ensure that every prompt generated uses evocative, human-friendly language that AI models can better interpret into stunning visuals.
              </p>
            </div>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8'
            }}>
              Access the complete color database at{' '}
              <a 
                href="https://cdn.jsdelivr.net/npm/color-name-list/dist/colornames.bestof.json"
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
                color-name-list (best-of)
              </a>
            </p>
          </section>

          {/* The Algorithm Section */}
          <section id="algorithm" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#f8fafc'
            }}>
              The Algorithm
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              When we extract a color from your image, we need to find the closest match in our color database. We use a <strong>Weighted Euclidean Distance</strong> algorithm rather than simple Euclidean distance because human color perception is not uniform across the RGB spectrum.
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              Research shows that the human eye is more sensitive to green wavelengths and less sensitive to blue wavelengths. To account for this perceptual bias, we apply weighted coefficients to our distance calculation:
            </p>
            
            {/* Formula Display */}
            <div style={{ 
              padding: '2rem',
              backgroundColor: '#1e293b',
              borderRadius: '0.75rem',
              border: '1px solid #334155',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '1.5rem',
                color: '#e2e8f0',
                fontFamily: 'Georgia, serif',
                marginBottom: '1rem'
              }}>
                ΔE = √(2 · ΔR² + 4 · ΔG² + 3 · ΔB²)
              </div>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#64748b',
                margin: 0
              }}>
                Weighted Euclidean Distance formula for color matching
              </p>
            </div>

            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              The coefficients (2 for Red, 4 for Green, 3 for Blue) reflect the relative importance of each channel in human color perception. This weighted approach ensures that the color names we assign align more closely with how humans actually perceive and describe colors.
            </p>

            {/* Code Block Example */}
            <div style={{ 
              marginBottom: '1.5rem'
            }}>
              <div style={{ 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                color: '#64748b',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Algorithm Implementation
              </div>
              <pre style={{ 
                padding: '1.5rem',
                backgroundColor: '#0c1222',
                borderRadius: '0.75rem',
                border: '1px solid #1e293b',
                overflow: 'auto',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: '#e2e8f0',
                margin: 0
              }}>
                <code>{`function findClosestColor(targetRGB, colorDatabase) {
  let minDistance = Infinity;
  let closestColor = null;

  for (const color of colorDatabase) {
    const deltaR = targetRGB.r - color.r;
    const deltaG = targetRGB.g - color.g;
    const deltaB = targetRGB.b - color.b;

    // Weighted Euclidean Distance
    const distance = Math.sqrt(
      2 * deltaR * deltaR +
      4 * deltaG * deltaG +
      3 * deltaB * deltaB
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color;
    }
  }

  return closestColor;
}`}</code>
              </pre>
            </div>

            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8'
            }}>
              <strong>Lightning-fast matching performed locally in your browser</strong>—no server calls, no data transmission, instant results.
            </p>
          </section>

          {/* Step-by-Step Guide Section */}
          <section id="step-by-step" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#f8fafc'
            }}>
              Step-by-Step Guide
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ 
                display: 'flex',
                gap: '1.5rem',
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155'
              }}>
                <div style={{ 
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  1
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    color: '#f8fafc'
                  }}>
                    Upload Image
                  </h3>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#94a3b8', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    Drag and drop or click to upload any image (JPG, PNG, WebP). Our system will analyze the image pixel by pixel to identify dominant colors.
                  </p>
                </div>
              </div>

              <div style={{ 
                display: 'flex',
                gap: '1.5rem',
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155'
              }}>
                <div style={{ 
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  2
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    color: '#f8fafc'
                  }}>
                    Smart Match
                  </h3>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#94a3b8', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    Our weighted algorithm matches each extracted color to the closest professional color name in our database, complete with RGB values and proportions.
                  </p>
                </div>
              </div>

              <div style={{ 
                display: 'flex',
                gap: '1.5rem',
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155'
              }}>
                <div style={{ 
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  3
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    color: '#f8fafc'
                  }}>
                    Export Palette
                  </h3>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#94a3b8', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    Review your color palette with professional names, RGB codes, and proportions. Click any color to generate a 9:16 reference card optimized for AI art generators.
                  </p>
                </div>
              </div>

              <div style={{ 
                display: 'flex',
                gap: '1.5rem',
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155'
              }}>
                <div style={{ 
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  4
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    color: '#f8fafc'
                  }}>
                    Copy AI Prompt
                  </h3>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#94a3b8', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    With one click, copy an optimized AI prompt containing the color name, descriptive hue instructions, and reference card URL—ready to paste into Midjourney, Stable Diffusion, or Jimeng.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Why it Matters Section */}
          <section id="why-it-matters" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#f8fafc'
            }}>
              Why it Matters for AI Art
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              When you prompt AI art generators with technical hex codes like <code style={{ 
                backgroundColor: '#1e293b',
                padding: '0.125rem 0.5rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem',
                color: '#60a5fa'
              }}>#00008B</code>, the model struggles to interpret the emotional and visual context of that color. It's just a number.
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              But when you use evocative color names like <strong>"Midnight Blue"</strong>, <strong>"Abyssal Waters"</strong>, or <strong>"After Dark"</strong>, you're providing rich semantic information that AI models can leverage. These names carry cultural associations, emotional connotations, and visual context that help the AI generate more accurate and aesthetically pleasing results.
            </p>
            
            {/* Comparison Example */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155'
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: '#64748b',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  Without AIColorAsistant
                </div>
                <pre style={{ 
                  backgroundColor: '#0c1222',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#e2e8f0',
                  margin: 0,
                  overflow: 'auto'
                }}>
                  <code>{`"a painting with #00008B sky"`}</code>
                </pre>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#64748b',
                  marginTop: '1rem',
                  margin: '1rem 0 0 0'
                }}>
                  ❌ Technical, emotionless, hard for AI to interpret
                </p>
              </div>

              <div style={{ 
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155'
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: '#64748b',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  With AIColorAsistant
                </div>
                <pre style={{ 
                  backgroundColor: '#0c1222',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#e2e8f0',
                  margin: 0,
                  overflow: 'auto'
                }}>
                  <code>{`"a painting with Midnight Blue sky, --cref ${baseUrl}/color-block/00008b.png"`}</code>
                </pre>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#64748b',
                  marginTop: '1rem',
                  margin: '1rem 0 0 0'
                }}>
                  ✅ Evocative, semantic, AI-ready with reference
                </p>
              </div>
            </div>

            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              The reference card URL (the <code style={{ 
                backgroundColor: '#1e293b',
                padding: '0.125rem 0.5rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem',
                color: '#60a5fa'
              }}>--cref</code> parameter) provides the AI with a visual anchor—a pure color block that precisely represents the hue you want. This combination of descriptive language and visual reference dramatically improves color accuracy in AI-generated artwork.
            </p>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#94a3b8', 
              lineHeight: '1.8'
            }}>
              Professional artists understand this intuitively. When they describe colors, they don't say "RGB(0, 0, 139)"—they say "midnight blue," "cerulean," "indigo." AIColorAsistant brings this artistic language to AI art generation, bridging the gap between human creativity and machine interpretation.
            </p>
          </section>

          {/* Pro Tips Section */}
          <section id="pro-tips" style={{ marginBottom: '4rem' }}>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
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
                fontSize: '1.875rem', 
                fontWeight: 'bold', 
                color: '#f8fafc',
                margin: 0
              }}>
                Pro Tips: Managing Color Ambiguity
              </h2>
            </div>

            {/* Alert Box */}
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#fef3c7',
              borderRadius: '0.75rem',
              border: '1px solid #fde68a',
              marginBottom: '2rem'
            }}>
              <p style={{ 
                fontSize: '1rem', 
                color: '#92400e', 
                lineHeight: '1.7',
                margin: 0,
                fontWeight: '500'
              }}>
                <strong>⚠️ Important:</strong> Some color names in our database (like "Goose Yellow" or "Orange") can trigger "semantic conflicts" in AI models, causing them to generate physical objects (like an actual goose or orange fruit) instead of just the color hue.
              </p>
            </div>

            {/* Understand the Ambiguity */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#f8fafc'
              }}>
                Understand the Ambiguity
              </h3>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#94a3b8', 
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                AI models are trained on vast amounts of text and images. When they encounter a color name that's also a noun for an object (like "Goose Yellow," "Lemon Yellow," or "Apple Red"), they may struggle to distinguish between the <strong>color</strong> and the <strong>object</strong>. This can lead to unexpected results:
              </p>
              <ul style={{ 
                fontSize: '1.125rem', 
                color: '#94a3b8', 
                lineHeight: '1.8',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  "Goose Yellow" → AI generates a yellow goose
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  "Orange" → AI generates an orange fruit
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  "Lemon Yellow" → AI generates a lemon
                </li>
              </ul>
            </div>

            {/* Solution 1: Anchor Phrases */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#f8fafc'
              }}>
                Solution 1: Anchor Phrases
              </h3>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#94a3b8', 
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                Use contextual phrases that explicitly reference the <strong>color property</strong> rather than the object. This helps the AI understand you're talking about a hue, not a physical entity.
              </p>
              <div style={{ 
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155',
                marginBottom: '1rem'
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: '#64748b',
                  marginBottom: '0.75rem',
                  fontWeight: '600'
                }}>
                  Recommended Phrases
                </div>
                <ul style={{ 
                  fontSize: '1rem', 
                  color: '#e2e8f0', 
                  lineHeight: '1.7',
                  paddingLeft: '1.5rem',
                  margin: 0
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"in the style of Goose Yellow hues"</code>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"color palette of Orange"</code>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"with Lemon Yellow tones"</code>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 2: Negative Prompts */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#f8fafc'
              }}>
                Solution 2: Negative Prompts
              </h3>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#94a3b8', 
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                Most AI art generators support negative prompts using the <code style={{ 
                  backgroundColor: '#1e293b',
                  padding: '0.125rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  color: '#60a5fa'
                }}>--no</code> parameter. Explicitly exclude unwanted objects to force the AI to focus on the color aspect.
              </p>
              <div style={{ 
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155',
                marginBottom: '1rem'
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: '#64748b',
                  marginBottom: '0.75rem',
                  fontWeight: '600'
                }}>
                  Negative Prompt Examples
                </div>
                <ul style={{ 
                  fontSize: '1rem', 
                  color: '#e2e8f0', 
                  lineHeight: '1.7',
                  paddingLeft: '1.5rem',
                  margin: 0
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"Goose Yellow --no goose, bird, animal"</code>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"Orange --no fruit, citrus, food"</code>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"Lemon Yellow --no lemon, fruit"</code>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 3: Weight Adjustment */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#f8fafc'
              }}>
                Solution 3: Weight Adjustment (Midjourney)
              </h3>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#94a3b8', 
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                Midjourney supports the <code style={{ 
                  backgroundColor: '#1e293b',
                  padding: '0.125rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  color: '#60a5fa'
                }}>::</code> syntax to adjust token weights. Increase the weight of color names to make them more influential in the generation process.
              </p>
              <div style={{ 
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                borderRadius: '0.75rem',
                border: '1px solid #334155',
                marginBottom: '1rem'
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: '#64748b',
                  marginBottom: '0.75rem',
                  fontWeight: '600'
                }}>
                  Weight Adjustment Examples
                </div>
                <ul style={{ 
                  fontSize: '1rem', 
                  color: '#e2e8f0', 
                  lineHeight: '1.7',
                  paddingLeft: '1.5rem',
                  margin: 0
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"Goose Yellow::2"</code> — <span style={{ color: '#94a3b8' }}>Double weight</span>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"Orange::1.5"</code> — <span style={{ color: '#94a3b8' }}>1.5x weight</span>
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <code style={{ 
                      backgroundColor: '#0c1222',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa'
                    }}>"Lemon Yellow::3 --no lemon::2"</code> — <span style={{ color: '#94a3b8' }}>High color weight, high negative weight</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Do's and Don'ts Comparison */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#f8fafc'
              }}>
                Do's & Don'ts: Practical Examples
              </h3>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {/* Don't */}
                <div style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#450a0a',
                  borderRadius: '0.75rem',
                  border: '1px solid #7f1d1d'
                }}>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
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
                      style={{ color: '#f87171' }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M15 9l-6 6" />
                      <path d="M9 9l6 6" />
                    </svg>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      color: '#fca5a5',
                      fontWeight: '600'
                    }}>
                      Don't
                    </div>
                  </div>
                  <pre style={{ 
                    backgroundColor: '#0c1222',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    margin: '0 0 1rem 0',
                    overflow: 'auto'
                  }}>
                    <code>{`"Goose Yellow sky"`}</code>
                  </pre>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#fca5a5',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    ❌ Might result in a yellow goose in the sky
                  </p>
                </div>

                {/* Do */}
                <div style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#064e3b',
                  borderRadius: '0.75rem',
                  border: '1px solid #065f46'
                }}>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
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
                      style={{ color: '#34d399' }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      color: '#6ee7b7',
                      fontWeight: '600'
                    }}>
                      Do
                    </div>
                  </div>
                  <pre style={{ 
                    backgroundColor: '#0c1222',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    margin: '0 0 1rem 0',
                    overflow: 'auto'
                  }}>
                    <code>{`"Aesthetic color palette of Goose Yellow --no goose"`}</code>
                  </pre>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#6ee7b7',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    ✅ Pure color hue, no goose
                  </p>
                </div>
              </div>

              {/* More Examples */}
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}>
                {/* Don't */}
                <div style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#450a0a',
                  borderRadius: '0.75rem',
                  border: '1px solid #7f1d1d'
                }}>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
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
                      style={{ color: '#f87171' }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M15 9l-6 6" />
                      <path d="M9 9l6 6" />
                    </svg>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      color: '#fca5a5',
                      fontWeight: '600'
                    }}>
                      Don't
                    </div>
                  </div>
                  <pre style={{ 
                    backgroundColor: '#0c1222',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    margin: '0 0 1rem 0',
                    overflow: 'auto'
                  }}>
                    <code>{`"Orange sunset"`}</code>
                  </pre>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#fca5a5',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    ❌ May generate an orange fruit in the sunset
                  </p>
                </div>

                {/* Do */}
                <div style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#064e3b',
                  borderRadius: '0.75rem',
                  border: '1px solid #065f46'
                }}>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
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
                      style={{ color: '#34d399' }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      color: '#6ee7b7',
                      fontWeight: '600'
                    }}>
                      Do
                    </div>
                  </div>
                  <pre style={{ 
                    backgroundColor: '#0c1222',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    margin: '0 0 1rem 0',
                    overflow: 'auto'
                  }}>
                    <code>{`"Orange hues sunset --no fruit, citrus"`}</code>
                  </pre>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#6ee7b7',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    ✅ Pure orange color, no fruit
                  </p>
                </div>
              </div>
            </div>

            {/* Final Tip */}
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
                margin: 0,
                fontWeight: '500'
              }}>
                💡 <strong>Pro Tip:</strong> When using color names that are also object names, always combine <strong>anchor phrases</strong> + <strong>negative prompts</strong> for best results. For example: <code style={{ 
                  backgroundColor: '#0c1222',
                  padding: '0.125rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  color: '#60a5fa'
                }}>"in the style of Goose Yellow hues --no goose, bird"</code>
              </p>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
}
