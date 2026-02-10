/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL?: string;
  readonly VITE_GOOGLE_ANALYTICS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// This is needed to properly support Vitest testing with jest-dom matchers.
// Types for jest-dom are not recognized automatically and Typescript complains
// about missing types e.g. when using `toBeInTheDocument` and other matchers.
// Reference: https://github.com/testing-library/jest-dom/issues/546#issuecomment-1889884843
import "@testing-library/jest-dom";
