import React from "react";

// This is a server component
export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Animated starry background */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        <div className="w-48 h-48 mb-8">
          {/* Animated planet or futuristic graphic */}
          <svg
            className="animate-pulse"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" fill="url(#planetGradient)" />
            <defs>
              <radialGradient
                id="planetGradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgba(139, 92, 246, 1)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgba(76, 29, 149, 1)", stopOpacity: 1 }}
                />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-glow">
          Our Universe is Expanding
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Our website is currently undergoing a cosmic makeover. We&apos;re
          adding some stardust and adjusting the thrusters for an amazing
          experience.
        </p>

        {/* This would be a client component for interactivity */}
        {/* <CountdownTimer targetDate="2025-12-31T23:59:59" /> */}

        <div className="mt-8">
          <p className="text-white">
            Get ready to explore a new dimension with us soon!
          </p>
        </div>
      </div>
    </div>
  );
}

// You can create a CountdownTimer component in a separate file (e.g., CountdownTimer.js) and import it.
// Make sure to add "use client" at the top of the CountdownTimer.js file.
