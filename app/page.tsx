import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/language-selector";
import { CheckCircle, BookOpen, Users, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 md:p-6 border-b">
        <Link href="/" className="text-xl font-bold">
          AMI Education
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:inline-block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sign in
          </Link>
          <LanguageSelector />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transforming Education Across Africa
                  </h1>
                  <p className="mx-auto lg:mx-0 max-w-[600px] text-gray-500 md:text-xl">
                    Experience our innovative 60% offline, 40% online hybrid
                    learning model. Quality education that transcends
                    geographical barriers.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="text-base">
                    <Link href="/register/parent">Register as Parent</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base"
                  >
                    <Link href="/register/teacher">Join as Teacher</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Hybrid Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Real-time Progress Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>GPS-Based Matching</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square">
                  <Image
                    src="https://qgame3ccfcbtygae.public.blob.vercel-storage.com/A%20classic%20oil%20painting%20depicting%20a%203D%20illustration%20of%20an%20African%20child%20with%20curly%20hair,%20joyf-uRZIYmegcY6p4GEoKXNsckyWkfksMI.jpg"
                    alt="African education illustration"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 px-4 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Our hybrid education model combines the best of both worlds,
                offering personalized learning experiences for students across
                Nigeria and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Hybrid Learning</h3>
                <p className="text-gray-500 text-sm">
                  60% offline classes for hands-on learning, 40% online for
                  flexibility and convenience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Expert Teachers</h3>
                <p className="text-gray-500 text-sm">
                  Qualified teachers undergo our TEACHERS ON TRAINING program
                  for excellence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">GPS Matching</h3>
                <p className="text-gray-500 text-sm">
                  Smart location-based matching of teachers with students in
                  your area.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-gray-500 text-sm">
                  Monitor attendance, performance, and payments through our
                  intuitive dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold">
                Ready to Transform Education?
              </h2>
              <p className="text-gray-500">
                Join thousands of parents and teachers who are already part of
                our growing educational community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/register/parent">Register Your Child</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/register/teacher">Apply as Teacher</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">For Parents</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#">Registration Process</Link>
                </li>
                <li>
                  <Link href="#">Payment Management</Link>
                </li>
                <li>
                  <Link href="#">Progress Tracking</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Teachers</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#">Apply as Teacher</Link>
                </li>
                <li>
                  <Link href="#">Training Program</Link>
                </li>
                <li>
                  <Link href="#">Resources</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Help Center</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 AMI Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
