import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Champs manquants' }, { status: 400 });
    }

    // Ici traitement : mail, stockage, etc.

    return NextResponse.json({ message: 'Message reçu avec succès.' });
  } catch {
    return NextResponse.json({ message: 'Erreur serveur.' }, { status: 500 });
  }

}

export async function GET() {
  return NextResponse.json({ message: 'API fonctionne bien !' });
}
