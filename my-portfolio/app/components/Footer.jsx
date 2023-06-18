export default function Footer() {
  return (
    <footer className="py-4 bg-zinc-50 dark:bg-slate-900 pt-20">
      <div className="w-full relative z-0 mx-auto p-4 flex items-center justify-center">
        <span className="text-md text-zinc-400 sm:text-center">
          &copy; &nbsp;Jonathan De Bremme {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
