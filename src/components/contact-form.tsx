"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
  idPrefix?: string;
};

export function ContactForm({ idPrefix = "" }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const nameId = `${idPrefix}name`;
  const emailId = `${idPrefix}email`;
  const messageId = `${idPrefix}message`;

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
      const res = await fetch("https://formspree.io/f/mdenprpy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thank you for your message. I will be in touch soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "I could not send your message right now. Please email jackwakeham82@gmail.com.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex w-full flex-col items-center gap-6 border border-outline-variant bg-surface p-8 text-center md:p-12">
        <div className="h-1 w-12 shrink-0 bg-accent" aria-hidden="true" />
        <h3 className="font-mono text-lg font-bold uppercase tracking-[0.08em] text-primary">
          Message received
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-outline">
          Thanks for reaching out. I&apos;ll review your message and get back to
          you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-primary underline underline-offset-4 transition-colors hover:text-primary-fixed"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex w-full flex-col gap-5 border border-outline-variant bg-surface p-8 md:p-9"
      onSubmit={onSubmit}
    >
      <div className="h-1 w-12 shrink-0 bg-accent" aria-hidden="true" />

      <div className="flex flex-col gap-2">
        <label htmlFor={nameId} className="text-sm font-medium text-outline">
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          className="w-full border border-outline-variant bg-background p-3.5 text-sm outline-none transition-colors focus:border-primary"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={emailId} className="text-sm font-medium text-outline">
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          className="w-full border border-outline-variant bg-background p-3.5 text-sm outline-none transition-colors focus:border-primary"
          placeholder="Your email address"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="text-sm font-medium text-outline">
          What do you need help with?
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={4}
          required
          className="min-h-[120px] w-full resize-none border border-outline-variant bg-background p-3.5 text-sm outline-none transition-colors focus:border-primary"
          placeholder="Tell me a little about your business and where you need support."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary py-4 font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-surface transition-colors hover:bg-primary-fixed disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Request your review"}
      </button>

      {message ? (
        <p
          className={`text-sm ${status === "error" ? "text-red-600" : "text-outline"}`}
        >
          {message}
        </p>
      ) : (
        <p className="text-xs leading-relaxed text-outline">
          No pressure. Just a clear first step.
        </p>
      )}
    </form>
  );
}
