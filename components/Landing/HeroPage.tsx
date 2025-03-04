import Image from "next/image"

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { CheckCircle,  } from "lucide-react";

export default function HeroSection(){
    return (
        <section className="px-4 mt-[12%] pt-24 lg:mt-20  relative bg-cover bg-center bg-no-repeat  flex items-center justify-center" style={{
            backgroundImage: "url('/img/bg1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} >
                <div
          className=""
          
        >
        
                    <div className="flex justify-between md:flex-row flex-col items-center w-[95%] md:w-[90%] mx-auto">
                      <div className="space-y-8  lg:text-left text-yellow-50 md:w-[70%]">
                        <div className="space-y-4">
                          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            Transforming Education Across Africa
                          </h1>
                          <p className="mx-auto lg:mx-0 max-w-[600px] text-gray-300 md:text-xl">
                            Experience our innovative 60% offline, 40% online hybrid
                            learning model. Quality education that transcends
                            geographical barriers.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                          <Button asChild size="lg" className="text-base">
                            <Link href="/register/parent">Register as Parent</Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="text-base text-gray-900"
                          >
                            <Link href="/register/teacher">Join as Teacher</Link>
                          </Button>
                        </div>
                        <div className="flex flex-wrap justify-cente lg:justify-start gap-4 text-sm text-gray-300">
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
                      <div className="">
                        <div className=" ">
                          <Image
                            src="/img/student.png"
                            alt="African education illustration"
                           
                            className="object-cover rounded-2xl  md:w-[340px] md:h-[420px]  w-[350px] h-[450px] md:mt-0 mt-8"
                            priority
                            width={100}
                            height={200}
                            
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        
    )
}