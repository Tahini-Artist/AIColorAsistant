import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: '600'
          }}>
            Effective Date: February 5, 2026
          </p>
        </header>

        {/* Summary for Humans */}
        <section style={{ 
          padding: '2rem',
          backgroundColor: '#1e293b',
          borderRadius: '0.75rem',
          border: '1px solid #334155',
          marginBottom: '3rem'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#f8fafc'
          }}>
            Summary for Humans
          </h2>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#e2e8f0',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.75rem' }}>
              Our tool increases the probability of color accuracy but cannot guarantee it due to AI's inherent randomness.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              We can change or stop the service at any time.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              You are responsible for images you upload.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Your use of this tool is "as is."
            </li>
          </ul>
        </section>

        {/* Table of Contents */}
        <section style={{ 
          padding: '2rem',
          backgroundColor: '#1e293b',
          borderRadius: '0.75rem',
          border: '1px solid #334155',
          marginBottom: '3rem',
          position: 'sticky',
          top: '2rem',
          zIndex: 10
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#f8fafc'
          }}>
            Table of Contents
          </h2>
          <ul style={{ 
            fontSize: '1rem',
            color: '#e2e8f0',
            lineHeight: '2',
            paddingLeft: '1.5rem',
            margin: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#acceptance"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                1. Acceptance of Terms
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#description"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                2. Description of Service
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#ai-disclaimer"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                3. AI Performance Disclaimer
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#intellectual-property"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                4. Intellectual Property
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#liability"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                5. Limitation of Liability
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#termination"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                6. Termination
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a 
                href="#governing-law"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                7. Governing Law
              </a>
            </li>
            <li style={{ marginBottom: '0' }}>
              <a 
                href="#contact"
                style={{ 
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '0.125rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#60a5fa';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                  e.currentTarget.style.color = '#3b82f6';
                }}
              >
                8. Contact Information
              </a>
            </li>
          </ul>
        </section>

        {/* Acceptance of Terms */}
        <section id="acceptance" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            By accessing or using AIColorAsistant ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            We reserve the right to modify these Terms at any time. Your continued use of the Service after any changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        {/* Description of Service */}
        <section id="description" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            2. Description of Service
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            AIColorAsistant is an AI-powered color extraction and palette generation tool designed to assist artists and creators in their AI art workflows. Our Service allows users to:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            marginBottom: '1rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Upload images and extract dominant colors
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Generate professional color names from extracted colors
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Create AI-ready prompts with color reference cards
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Export color palettes in various formats
            </li>
          </ul>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            The Service is provided as a color inspiration and reference tool for AI art generation. We do not generate images ourselves; we provide tools to help you communicate color preferences to third-party AI art generators.
          </p>
        </section>

        {/* AI Performance Disclaimer */}
        <section id="ai-disclaimer" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            3. AI Performance Disclaimer
          </h2>
          
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '0.75rem',
            border: '2px solid #ef4444',
            marginBottom: '1.5rem'
          }}>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#ef4444',
              fontWeight: 'bold',
              margin: 0,
              lineHeight: '1.6'
            }}>
              ⚠️ Important: We do not guarantee that generated color prompts will provide 100% accurate control over third-party AI software outputs.
            </p>
          </div>

          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            AI art generation inherently involves randomness and variability. While our tool is designed to improve the probability of color matching in AI-generated artwork, we cannot guarantee precise color control or specific outcomes.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            Factors that may affect AI color accuracy include:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            marginBottom: '1rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              The specific AI model and version being used (Midjourney, Stable Diffusion, DALL-E, etc.)
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Model settings and parameters chosen by the user
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              The complexity and composition of the prompt
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Model training data and inherent randomness
            </li>
          </ul>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#1e293b',
            borderRadius: '0.75rem',
            border: '1px solid #334155',
            borderLeft: '4px solid #fbbf24'
          }}>
            <p style={{ 
              fontSize: '1rem', 
              color: '#e2e8f0', 
              lineHeight: '1.7',
              margin: 0
            }}>
              <strong style={{ color: '#fbbf24' }}>Note:</strong> As third-party AI algorithms continuously evolve and update, the effectiveness of prompts generated by our tool may vary over time. We regularly update our prompt templates to align with current AI model capabilities.
            </p>
          </div>
        </section>

        {/* Intellectual Property */}
        <section id="intellectual-property" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            4. Intellectual Property
          </h2>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#e2e8f0'
          }}>
            Your Content
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            You retain full ownership and responsibility for all images you upload to our Service. As a local processing tool, we do not store, transmit, or claim any rights to your uploaded content. You are solely responsible for ensuring that you have the necessary rights, permissions, and licenses to use any images you upload.
          </p>

          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            marginBottom: '0.75rem',
            color: '#e2e8f0'
          }}>
            Our Content
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            The Service, including its design, layout, code, color database, and all other content, is owned by AIColorAsistant and is protected by intellectual property laws.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            You may not reproduce, distribute, or create derivative works of our Service without our prior written consent.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section id="liability" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            5. Limitation of Liability
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            To the maximum extent permitted by applicable law, AIColorAsistant shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Service.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            This includes, but is not limited to:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            marginBottom: '1rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Unsatisfactory AI-generated results or color inaccuracies
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Loss of data or interruptions to the Service
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Any errors or defects in the Service
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Any loss of profits, revenue, or business opportunities
            </li>
          </ul>
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
              margin: 0,
              fontWeight: '500'
            }}>
              <strong style={{ color: '#f8fafc' }}>The Service is provided "as is" and "as available" without warranties of any kind, either express or implied.</strong> We make no warranties regarding the accuracy, reliability, or completeness of the Service.
            </p>
          </div>
        </section>

        {/* Termination */}
        <section id="termination" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            6. Termination
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            We reserve the right to modify, suspend, or terminate the Service at any time, with or without prior notice, for any reason, including but not limited to:
          </p>
          <ul style={{ 
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.8',
            paddingLeft: '1.5rem',
            marginBottom: '1rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Technical updates or maintenance
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Changes in business strategy
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Legal or regulatory requirements
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Violation of these Terms by users
            </li>
          </ul>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            Upon termination, your right to use the Service will immediately cease. We shall not be liable to you or any third party for any termination of the Service.
          </p>
        </section>

        {/* Governing Law */}
        <section id="governing-law" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            7. Governing Law
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            margin: 0
          }}>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AIColorAsistant operates, without regard to its conflict of law provisions.
          </p>
        </section>

        {/* Contact Information */}
        <section id="contact" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#f8fafc'
          }}>
            8. Contact Information
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#94a3b8', 
            lineHeight: '1.8',
            marginBottom: '1rem'
          }}>
            If you have questions about these Terms, please contact us:
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
          <Link 
            to="/"
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
            Got it, let's create
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7" />
            </svg>
          </Link>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#64748b',
            margin: '1.5rem 0 0 0'
          }}>
            © 2026 AIColorAsistant. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}
