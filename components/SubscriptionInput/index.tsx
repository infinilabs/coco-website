"use client";

import { useState } from "react";
import Image from "next/image";

export default function SubscriptionInput() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!email) return;
      const response = await fetch(
        "https://assets.mailerlite.com/jsonp/247698/forms/73635285659813865/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "fields[email]": email,
            "ml-submit": "1",
            anticsrf: "true",
          }),
        }
      );
      if (response.ok) {
        console.log("Subscription successful !");
        setSuccess(true);
      } else {
        console.error("Subscription failed, please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative w-full max-w-96">
      {success ? (
        <div className="text-gray-500 text-sm">
          <p>Thank you for your subscription :) , </p>
          <p>looking forward to sharing more information with you.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="bg-white block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="absolute w-8 -right-2 top-1/2 translate  -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <Image
              src="/svg/home/arrow-right.svg"
              alt="arrow-right"
              width={32}
              height={32}
            />
          </button>
        </form>
      )}
    </div>
  );
}

