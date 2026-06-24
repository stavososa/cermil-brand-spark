import sys

def resolve_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    out_lines = []
    state = 'NORMAL' # NORMAL, HEAD, THEIRS
    for line in lines:
        if line.startswith('<<<<<<< HEAD'):
            state = 'HEAD'
            continue
        elif line.startswith('======='):
            state = 'THEIRS'
            continue
        elif line.startswith('>>>>>>>'):
            state = 'NORMAL'
            continue
            
        if state == 'NORMAL' or state == 'HEAD':
            out_lines.append(line)
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(out_lines)

files = [
    'tailwind.config.ts',
    'src/pages/Index.tsx',
    'src/index.css',
    'src/App.tsx',
    'package.json',
    'index.html'
]
for file in files:
    resolve_file(file)
