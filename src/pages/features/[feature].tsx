import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeaturePage() {
  const router = useRouter();
  const { feature } = router.query;
  const featureTitle = feature ? feature.toString().replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) : "Feature";

  return (
    <div className="min-h-screen bg-gradient-bg flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl font-bold mb-6 text-amber-600">{featureTitle}</h1>
        <p className="text-lg text-slate-600 mb-8">This is a placeholder for the {featureTitle} feature page. Add your content here.</p>
      </main>
      <Footer />
    </div>
  );
} 