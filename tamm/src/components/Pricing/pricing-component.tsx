import { Check } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { categories } from "./categories";

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  return (
    <div id="pricing" className="container mx-auto px-4 py-16">
      <h2 className="text-h2 text-center leading-none bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter sm:text-8xl p-4 mb-10 font-main">
        Our Cleaning Services
      </h2>

      {/* Mobile Select */}
      <div className="md:hidden mb-8 mt-4 content-center">
        <Select
          onValueChange={setSelectedCategory}
          defaultValue={selectedCategory}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.name} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:flex mb-8 justify-center space-x-2 overflow-x-auto">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.name)}
            className="whitespace-nowrap text-body text-mainBlue"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {categories.map((category) => (
        <div
          key={category.name}
          className={selectedCategory === category.name ? "block" : "hidden"}
        >
          <div className="text-center mb-8">
            <h3 className="text-h3 mb-10 text-mainBlue font-ultrablack tracking-tighter ">
              {category.name}
            </h3>
            <p className="text-body font-second font-muted text-cyan-900  text-left mb-4 w-75">
              {category.intro}
            </p>
            <p className="text-body font-second font-muted text-cyan-900  text-left mb-4 w-75">
              {category.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {category.plans.map((plan) => (
              <Card
                key={plan.name}
                className="flex flex-col bg-transparent shadow-2xl"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-[2rem] text-mainBlue font-ultrablack tracking-tighter font-second font-extralight">
                    {plan.name}
                  </CardTitle>
                  <CardDescription>
                    <span className="leading-none bg-gradient-to-b from-cyan-500 to-blue-600 bg-clip-text text-transparent font-ultrablack tracking-tighter text-xl font-extralight">
                      {plan.price}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-body font-second"
                      >
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => {
                      window.location.href = "tel:7739199161";
                    }}
                  >
                    {plan.price === "Custom Quote" ? "Get Quote" : "Book Now"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Notes:</h4>
            <ul className="list-disc list-inside text-cyan-900 font-second">
              {category.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
