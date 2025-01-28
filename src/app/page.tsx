import Subscriber from "./components/subscriber/Subscriber";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between bg-lightBlack">
      <main className="flex flex-grow items-center justify-center">
        <Subscriber />
      </main>
      <footer className="block px-16 py-6 text-center">
        <p className="text-base font-medium text-gray">
          <span>© 2025 Subscribe Form. All Rights Reserved. </span>
          <span className="block md:inline">Design by EquipoDotGuru.</span>
        </p>
      </footer>
    </div>
  );
}
