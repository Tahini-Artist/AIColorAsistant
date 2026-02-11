import React, { useState } from 'react';
import PageLayout from './PageLayout';

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('how-it-works');

  const tableOfContents = [
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
    <PageLayout 
      title="Documentation"
      tableOfContents={tableOfContents}
    >
      {/* How it Works Section */}
      <section id="how-it-works" style={{ marginBottom: '3rem' }}>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          AIColorAssistant bridges the gap between real-world colors and AI-generated art. Our tool transforms colors you see in images—photographs, artwork, nature—into precise, AI-ready prompts that art generators like Midjourney and Stable Diffusion can understand and reproduce accurately.
        </p>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8'
        }}>
          By extracting dominant colors from any image, matching them with professional color names, and generating optimized prompts with reference cards, we empower artists to maintain precise color control in their AI-generated artwork.
        </p>
      </section>

      {/* Data Source Section */}
      <section id="data-source" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          Data Source
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          Our color naming system is powered by the open-source <strong>color-name-list</strong> project, specifically the curated "best-of" collection. This comprehensive database contains thousands of carefully named colors, each chosen for its artistic quality and descriptive power.
        </p>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          We chose this library because it provides color names with genuine "artistic sensibility" and "descriptive richness"—not just cold, technical hex codes. Instead of generic labels like "dark blue," you get evocative names like "Midnight Blue," "Abyssal Waters," or "After Dark" that carry emotional and visual context.
        </p>
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#fef3c7',
          borderRadius: '0.75rem',
          border: '1px solid #fde68a',
          marginBottom: '1.25rem'
        }}>
          <p style={{ 
            fontSize: '1rem', 
            color: '#92400e', 
            lineHeight: '1.7',
            fontStyle: 'italic',
            margin: 0
          }}>
            By leveraging the curated "best-of" collection from the color-name-list community, we ensure that every prompt generated uses evocative, human-friendly language that AI models can better interpret into stunning visuals.
          </p>
        </div>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8'
        }}>
          Access the complete color database at{' '}
          <a 
            href="https://cdn.jsdelivr.net/npm/color-name-list/dist/colornames.bestof.json"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: '#6366f1',
              textDecoration: 'none',
              borderBottom: '1px solid #6366f1',
              paddingBottom: '0.125rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = '#4f46e5';
              e.currentTarget.style.color = '#4f46e5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = '#6366f1';
              e.currentTarget.style.color = '#6366f1';
            }}
          >
            color-name-list (best-of)
          </a>
        </p>
      </section>

      {/* The Algorithm Section */}
      <section id="algorithm" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          The Algorithm
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          When we extract a color from your image, we need to find the closest match in our color database. We use a <strong>Weighted Euclidean Distance</strong> algorithm rather than simple Euclidean distance because human color perception is not uniform across the RGB spectrum.
        </p>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          Research shows that the human eye is more sensitive to green wavelengths and less sensitive to blue wavelengths. To account for this perceptual bias, we apply weighted coefficients to our distance calculation:
        </p>
        
        {/* Formula Display */}
        <div style={{ 
          padding: '2rem',
          backgroundColor: '#eef2ff',
          borderRadius: '0.75rem',
          border: '1px solid #c7d2fe',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ 
            fontSize: '1.5rem',
            color: '#4f46e5',
            fontFamily: 'Georgia, serif',
            marginBottom: '1rem'
          }}>
            ΔE = √(2 · ΔR² + 4 · ΔG² + 3 · ΔB²)
          </div>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#6366f1',
            margin: 0
          }}>
            Weighted Euclidean Distance formula for color matching
          </p>
        </div>

        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          The coefficients (2 for Red, 4 for Green, 3 for Blue) reflect the relative importance of each channel in human color perception. This weighted approach ensures that the color names we assign align more closely with how humans actually perceive and describe colors.
        </p>

        {/* Code Block Example */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            color: '#9ca3af',
            marginBottom: '0.5rem',
            fontWeight: '600'
          }}>
            Algorithm Implementation
          </div>
          <pre style={{ 
            padding: '1.5rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            overflow: 'auto',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            color: '#374151',
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
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8'
        }}>
          <strong>Lightning-fast matching performed locally in your browser</strong>—no server calls, no data transmission, instant results.
        </p>
      </section>

      {/* Step-by-Step Guide Section */}
      <section id="step-by-step" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem',
          color: '#1f2937'
        }}>
          Step-by-Step Guide
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div style={{ 
            display: 'flex',
            gap: '1.25rem',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ 
              flexShrink: 0,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
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
                fontSize: '1.125rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#1f2937'
              }}>
                Upload Image
              </h3>
              <p style={{ 
                fontSize: '0.9375rem', 
                color: '#6b7280', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Drag and drop or click to upload any image (JPG, PNG, WebP). Our system will analyze the image pixel by pixel to identify dominant colors.
              </p>
            </div>
          </div>

          <div style={{ 
            display: 'flex',
            gap: '1.25rem',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ 
              flexShrink: 0,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
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
                fontSize: '1.125rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#1f2937'
              }}>
                Smart Match
              </h3>
              <p style={{ 
                fontSize: '0.9375rem', 
                color: '#6b7280', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Our weighted algorithm matches each extracted color to the closest professional color name in our database, complete with RGB values and proportions.
              </p>
            </div>
          </div>

          <div style={{ 
            display: 'flex',
            gap: '1.25rem',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ 
              flexShrink: 0,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
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
                fontSize: '1.125rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#1f2937'
              }}>
                Export Palette
              </h3>
              <p style={{ 
                fontSize: '0.9375rem', 
                color: '#6b7280', 
                lineHeight: '1.6',
                margin: 0
              }}>
                Review your color palette with professional names, RGB codes, and proportions. Click any color to generate a 9:16 reference card optimized for AI art generators.
              </p>
            </div>
          </div>

          <div style={{ 
            display: 'flex',
            gap: '1.25rem',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ 
              flexShrink: 0,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
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
                fontSize: '1.125rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#1f2937'
              }}>
                Copy AI Prompt
              </h3>
              <p style={{ 
                fontSize: '0.9375rem', 
                color: '#6b7280', 
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
      <section id="why-it-matters" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          Why it Matters for AI Art
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          When you prompt AI art generators with technical hex codes like <code style={{ 
            backgroundColor: '#f3f4f6',
            padding: '0.125rem 0.5rem',
            borderRadius: '0.25rem',
            fontSize: '0.875rem',
            color: '#6366f1'
          }}>#FF6B6B</code>, the AI interprets these as raw numerical values without artistic context. The result is often unpredictable and rarely matches your vision.
        </p>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          However, when you use evocative color names like "Coral Sunset" or "Velvet Rose," AI models trained on artistic language can better understand the <strong>emotional quality</strong> and <strong>visual character</strong> you're trying to achieve. The color name becomes part of the artistic narrative, not just a technical specification.
        </p>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          Combined with our color reference cards, which provide a visual anchor for the AI to reference, you dramatically increase the probability of achieving your desired color outcome. This is especially valuable for:
        </p>
        <ul style={{ 
          fontSize: '1.0625rem',
          color: '#4b5563',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '1.25rem'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Brand color consistency across AI-generated assets
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Recreating specific color palettes from reference images
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Matching colors from photography to AI-generated illustrations
          </li>
          <li style={{ marginBottom: '0' }}>
            Achieving precise color grading in AI-generated scenes
          </li>
        </ul>
      </section>

      {/* Pro Tips Section */}
      <section id="pro-tips" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '1.25rem',
          color: '#1f2937'
        }}>
          Pro Tips: Managing Color Ambiguity
        </h2>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.25rem'
        }}>
          Even with our sophisticated matching algorithm, some colors can be ambiguous. Here are some tips to get the best results:
        </p>
        
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#fce7f3',
          borderRadius: '0.75rem',
          border: '1px solid #fbcfe8',
          marginBottom: '1.25rem'
        }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#9d174d'
          }}>
            1. Use Reference Images with Clear Colors
          </h3>
          <p style={{ 
            fontSize: '0.9375rem', 
            color: '#831843', 
            lineHeight: '1.6',
            margin: 0
          }}>
            Images with well-defined, saturated colors produce more accurate matches. Avoid highly desaturated or muddy images when possible.
          </p>
        </div>

        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#d1fae5',
          borderRadius: '0.75rem',
          border: '1px solid #a7f3d0',
          marginBottom: '1.25rem'
        }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#065f46'
          }}>
            2. Review Multiple Color Options
          </h3>
          <p style={{ 
            fontSize: '0.9375rem', 
            color: '#064e3b', 
            lineHeight: '1.6',
            margin: 0
          }}>
            Our tool shows you the dominant colors from your image. If one color doesn't match your vision, try another from the palette or upload a different reference image.
          </p>
        </div>

        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#fef3c7',
          borderRadius: '0.75rem',
          border: '1px solid #fde68a',
          marginBottom: '1.25rem'
        }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#92400e'
          }}>
            3. Combine Color Names with Descriptive Prompts
          </h3>
          <p style={{ 
            fontSize: '0.9375rem', 
            color: '#78350f', 
            lineHeight: '1.6',
            margin: 0
          }}>
            Use the generated color name as a foundation, then add your own descriptive elements. For example: "in a Coral Sunset color scheme, with warm lighting and soft shadows."
          </p>
        </div>

        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#e0e7ff',
          borderRadius: '0.75rem',
          border: '1px solid #c7d2fe'
        }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#3730a3'
          }}>
            4. Test and Iterate
          </h3>
          <p style={{ 
            fontSize: '0.9375rem', 
            color: '#312e81', 
            lineHeight: '1.6',
            margin: 0
          }}>
            AI art generation is iterative. Generate multiple variations, compare the color outcomes, and refine your prompts. Our tool makes it easy to experiment with different color references.
          </p>
        </div>
      </section>

    </PageLayout>
  );
}