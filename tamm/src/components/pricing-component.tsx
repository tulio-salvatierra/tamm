import { useState } from 'react'
import { Check } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = [
  {
    name: "Apartment Cleaning",
    intro:
      "Ideal for smaller spaces, our apartment cleaning Chicago packages ensure a fresh, inviting home that fits your lifestyle.",
    description:
      "Experience our house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, and deep cleaning services Chicago, all tailored to make your apartment shine.",
    notes: [
      "All prices may vary depending on current conditions.",
      "Ready for a spotless space? Book now or call us!",
    ],
    plans: [
      {
        name: "Light Cleaning",
        price: "From $150",
        features: [
          "Basic refresh of your apartment",
          "Surface cleaning of common areas",
          "Maintains a welcoming environment",
        ],
      },
      {
        name: "General Cleaning",
        price: "From $200",
        features: [
          "More thorough upkeep for everyday living",
          "Attention to kitchens, bathrooms, and living spaces",
          "Ideal balance of routine and detail-oriented care",
        ],
      },
      {
        name: "Deep Cleaning",
        price: "From $300",
        features: [
          "Top-to-bottom cleaning for every corner",
          "Deep cleaning services Chicago level detail",
          "Perfect for seasonal resets or special occasions",
        ],
      },
    ],
  },
  {
    name: "Residential Home Cleaning",
    intro:
      "For larger homes, our residential cleaning Chicago services deliver a clean, comfortable, and healthy environment.",
    description:
      "Trust our house cleaning service Chicago, maid service in Chicago, and deep cleaning services Chicago to keep your home looking its best. Starting at $300 for light cleaning, prices depend on current conditions.",
    notes: [
      "Contact us today to schedule!",
      "All prices are subject to adjustment depending on job conditions.",
    ],
    plans: [
      {
        name: "Light Cleaning",
        price: "From $300",
        features: [
          "Standard tidy-up of all main living areas",
          "Surface cleaning to maintain a fresh atmosphere",
          "Perfect for regular upkeep",
        ],
      },
      {
        name: "General Cleaning",
        price: "Custom Quote",
        features: [
          "More detailed routine cleaning",
          "Focus on kitchens, bathrooms, and living rooms",
          "Ensures a consistently welcoming home",
        ],
      },
      {
        name: "Deep Cleaning",
        price: "Custom Quote",
        features: [
          "Comprehensive, top-to-bottom clean",
          "Deep cleaning services Chicago thoroughness",
          "Ideal for a transformative refresh",
        ],
      },
    ],
  },
  {
    name: "Commercial & Move-In/Move-Out Cleaning",
    intro:
      "For businesses and those relocating, our commercial and move-in/move-out cleaning solutions ensure a pristine space.",
    description:
      "From apartment cleaning Chicago solutions to full-scale commercial projects, rely on our house cleaning service Chicago, maid service in Chicago, and deep cleaning services Chicago. All pricing may vary depending on conditions.",
    notes: [
      "Get in touch today!",
      "All prices may vary depending on job conditions.",
    ],
    plans: [
      {
        name: "Commercial Cleaning",
        price: "Custom Quote",
        features: [
          "Professional office and retail cleaning",
          "Flexible scheduling for minimal disruption",
          "Upholds top industry standards",
        ],
      },
      {
        name: "Move-In/Move-Out Cleaning",
        price: "Custom Quote",
        features: [
          "Complete preparation or refresh of your property",
          "Ideal for transitioning in or out smoothly",
          "Ensures a spotless start or finish",
        ],
      },
    ],
  },
]

export default function PricingComponent() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name)

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Cleaning Services</h2>
      
      {/* Mobile Select */}
      <div className="md:hidden mb-8">
        <Select onValueChange={setSelectedCategory} defaultValue={selectedCategory}>
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
      <div className="hidden md:flex mb-8 space-x-2 overflow-x-auto">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.name)}
            className="whitespace-nowrap"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {categories.map((category) => (
        <div key={category.name} className={selectedCategory === category.name ? "block" : "hidden"}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
            <p className="text-lg mb-4">{category.intro}</p>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {category.plans.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {plan.price === "Custom Quote" ? "Get Quote" : "Book Now"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Notes:</h4>
            <ul className="list-disc list-inside">
              {category.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

