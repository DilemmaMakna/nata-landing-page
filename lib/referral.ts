// Referral codes look like NATA-A1B2C3. Anything else is rejected before it reaches the page or the app.
const CODE_PATTERN = /^[A-Z0-9-]{4,24}$/;

// Returns the normalized referral code, or null when the value is missing or malformed.
export function parseReferralCode(value: string | string[] | undefined): string | null {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;
  const code = raw.trim().toUpperCase();
  return CODE_PATTERN.test(code) ? code : null;
}
