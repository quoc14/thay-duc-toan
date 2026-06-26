import sharp from "sharp";
import { readFileSync, existsSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const galleryDir = join(__dirname, "..", "public", "images", "gallery");

const MAX_WIDTH = 800;
const QUALITY = 80;

const galleryFiles = [];
for (let i = 1; i <= 20; i++) {
  const file = join(galleryDir, `gallery-${i}.jpg`);
  if (existsSync(file)) {
    galleryFiles.push({ id: i, path: file });
  }
}

console.log(`Found ${galleryFiles.length} gallery images to optimize:\n`);

for (const { id, path } of galleryFiles) {
  try {
    const originalBuf = readFileSync(path);
    const originalSize = originalBuf.length;

    const meta = await sharp(originalBuf).metadata();
    console.log(
      `gallery-${id}.jpg: ${meta.width}x${meta.height} (${(originalSize / 1024).toFixed(0)}KB)`,
    );

    // Resize to max width, keep aspect ratio, compress
    const outputBuf = await sharp(originalBuf)
      .resize(MAX_WIDTH, null, { withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();

    writeFileSync(path, outputBuf);

    const newSize = outputBuf.length;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(0);
    console.log(
      `  → Optimized: max ${MAX_WIDTH}px wide (${(newSize / 1024).toFixed(0)}KB, -${reduction}%)\n`,
    );
  } catch (err) {
    console.error(`  ✗ Error processing gallery-${id}.jpg:`, err.message);
  }
}

console.log("✅ Done! All gallery images optimized.");
