import HighlightedFeature from "./components/HighlightedFeature";

export default function AIReady() {
  return (
    <HighlightedFeature
      name="Professional Color Naming"
      description="Extract colors from any image and get professional color names perfect for AI art prompts. Eliminate semantic noise and achieve consistent, stunning results."
      highlightedComponent={<AIReadyExample />}
      direction="row-reverse"
    />
  );
}

const AIReadyExample = () => {
  return (
    <div className="w-full animate-fade-in">
      <div className="relative rounded-2xl bg-gradient-to-br from-primary-50 via-white to-accent-50 p-4 shadow-card-hover transition-all duration-300 dark:from-primary-950 dark:via-slate-900 dark:to-accent-950">
        <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800">
          <div className="grid grid-cols-4 gap-2 mb-3">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-sm" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 shadow-sm" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-sm" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">Royal Blue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">Amethyst</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">Rose Quartz</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">Sunset Orange</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
