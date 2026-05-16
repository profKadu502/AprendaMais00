document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".exp-auto").forEach(block => {

        const raw = block.textContent.trim();
        if (!raw) return;

        const lines = raw.split("\n").map(l => l.trim()).filter(l => l);

        const box = document.createElement("div");
        box.className = "info-box explicacao";

        lines.forEach(line => {
            const [left, right] = line.split("=").map(s => s.trim());
            if (!left || !right) return;

            const p = document.createElement("p");
            p.innerHTML = `
                <span class="exp-key">${left}</span>
                = 
                <span class="exp-desc">${right}</span>
            `;
            box.appendChild(p);
        });

        block.replaceWith(box);
    });

});
