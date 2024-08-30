import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission (which would be GET)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST", // Ensure the method is POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the email data
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Thank you for subscribing!");
        setEmail(""); // Clear the input
      } else {
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was a problem with your subscription.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300 py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Stay up-to-date with our latest offers
        </h2>
        <p className="mt-4 text-white md:text-lg">
          Subscribe to our newsletter and be the first to know about our
          exclusive deals and new product launches.
        </p>
        <form
          className="mt-10 grid flex-col items-center gap-4 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="self-center justify-center ml-auto mr-auto w-full max-w-md rounded-md border-transparent bg-white p-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
            required
          />
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center rounded-md bg-indigo-600 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-white">{message}</p>}
      </div>
    </section>
  );
}
