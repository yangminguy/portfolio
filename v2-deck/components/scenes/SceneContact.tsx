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
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const resetForm = () => {
    setIsFormOpen(false);
    setMessage("");
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
        body: JSON.stringify({ message }),
      });

      const data = (await response.json()) as { ok?: boolean };

      if (!response.ok || !data.ok) {
        setStatus("error");
        return;
      }

      setMessage("");
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
            className="mt-9 flex flex-col items-start gap-3"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsFormOpen(true);
                  setStatus("idle");
                }}
                className="w-fit text-lg sm:text-xl text-foreground underline-offset-[6px] decoration-foreground/30 hover:text-accent hover:decoration-accent/50 hover:underline transition-colors duration-180 ease-editorial"
              >
                메시지 남기기
              </button>
              {/* TODO: Add public/resume-yang-wonmin.pdf before publishing this download link. */}
              <a
                href="/resume-yang-wonmin.pdf"
                download
                className="w-fit text-lg sm:text-xl text-muted underline-offset-[6px] decoration-foreground/20 hover:text-accent hover:decoration-accent/50 hover:underline transition-colors duration-180 ease-editorial"
              >
                이력서 다운로드
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-fit text-sm text-subtle underline-offset-[5px] decoration-foreground/20 hover:text-accent hover:decoration-accent/50 hover:underline transition-colors duration-180 ease-editorial"
            >
              이메일 복사
            </button>
          </div>

          <div
            data-reveal-line
            style={{ ["--i" as never]: 2 }}
            className="mt-5 min-h-5 text-sm text-muted"
            aria-live="polite"
          >
            {copyStatus === "copied" && <p>{CONTACT_EMAIL} 복사됨.</p>}
            {copyStatus === "error" && <p>수동으로 복사해주세요: {CONTACT_EMAIL}</p>}
            {status === "success" && <p>메시지가 저장되었습니다. 감사합니다.</p>}
            {status === "error" && (
              <p>문제가 발생했습니다. 다시 시도해주세요.</p>
            )}
          </div>

          {isFormOpen && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-md flex-col gap-4 text-left"
            >
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
                  placeholder="메시지를 남겨주세요."
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-fit text-base text-foreground underline-offset-[6px] decoration-foreground/30 hover:text-accent hover:decoration-accent/50 hover:underline disabled:cursor-wait disabled:text-subtle"
                >
                  {status === "sending" ? "전송 중..." : "전송"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  disabled={status === "sending"}
                  className="w-fit text-base text-muted underline-offset-[6px] decoration-foreground/20 hover:text-accent hover:decoration-accent/50 hover:underline disabled:cursor-wait disabled:text-subtle"
                >
                  취소
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
