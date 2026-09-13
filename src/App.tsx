import InteractiveNebulaShader from "@/components/ui/liquid-shader";
import Logo from "@/components/Logo";

export default function App() {
  return (
    <main className="relative h-full w-full overflow-hidden">
      <InteractiveNebulaShader className="scale-x-[-1]" />
      <div className="scrim" />
      <div className="vignette" />
      <div className="halo" />
      <div className="grain" />

      <header className="fixed top-[clamp(1.25rem,3.5vw,2.5rem)] left-[clamp(1.25rem,3.5vw,2.5rem)] z-10">
        <Logo />
      </header>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <h1 className="wordmark">
          <span>coming</span>
          <span>soon</span>
        </h1>
      </div>
    </main>
  );
}
