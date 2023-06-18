export default function Heading({ title, paragraph }) {
  return (
    <div className="px-6 mx-auto text-center my-20 relative z-30">
      <h1 className="mb-12 text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h1>
      {paragraph ? (
        <div>
          <p className="font-light text-zinc-800 text-xl dark:text-zinc-400">
            {paragraph}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
