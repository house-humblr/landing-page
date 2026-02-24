"use client";

import { useState, useRef, type FormEvent } from "react";
import { trackEvent } from "@/lib/mixpanel";
import styles from "./EmailSignup.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:6000";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const focusTracked = useRef(false);
  const typeTracked = useRef(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    trackEvent("subscribe_clicked");
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/email-list`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.wrapper}>
        <p className={styles.success}>You&rsquo;re on the list! We&rsquo;ll be in touch.</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Get notified about updates</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          className={styles.input}
          placeholder="you@email.com"
          value={email}
          onFocus={() => {
            if (!focusTracked.current) {
              focusTracked.current = true;
              trackEvent("email_input_focused");
            }
          }}
          onChange={(e) => {
            if (!typeTracked.current) {
              typeTracked.current = true;
              trackEvent("email_input_typed");
            }
            setEmail(e.target.value);
          }}
          required
          disabled={status === "loading"}
        />
        <button type="submit" className={styles.button} disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && <p className={styles.error}>{errorMsg}</p>}
    </div>
  );
}
