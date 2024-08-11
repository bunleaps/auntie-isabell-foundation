import Link from "next/link";
import Button from "./components/Button";

function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex flex-col flex-grow items-center justify-center px-4 py-8">
        <h1 className="text-5xl font-bold text-emerald-300 mb-4">(404)</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Oops! Page not found.</h2>
        <Link href="/" passHref>
          <Button variant="black">Go Back Home</Button>
        </Link>
      </main>
      {/* Footer can be here */}
    </div>
  );
}

export default NotFoundPage;
