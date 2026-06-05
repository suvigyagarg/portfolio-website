import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize a plain-text form field.
 *
 * Contact-form fields (name, email, message) are never meant to contain markup,
 * so we strip ALL tags and attributes — the result is safe to interpolate into
 * an HTML email or render in the DOM. Runs on both server and client
 * (isomorphic-dompurify wraps DOMPurify with a jsdom window on the server).
 */
export function sanitizeText(input: unknown): string {
  if (typeof input !== 'string') return '';
  return DOMPurify.sanitize(input, {
    USE_PROFILES: { html: true },
  }).trim();
}

/**
 * Sanitize an assembled HTML fragment (e.g. an email body), allowing only a
 * minimal, safe tag/attribute set. Use as a final pass after building markup
 * from already-`sanitizeText`'d values — neutralises attribute breakouts and
 * unsafe href schemes (javascript:, data:, …).
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'a', 'br', 'hr', 'strong', 'em'],
    ALLOWED_ATTR: ['href'],
  });
}
