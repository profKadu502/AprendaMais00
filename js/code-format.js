document.querySelectorAll('.editor').forEach(editor => {
    const pre = editor.querySelector('.code');
    const lineNumbers = editor.querySelector('.line-numbers');

    const lines = pre.textContent.replace(/\n$/, "").split('\n');

    // Limpa conteúdo original
    pre.innerHTML = "";
    lineNumbers.innerHTML = "";

    lines.forEach(line => {
        // Detecta comentários de várias linguagens
        const trimmed = line.trim();
        const isComment =
            trimmed.startsWith('//') ||      // C, C++, Java, JS
            trimmed.startsWith('/*') ||      // C, Java, CSS
            trimmed.startsWith('*')  ||      // bloco de comentário
            trimmed.startsWith('#')  ||      // Python, Bash, YAML
            trimmed.startsWith('--') ||      // SQL, Lua
            trimmed.startsWith(';');         // Assembly

        // Cria linha no código
        const span = document.createElement('span');
        if (isComment) span.classList.add('comment');
        span.textContent = line;
        pre.appendChild(span);

        // Cria número da linha
        const num = document.createElement('div');
        num.textContent = lineNumbers.children.length + 1;
        lineNumbers.appendChild(num);
    });
});
