import Background from "./components/Background";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <>
      <main className="p-24">
        <Homepage />
        <Background />
      </main>
    </>
  );
}
