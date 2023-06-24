import Logo from "./components/Logo";

export default function Loader() {
  return (
    <div className="bg-zinc-50 dark:bg-slate-900 z-50 overflow-hidden">
      <div class="fade-in loader-ring">
        <div className="flex flex-col justify-center items-center my-3.5">
          <Logo width="50" height="50" />
        </div>
        <span></span>
      </div>
    </div>
  );
}
