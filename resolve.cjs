const fs = require('fs');
const files = [
    'tailwind.config.ts',
    'src/pages/Index.tsx',
    'src/index.css',
    'src/App.tsx',
    'package.json',
    'index.html'
];

files.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');
    let lines = content.split('\n');
    let out_lines = [];
    let state = 'NORMAL';
    for (let line of lines) {
        if (line.startsWith('<<<<<<< HEAD')) {
            state = 'HEAD';
            continue;
        } else if (line.startsWith('=======')) {
            state = 'THEIRS';
            continue;
        } else if (line.startsWith('>>>>>>>')) {
            state = 'NORMAL';
            continue;
        }
        
        if (state === 'NORMAL' || state === 'HEAD') {
            out_lines.push(line);
        }
    }
    fs.writeFileSync(filepath, out_lines.join('\n'), 'utf8');
});
