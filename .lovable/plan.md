

# Plan: Integrate EmailJS into Contact Form

## Overview
Wire up the contact form in `ContactSection.tsx` to send emails via EmailJS using your provided credentials. Since the EmailJS public key is a publishable key, it's safe to store in the codebase.

## Steps

1. **Install EmailJS SDK** — Add `@emailjs/browser` package
2. **Update ContactSection.tsx** — Replace the current toast-only `handleSubmit` with an actual EmailJS `send()` call using:
   - Service ID: `service_27lphyp`
   - Template ID: `template_61wntne`
   - Public Key: `Fj-cmC731gcd_23d-`
   - Add loading state on the submit button
   - Show success/error toasts based on the response

No backend or edge functions needed — EmailJS sends directly from the browser.

