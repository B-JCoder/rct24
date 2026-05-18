"use client";

import { useState } from "react";
import { Button, Input } from "@/components/ui";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("sent");
      }}
    >
      <label>
        Name
        <Input name="name" placeholder="Your name" required />
      </label>
      <label>
        Email
        <Input name="email" placeholder="you@example.com" required type="email" />
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Tell us what you want to build" required />
      </label>
      <Button type="submit">Send message</Button>
      {status === "sent" ? <p className="form-status">Thanks. We will get back to you soon.</p> : null}
    </form>
  );
}
