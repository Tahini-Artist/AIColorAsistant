import { Button } from "../../client/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      <TopGradient />
      <BottomGradient />
      <LeftGradient />
      <RightGradient />
      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="animate-fade-in-up text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-shift">
                Perfect Colors.
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-shift" style={{ animationDelay: '0.5s' }}>
                Every Single Prompt.
              </span>
            </h1>
            <p className="animate-fade-in text-muted-foreground mx-auto max-w-3xl text-base leading-relaxed mb-6" style={{ animationDelay: '0.3s' }}>
              Extract. Define. Control. Professional color names and reference URLs designed to eliminate semantic noise in AI art creation
            </p>
            <div className="animate-fade-in flex items-center justify-center gap-x-6" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-xl border-slate-200/60 bg-white hover:bg-slate-50 hover:shadow-md transition-all duration-300 dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700"
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="default"
                className="rounded-xl bg-primary-500 hover:bg-primary-600 hover:shadow-md transition-all duration-300"
              >
                Get Started <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
          <div className="animate-scale-in mt-6 flex justify-center" style={{ animationDelay: '0.9s' }}>
            <div className="relative w-full max-w-3xl rounded-2xl bg-gradient-to-br from-primary-50 via-white to-accent-50 p-4 shadow-card-hover transition-all duration-300 dark:from-primary-950 dark:via-slate-900 dark:to-accent-950">
              <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md" />
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md" />
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md" />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Extract colors from any image
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Professional naming for AI prompts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopGradient() {
  return (
    <div
      className="absolute right-0 top-0 -z-10 w-full transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-1020/880 w-280 flex-none bg-gradient-to-tr from-primary-400/25 to-accent-300/25 sm:right-1/4 sm:translate-x-1/2"
        style={{
          clipPath:
            "polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)",
        }}
      />
    </div>
  );
}

function BottomGradient() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="relative aspect-1020/880 w-360 bg-gradient-to-br from-accent-400/25 to-primary-300/25 sm:-left-3/4 sm:translate-x-1/4"
        style={{
          clipPath: "ellipse(80% 30% at 80% 50%)",
        }}
      />
    </div>
  );
}

function LeftGradient() {
  return (
    <div
      className="absolute left-0 top-1/4 -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-1020/880 w-200 flex-none bg-gradient-to-br from-purple-400/20 to-pink-300/20"
        style={{
          clipPath: "polygon(30% 10%, 70% 20%, 80% 70%, 30% 90%, 10% 50%)",
        }}
      />
    </div>
  );
}

function RightGradient() {
  return (
    <div
      className="absolute right-0 bottom-1/4 -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-1020/880 w-200 flex-none bg-gradient-to-br from-cyan-400/20 to-blue-300/20"
        style={{
          clipPath: "polygon(20% 10%, 60% 20%, 70% 70%, 20% 90%, 0% 50%)",
        }}
      />
    </div>
  );
}
