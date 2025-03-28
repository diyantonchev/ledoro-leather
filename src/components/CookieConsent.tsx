"use client"

import CookieConsent from "react-cookie-consent";

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Приемам"
      declineButtonText="Отказвам"
      cookieName="ledoro_cookie_consent"
      style={{
        background: "#1a1a1a",
        color: "#ffffff",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      buttonStyle={{
        background: "#ffffff",
        color: "#1a1a1a",
        fontSize: "14px",
        padding: "0.5rem 1rem",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#ffffff",
        fontSize: "14px",
        padding: "0.5rem 1rem",
        border: "1px solid #ffffff",
      }}
    >
      Този сайт използва бисквитки и анализиращи инструменти (напр. Vercel Analytics), за да подобри работата си. С разглеждането му Вие се съгласявате с това.
    </CookieConsent>
  );
} 