import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Champs manquants' }, { status: 400 });
    }

    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail(email)) {
      return NextResponse.json({ message: 'Email invalide' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey || !fromEmail) {
      console.error("Clé RESEND_API_KEY ou RESEND_FROM_EMAIL manquante");
      return NextResponse.json({ message: "Erreur configuration serveur." }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: ['sylvainbaraduc8556@gmail.com'],
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      console.error('Erreur envoi email Resend:', error);
      return NextResponse.json({ message: 'Erreur lors de l’envoi.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message envoyé avec succès.' });

  } catch (err) {
    console.error('Erreur serveur :', err);
    return NextResponse.json({ message: 'Erreur serveur.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'API fonctionne bien !' });
}
