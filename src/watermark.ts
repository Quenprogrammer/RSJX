import * as Jimp from 'jimp';

async function addWatermark(inputImagePath: string, watermarkImagePath: string, outputImagePath: string): Promise<void> {
    try {
        // Read the input image
        const image = await Jimp.read(inputImagePath);

        // Read the watermark image
        let watermark = await Jimp.read(watermarkImagePath);

        // Resize the watermark image to the specified dimensions
        const dpi = 96; // Standard DPI value
        const desiredWidth = 4.95 * dpi; // Convert inches to pixels
        const desiredHeight = 1.31 * dpi; // Convert inches to pixels

        watermark = watermark.resize(desiredWidth, desiredHeight);

        // Calculate the position to center the resized watermark
        const x = (image.getWidth() - watermark.getWidth()) / 2;
        const y = (image.getHeight() - watermark.getHeight()) / 2;

        // Set the desired transparency (opacity) value
        const transparency = 0.5; // Adjust this value (0 to 1) for transparency

        // Composite the resized watermark onto the image at the calculated position with transparency
        (image as any).composite(watermark, x, y, {
            mode: Jimp.BLEND_OVERLAY,
            opacitySource: transparency,
        });

        // Save the result to the output file
        const outputPath = outputImagePath || 'C:/Users/USER/Pictures/output_image_with_watermark.jpg';
        await image.writeAsync(outputPath);

        console.log('Watermark added successfully! Output saved to:', outputPath);
    } catch (error) {
        console.error('Error:', (error as any).message);
    }
}

// Usage example
const inputImagePath = 'C:/Users/USER/Pictures/test1.png';
const watermarkImagePath = 'C:/Users/USER/Pictures/watermark.png';
const outputImagePath = 'C:/Users/USER/Pictures/output_image_with_watermark.jpg';

addWatermark(inputImagePath, watermarkImagePath, outputImagePath);
