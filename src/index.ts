import fs from "fs";
import path from "path";

export default function generateFile(options: { enabled?: boolean, outFile: string, content: string }) {
    const { enabled = true, outFile, content } = options;

    return {
        name: "rollup-plugin-generate-file",
        buildStart: (_: any) => {
            if (!enabled) {
                return;
            }

            fs.mkdirSync(path.dirname(outFile), { recursive: true });

            fs.writeFileSync(outFile, content, { encoding: "utf-8" });
        },
    }
}