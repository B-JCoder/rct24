"use client";

import { useState } from "react";

export function useContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return {
    isSubmitted,
    markSubmitted: () => setIsSubmitted(true),
  };
}
