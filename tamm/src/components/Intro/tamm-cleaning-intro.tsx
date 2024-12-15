import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Clock, Sparkles, ThumbsUp } from "lucide-react";
import Image from "./../../assets/services/commercial.jpeg";

export default function TAMMCleaningIntro() {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="p-4 text-h2 bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl">
            TAMM Cleaning Services: Your Solution to a Spotless Space
          </h2>
          <p className="mt-4 text-xl text-cyan-900 font-second font-black">
            Experience the difference with our professional, reliable, and
            eco-friendly cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <a className="text-mainBlue">Professional Excellence</a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-second text-cyan-900">
                Our team of trained experts delivers top-notch cleaning results
                every time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-6 h-6 text-blue-500 mr-2" />
                <a className="text-mainBlue">Flexible Scheduling</a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-second text-cyan-900">
                Book our services at your convenience, including evenings and
                weekends.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
                <a className="text-mainBlue"> Eco-Friendly Products</a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-second text-cyan-900">
                We use environmentally safe cleaning solutions for a healthier
                home and planet.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card className="bg-white text-cyan-900">
            <CardHeader>
              <CardTitle className="text-2xl  ">
                <a className="text-mainBlue">Why Choose TAMM Cleaning?</a>
              </CardTitle>
              <CardDescription className="text-cyan-900 font-second">
                We're more than just a cleaning service - we're your partner in
                maintaining a healthy, happy home.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 font-second">
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  100% Satisfaction Guarantee
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  Fully Insured and Bonded
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  Customized Cleaning Plans
                </li>
                <li className="flex items-center">
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  Competitive Pricing
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full">
                Book Your Cleaning Today
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 relative">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={Image}
              alt="TAMM Cleaning Services in action"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                See the TAMM Difference
              </h3>
              <Button variant="secondary" size="lg">
                Watch Our Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
