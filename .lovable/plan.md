# Plan: Fix "mail.google.com refused to connect" error

## Problem
The current email links use Gmail's compose URL (`https://mail.google.com/mail/?view=cm&fs=1&to=...`). Gmail blocks this URL from loading in iframes (like the Lovable preview) and also fails for visitors who aren't logged into Gmail or use a different email service.

## Solution
Switch both email links in `src/components/ContactSection.tsx` back to standard `mailto:` links. This:
- Works for **all** visitors regardless of which email service they use
- Opens their default email client (Gmail in browser, Outlook, Apple Mail, etc.) with a pre-filled compose window
- Works inside the Lovable preview iframe
- Is the universal web standard for email links

## Changes
In `src/components/ContactSection.tsx`:
- Replace `https://mail.google.com/mail/?view=cm&fs=1&to=vikramawate82@gmail.com` → `mailto:vikramawate82@gmail.com`
- Replace `https://mail.google.com/mail/?view=cm&fs=1&to=awatevikram@gmail.com` → `mailto:awatevikram@gmail.com`
- Remove the now-unnecessary `target="_blank"` and `rel="noopener noreferrer"` attributes

## Note for users on Chrome
If a visitor uses Gmail in their browser, they can set Gmail as their default `mailto:` handler once (Chrome shows a prompt the first time), and from then on all `mailto:` links open directly in Gmail compose — giving the same experience you originally wanted, but reliably.
