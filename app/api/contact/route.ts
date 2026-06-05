import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sanitizeText, sanitizeHtml } from '@/lib/sanitize';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const raw = (await req.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  // strip any markup from user input before it reaches the email
  const name = sanitizeText(raw.name);
  const email = sanitizeText(raw.email);
  const message = sanitizeText(raw.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields.' }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || 'placeholder@example.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  try {
    await resend.emails.send({
      from,
      to,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: sanitizeHtml(`
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact]', err);
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
  }
}
