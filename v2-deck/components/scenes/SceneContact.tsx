"use client";

import { FormEvent, useState } from "react";

import { Scene } from "@/components/deck/Scene";

const CONTACT_EMAIL = "yangminguy@gmail.com";
const MAX_MESSAGE_LENGTH = 2000;

type FormStatus = "idle" | "sending" | "success" | "error";

/**
 * Scene 05 — Contact
 *
 * Closing slide. Keeps the slide minimal while opening a small contact form
 * only after the primary CTA is selected.
 */
export function SceneContact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const resetForm = () => {
    setIsFormOpen(false);
    setSenderEmail("");
    setMessage("");
    setWebsite("");
    setStatus("idle");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1800);
    } catch {
      setCopyStatus("error");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: senderEmail,
          message,
          website,
        }),
      });

      const data = (await response.json()) as { ok?: boolean };

      if (!response.ok || !data.ok) {
        setStatus("error");
        return;
      }

      setSenderEmail("");
      setMessage("");
      setWebsite("");
      setStatus("success");
      setIsFormOpen(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Scene index={4} ariaLabel="Contact">
      <div className="flex w-full flex-col">
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 max-w-prose">
          <h2
            data-reveal-line
            style={{ ["--i" as never]: 0 }}
            className="text-4xl sm:text-5xl font-medium tracking-editorial text-foreground"
          >
            Let&apos;s talk.
          </h2>

          <div
            data-reveal-line
            style={{ ["--i" as never]: 1 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
          >
            <button
              type="button"
              onClick={() => {
                setIsFormOpen(true);
                setStatus("idle");
              }}
              className="w-fit text-lg sm:text-xl text-foreground underline-offset-[6px] decoration-foreground/30 hover:text-accent hover:decoration-accent/50 hover:underline transition-colors duration-180 ease-editorial"
            >
              Email me
            </button>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-fit text-lg sm:text-xl text-muted underline-offset-[6px] decoration-foreground/20 hover:text-accent hover:decoration-accent/50 hover:underline transition-colors duration-180 ease-editorial"
            >
              Copy email
            </button>
          </div>

          <div
            data-reveal-line
            style={{ ["--i" as never]: 2 }}
            className="mt-5 min-h-5 text-sm text-muted"
            aria-live="polite"
          >
            {copyStatus === "copied" && <p>{CONTACT_EMAIL} copied.</p>}
            {copyStatus === "error" && <p>Please copy manually: {CONTACT_EMAIL}</p>}
            {status === "success" && <p>Message saved. Thank you.</p>}
            {status === "error" && (
              <p>Something went wrong. Please try again or copy my email.</p>
            )}
          </div>

          {isFormOpen && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-md flex-col gap-4 text-left"
            >
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              <label className="flex flex-col gap-2 text-sm text-muted" htmlFor="contact-email">
                Your email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={senderEmail}
                  onChange={(event) => setSenderEmail(event.target.value)}
                  className="min-h-12 rounded-none border-b border-border bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors duration-180 ease-editorial placeholder:text-subtle focus:border-foreground"
                  placeholder="sender@example.com"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-muted" htmlFor="contact-message">
                Message
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  maxLength={MAX_MESSAGE_LENGTH}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="min-h-32 resize-y rounded-none border-b border-border bg-transparent px-0 py-3 text-base leading-7 text-foreground outline-none transition-colors duration-180 ease-editorial placeholder:text-subtle focus:border-foreground"
                  placeholder="Tell me what you would like to build."
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-fit text-base text-foreground underline-offset-[6px] decoration-foreground/30 hover:text-accent hover:decoration-accent/50 hover:underline disabled:cursor-wait disabled:text-subtle"
                >
                  {status === "sending" ? "Sending..." : "Send"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  disabled={status === "sending"}
                  className="w-fit text-base text-muted underline-offset-[6px] decoration-foreground/20 hover:text-accent hover:decoration-accent/50 hover:underline disabled:cursor-wait disabled:text-subtle"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="px-6 sm:px-12 pb-12 sm:pb-16">
          <p
            data-reveal-line
            style={{ ["--i" as never]: 3 }}
            className="text-2xs text-subtle tracking-[0.06em]"
          >
            Yang Wonmin · Seoul · 2026
          </p>
        </div>
      </div>
    </Scene>
  );
}
