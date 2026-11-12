import React, { useRef, useState } from 'react';

interface ContactFormProps {
  idPrefix: string;
  context: string;
  nameInputRef?: React.RefObject<HTMLInputElement | null>;
}

export const ContactForm: React.FC<ContactFormProps> = ({ idPrefix, context, nameInputRef }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<{ text: string; kind: '' | 'ok' | 'error' }>({
    text: '',
    kind: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const requiredFields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]'));
    const invalid = requiredFields.find((el) => !el.value.trim() || !el.checkValidity());
    if (invalid) {
      setStatus({
        text:
          invalid.type === 'email'
            ? 'Add an email address I can reply to.'
            : 'Fill in your name, email and a short message about your project.',
        kind: 'error',
      });
      invalid.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (data._honey) return;

    setSubmitting(true);
    setStatus({ text: 'Sending…', kind: '' });

    try {
      const res = await fetch('https://formsubmit.co/ajax/mk9049854@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `Portfolio enquiry for Mahrukh Khan from ${data.name}${context ? ` (${context})` : ''}`,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false',
          page: window.location.pathname,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) !== 'true') {
        throw new Error(json.message || 'failed');
      }
      form.reset();
      setStatus({
        text: 'Thanks! Your message is on its way, and I’ll reply by email.',
        kind: 'ok',
      });
    } catch {
      setStatus({
        text: 'That didn’t send. Check your connection and try again, or copy my email from the contact section.',
        kind: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      className="cform"
      data-endpoint="https://formsubmit.co/ajax/mk9049854@gmail.com"
      data-context={context}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="cform__row">
        <label htmlFor={`${idPrefix}-name`}>Your Name</label>
        <input
          ref={nameInputRef}
          id={`${idPrefix}-name`}
          name="name"
          autoComplete="name"
          placeholder="e.g. Sara Khan"
          required
        />
      </div>
      <div className="cform__row">
        <label htmlFor={`${idPrefix}-email`}>Your Email</label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
        />
      </div>
      <fieldset className="cform__row cform__need">
        <legend>What’s the big idea?</legend>
        <label>
          <input type="radio" name="need" value="Digital Marketing Strategy" defaultChecked /> Digital Marketing Strategy
        </label>
        <label>
          <input type="radio" name="need" value="Social Media Management" /> Social Media Management
        </label>
        <label>
          <input type="radio" name="need" value="Meta Ads & Lead Generation" /> Meta Ads &amp; Lead Gen
        </label>
        <label>
          <input type="radio" name="need" value="Content Strategy & Reels" /> Content Strategy &amp; Reels
        </label>
        <label>
          <input type="radio" name="need" value="Graphic Design & Branding" /> Graphic Design &amp; Branding
        </label>
        <label>
          <input type="radio" name="need" value="Something else" /> Something else
        </label>
      </fieldset>
      <div className="cform__row cform__wide">
        <label htmlFor={`${idPrefix}-message`}>Tell me a little about your project</label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          placeholder="Tell me what you're working on, what you want to achieve, or the vibe you're looking for…"
          required
        />
      </div>
      <input className="cform__trap" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="cform__foot cform__wide">
        <button className="button" type="submit" disabled={submitting}>
          Send it my way ↗
        </button>
        <p className="cform__status" role="status" aria-live="polite" data-kind={status.kind || undefined}>
          {status.text}
        </p>
      </div>
    </form>
  );
};
export default ContactForm;
