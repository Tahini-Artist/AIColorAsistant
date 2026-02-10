declare module 'react-dom/client' {
  export function createRoot(container: Element | Document): import('react-dom/client').Root;
  export interface Root {
    render(children: import('react').ReactNode): void;
    unmount(): void;
  }
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL?: string;
  readonly VITE_GOOGLE_ANALYTICS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
