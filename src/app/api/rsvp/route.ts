import {NextResponse} from "next/server";

export async function POST(request: Request) {
 try {
  const body = await request.json();

  // Di sini Anda bisa menyimpan data ke database atau mengirim email notifikasi
  console.log("RSVP Data:", body);

  // Simulasi delay untuk efek loading
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({success: true});
 } catch (error) {
  console.error("Error handling RSVP:", error);
  return NextResponse.json(
   {success: false, error: "Internal Server Error"},
   {status: 500}
  );
 }
}
