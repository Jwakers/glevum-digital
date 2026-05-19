"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { message?: string };
      if (!res.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message ?? "Thanks. I will be in touch soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "I could not send your message right now. Please email hello@glevum.digital.",
      );
    }
  }

  return (
    <form
      className="space-y-5 bg-background border border-outline-variant p-8 shadow-[0_10px_24px_rgba(20,24,36,0.08)]"
      onSubmit={onSubmit}
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-foreground/80"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-surface border border-outline-variant p-3 outline-none focus:border-primary transition-colors text-sm"
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-foreground/80"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-surface border border-outline-variant p-3 outline-none focus:border-primary transition-colors text-sm"
          placeholder="Your email address"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground/80"
        >
          What do you need help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full bg-surface border border-outline-variant p-3 outline-none focus:border-primary transition-colors text-sm resize-none"
          placeholder="Tell me a little about your business and where you need support."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-primary text-surface w-full py-4 font-bold uppercase tracking-widest font-mono hover:bg-primary-fixed transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Request your review"}
      </button>
      {message ? (
        <p
          className={`text-sm ${status === "error" ? "text-red-600" : "text-foreground/75"}`}
        >
          {message}
        </p>
      ) : (
        <p className="text-xs text-foreground/60">
          No pressure. Just a clear first step.
        </p>
      )}
    </form>
  );
}
