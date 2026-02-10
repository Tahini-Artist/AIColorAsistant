import React from 'react';
import PageLayout from './PageLayout';

export default function TermsOfServicePage() {
  const tableOfContents = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'description', title: '2. Description of Service' },
    { id: 'ai-disclaimer', title: '3. AI Performance Disclaimer' },
    { id: 'intellectual-property', title: '4. Intellectual Property' },
    { id: 'liability', title: '5. Limitation of Liability' },
    { id: 'termination', title: '6. Termination' },
    { id: 'governing-law', title: '7. Governing Law' },
    { id: 'contact', title: '8. Contact Information' },
  ];

  return (
    <PageLayout 
      title="Terms of Service"
      subtitle="Effective Date: February 5, 2026"
      tableOfContents={tableOfContents}
    >
      {/* Summary for Humans */}
      <section style={{ 
        padding: '2rem',
        backgroundColor: '#fef3c7',
        borderRadius: '0.75rem',
        border: '1px solid #fde68a',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem',
          color: '#92400e'
        }}>
          Summary for Humans
        </h2>
        <ul style={{ 
          fontSize: '1.125rem',
          color: '#78350f',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          margin: 0
        }}>
          <li style={{ marginBottom: '0.75rem' }}>
            Our tool increases probability of color accuracy but cannot guarantee it due to AI's inherent randomness.
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

      {/* Acceptance of Terms */}
      <section id="acceptance" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          1. Acceptance of Terms
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          By accessing or using AIColorAsistant ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
        </p>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          margin: 0
        }}>
          We reserve the right to modify these Terms at any time. Your continued use of the Service after any changes constitutes acceptance of updated Terms.
        </p>
      </section>

      {/* Description of Service */}
      <section id="description" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          2. Description of Service
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          AIColorAsistant is an AI-powered color extraction and palette generation tool designed to assist artists and creators in their AI art workflows. Our Service allows users to:
        </p>
        <ul style={{ 
          fontSize: '1.125rem',
          color: '#4b5563',
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
          color: '#4b5563', 
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
          color: '#1f2937'
        }}>
          3. AI Performance Disclaimer
        </h2>
        
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: 'rgba(239, 68, 68, 0.08)',
          borderRadius: '0.75rem',
          border: '2px solid #fecaca',
          marginBottom: '1.5rem'
        }}>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#dc2626',
            fontWeight: 'bold',
            margin: 0,
            lineHeight: '1.6'
          }}>
            ⚠️ Important: We do not guarantee that generated color prompts will provide 100% accurate control over third-party AI software outputs.
          </p>
        </div>

        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          AI art generation inherently involves randomness and variability. While our tool is designed to improve the probability of color matching in AI-generated artwork, we cannot guarantee precise color control or specific outcomes.
        </p>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          Factors that may affect AI color accuracy include:
        </p>
        <ul style={{ 
          fontSize: '1.125rem',
          color: '#4b5563',
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
          backgroundColor: '#f3f4f6',
          borderRadius: '0.75rem',
          border: '1px solid #e5e7eb',
          borderLeft: '4px solid #f59e0b'
        }}>
          <p style={{ 
            fontSize: '1rem', 
            color: '#374151', 
            lineHeight: '1.7',
            margin: 0
          }}>
            <strong style={{ color: '#f59e0b' }}>Note:</strong> As third-party AI algorithms continuously evolve and update, the effectiveness of prompts generated by our tool may vary over time. We regularly update our prompt templates to align with current AI model capabilities.
          </p>
        </div>
      </section>

      {/* Intellectual Property */}
      <section id="intellectual-property" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          4. Intellectual Property
        </h2>
        
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '0.75rem',
          color: '#374151'
        }}>
          Your Content
        </h3>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1.5rem'
        }}>
          You retain full ownership and responsibility for all images you upload to our Service. As a local processing tool, we do not store, transmit, or claim any rights to your uploaded content. You are solely responsible for ensuring that you have the necessary rights, permissions, and licenses to use any images you upload.
        </p>

        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '0.75rem',
          color: '#374151'
        }}>
          Our Content
        </h3>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          The Service, including its design, layout, code, color database, and all other content, is owned by AIColorAsistant and is protected by intellectual property laws.
        </p>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
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
          color: '#1f2937'
        }}>
          5. Limitation of Liability
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          To the fullest extent permitted by applicable law, AIColorAsistant shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul style={{ 
          fontSize: '1.125rem',
          color: '#4b5563',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '1rem'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Your access to or use of or inability to access or use the Service
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Any conduct or content of any third party on the Service
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Any content obtained from the Service
          </li>
          <li style={{ marginBottom: '0' }}>
            Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory
          </li>
        </ul>
      </section>

      {/* Termination */}
      <section id="termination" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          6. Termination
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          We reserve the right to terminate or suspend your access to the Service, at our sole discretion, without notice, for any reason, including but not limited to:
        </p>
        <ul style={{ 
          fontSize: '1.125rem',
          color: '#4b5563',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '1rem'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Breach of these Terms
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Violation of applicable laws
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Fraudulent or illegal activity
          </li>
          <li style={{ marginBottom: '0' }}>
            Technical reasons or discontinuation of the Service
          </li>
        </ul>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          margin: 0
        }}>
          Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
        </p>
      </section>

      {/* Governing Law */}
      <section id="governing-law" style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          7. Governing Law
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AIColorAsistant operates, without regard to its conflict of law provisions.
        </p>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          margin: 0
        }}>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
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
          8. Contact Information
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#4b5563', 
          lineHeight: '1.8',
          marginBottom: '1rem'
        }}>
          If you have any questions about these Terms of Service, please contact us:
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
    </PageLayout>
  );
}