const fs = require('fs');

function extractBase64(file) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(/data:image\/(jpeg|jpg|png|webp);base64,([^"']+)/);
    if (match) {
      const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
      const base64Data = match[2];
      const buffer = Buffer.from(base64Data, 'base64');
      const outPath = file.replace('.svg', `.${ext}`);
      fs.writeFileSync(outPath, buffer);
      console.log(`Successfully extracted ${outPath} from ${file} (${buffer.length} bytes)`);
    } else {
      console.log(`No base64 image found in ${file}`);
    }
  } catch(e) {
    console.log(`Error processing ${file}: ${e.message}`);
  }
}

const files = ['Paludarium.svg', 'dutch-style.svg', 'hardscape.svg', 'terrarium.svg'];
files.forEach(f => extractBase64(`./public/mobile/${f}`));
