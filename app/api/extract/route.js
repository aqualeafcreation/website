import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const directory = path.join(process.cwd(), 'public', 'mobile');
  const files = ['Paludarium.svg', 'dutch-style.svg', 'hardscape.svg', 'terrarium.svg'];
  const results = [];

  for (const f of files) {
    const filePath = path.join(directory, f);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const match = content.match(/data:image\/(jpeg|jpg|png|webp);base64,([^"']+)/);
      if (match) {
        const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
        const base64Data = match[2];
        const buffer = Buffer.from(base64Data, 'base64');
        const outName = f.replace('.svg', `.${ext}`);
        const outPath = path.join(directory, outName);
        fs.writeFileSync(outPath, buffer);
        results.push(`Successfully extracted ${outName} from ${f} (${buffer.length} bytes)`);
      } else {
        results.push(`No base64 image found in ${f}`);
      }
    } catch(e) {
      results.push(`Error processing ${f}: ${e.message}`);
    }
  }

  return NextResponse.json({ success: true, results });
}
