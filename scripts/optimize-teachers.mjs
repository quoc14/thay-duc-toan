import sharp from "sharp";
import { readFileSync, unlinkSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const teachersDir = join(__dirname, "..", "public", "images", "teachers");

const SIZE = 600;
const QUALITY = 85;

// Teacher images that exist
const teacherFiles = [];
for (let i = 1; i <= 10; i++) {
  const file = join(teachersDir, `teacher-${i}.jpg`);
  if (existsSync(file)) {
    teacherFiles.push({ id: i, path: file });
  }
}

console.log(`Found ${teacherFiles.length} teacher images to optimize:\n`);

for (const { id, path } of teacherFiles) {
  try {
    const originalBuf = readFileSync(path);
    const originalSize = originalBuf.length;

    // Get metadata
    const meta = await sharp(originalBuf).metadata();
    console.log(
      `teacher-${id}.jpg: ${meta.width}x${meta.height} (${(originalSize / 1024).toFixed(0)}KB)`,
    );

    // Strategy: crop to square, focusing on the upper-center (face area)
    // For portrait photos: crop from top-center to capture face
    // For landscape photos: crop from center
    let extractRegion;
    const w = meta.width;
    const h = meta.height;

    if (w >= h) {
      // Landscape or square: crop center horizontally, from top to capture face
      const left = Math.floor((w - h) / 2);
      extractRegion = { left, top: 0, width: h, height: h };
    } else {
      // Portrait: crop from top-center to capture face
      // Take a square from the top portion (top 60-70% to include face and upper body)
      const squareSize = w;
      const topOffset = Math.floor(h * 0.05); // Start slightly from top
      extractRegion = {
        left: 0,
        top: topOffset,
        width: squareSize,
        height: squareSize,
      };
    }

    // Ensure extract region is within bounds
    if (extractRegion.left + extractRegion.width > w) {
      extractRegion.left = w - extractRegion.width;
    }
    if (extractRegion.top + extractRegion.height > h) {
      extractRegion.top = h - extractRegion.height;
    }
    if (extractRegion.left < 0) extractRegion.left = 0;
    if (extractRegion.top < 0) extractRegion.top = 0;

    // Process: extract, resize, compress
    const outputBuf = await sharp(originalBuf)
      .extract(extractRegion)
      .resize(SIZE, SIZE, { fit: "cover" })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();

    // Write back
    const { writeFileSync } = await import("fs");
    writeFileSync(path, outputBuf);

    const newSize = outputBuf.length;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(0);
    console.log(
      `  → Optimized: ${SIZE}x${SIZE} (${(newSize / 1024).toFixed(0)}KB, -${reduction}%)\n`,
    );
  } catch (err) {
    console.error(`  ✗ Error processing teacher-${id}.jpg:`, err.message);
  }
}

console.log("✅ Done! All teacher images optimized.");
