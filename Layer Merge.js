const fs = require('fs/promises');

async function mergeFiles(filePaths, outputPath) {
    try {
        // Read all files concurrently
        const contents = await Promise.all(
            filePaths.map(path => fs.readFile(path, 'utf8'))
        );

        // Merge contents with a newline separator
        const mergedContent = contents.join('\n');

        // Write the merged content to the output file
        await fs.writeFile(outputPath, mergedContent, 'utf8');
        console.log(`Merged content written to ${outputPath}`);
    } catch (error) {
        console.error('Error merging files:', error);
    }
}

// Example usage:
const fileNames = [
    'Mae/Layer 2.txt',
    'Mae/Layer 3.txt',
    'Mae/Layer 4.txt',
    'Mae/Layer 5.txt',
    'Mae/Intro Prompt.txt'
];
const outputFile = 'Mae.txt';

mergeFiles(fileNames, outputFile);