import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, whatsapp, university } = body;

    if (!name || !whatsapp) {
      return NextResponse.json(
        { error: 'Nama dan nomor WhatsApp wajib diisi.' },
        { status: 400 }
      );
    }

    const cleanPhone = whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 9) {
      return NextResponse.json(
        { error: 'Format nomor WhatsApp tidak valid.' },
        { status: 400 }
      );
    }

    // Ready for Database connector (e.g. Supabase, PostgreSQL, Prisma, or Sheets webhook)
    console.log('[Nataku Waitlist Entry]:', {
      name,
      whatsapp: cleanPhone,
      university: university || 'Umum',
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Selamat! Tempatmu di antrean awal Nataku telah berhasil diamankan.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem. Silakan coba lagi beberapa saat.' },
      { status: 500 }
    );
  }
}
