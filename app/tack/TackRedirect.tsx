"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SECONDS = 6;

/** Countdown that sends the visitor back to the start page. */
export function TackRedirect() {
  const [left, setLeft] = useState(SECONDS);
  const router = useRouter();

  useEffect(() => {
    const tick = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    const go = setTimeout(() => router.push("/"), SECONDS * 1000);
    return () => {
      clearInterval(tick);
      clearTimeout(go);
    };
  }, [router]);

  return (
    <p className="text-white/60 text-sm" role="status">
      Du skickas till startsidan om {left} sekunder…
    </p>
  );
}
