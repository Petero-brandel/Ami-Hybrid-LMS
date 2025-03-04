import { Button } from "../ui/button"
import {  BookOpen, Users, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function ActionSection(){
    return (
        <div>
             <section className="bg-gray-50 px-4 md:px-8 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#002D69] mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-gray-900 max-w-2xl mx-auto">
                Our hybrid education model combines the best of both worlds,
                offering personalized learning experiences for students across
                Nigeria and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-2xl  cursor-pointer">
                <BookOpen className="h-10 w-10 text-[#002D69] mb-4" />
                <h3 className="font-bold text-[#002D69] text-2xl mb-2">Hybrid Learning</h3>
                <p className="text-gray-900 text-sm">
                  60% offline classes for hands-on learning, 40% online for
                  flexibility and convenience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-2xl  cursor-pointer">
                <Users className="h-10 w-10 text-[#002D69] mb-4" />
                <h3 className="font-bold text-[#002D69] text-2xl mb-2">Expert Teachers</h3>
                <p className="text-gray-900 text-sm">
                  Qualified teachers undergo our TEACHERS ON TRAINING program
                  for excellence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-2xl  cursor-pointer">
                <MapPin className="h-10 w-10 text-[#002D69] mb-4" />
                <h3 className="font-bold mb-2 text-[#002D69] text-2xl">GPS Matching</h3>
                <p className="text-gray-900 text-sm">
                  Smart location-based matching of teachers with students in
                  your area.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-2xl  cursor-pointer">
                <Clock className="h-10 w-10 text-[#002D69] mb-4" />
                <h3 className="font-bold mb-2 text-[#002D69] text-2xl ">Real-time Tracking</h3>
                <p className="text-gray-900 text-sm">
                  Monitor attendance, performance, and payments through our
                  intuitive dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section  className=" px-6 md:px-20 pt-8 md:pt-16 flex items-center md:justify-between md:gap-0 gap-4 md:flex-row flex-col">
          <div className="container md:w-[50%] ">
            <div className="max-w-2xl space-y-4">
              <h2  className="text-[#002D69] font-bold text-3xl md:text-5xl ">
                Ready to Transform Education?
              </h2>
              <p className="text-gray-900">
                Join thousands of parents and teachers who are already part of
                our growing educational community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button asChild size="lg">
                  <Link href="/register/parent">Register Your Child</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/register/teacher">Apply as Teacher</Link>
                </Button>
              </div>
            </div>
          </div>
           <div>
                  <Image src='/img/man.png' alt=""  width={200} height={200} className="w-[550px] md:w-[400px]  "/>
              </div>
        </section>
        </div>
    )
}