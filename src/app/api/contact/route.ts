// /src/app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1️⃣ Récupération des données
    const { name, email, message } = await request.json();

    // 2️⃣ Validation des champs
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // 3️⃣ Validation simple de l'email
    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Email invalide." }, { status: 400 });
    }

    // 4️⃣ Vérification des variables d'environnement
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey || !fromEmail) {
      console.error("Clé RESEND_API_KEY ou RESEND_FROM_EMAIL manquante");
      return NextResponse.json(
        { message: "Erreur configuration serveur." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // 5️⃣ Envoi de l'email
    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: ["sylvainbaraduc8556@gmail.com"], // ton email de réception
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Erreur envoi email Resend:", error);
      return NextResponse.json(
        { message: "Erreur lors de l’envoi de l’email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Message envoyé avec succès." });
  } catch (err) {
    console.error("Erreur serveur :", err);
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }
}

// GET pour tester l'API rapidement
export async function GET() {
  return NextResponse.json({ message: "API fonctionne bien !" });
}
