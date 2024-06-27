const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = "";
            setTimeout(() => {
                if (codes[idx + 1]) {
                    codes[idx + 1].focus();
                }
            });
        } else if (e.key === "Backspace") {
            setTimeout(() => {
                if (codes[idx - 1]) {
                    codes[idx - 1].focus();
                }
            });
        }
    });

    code.addEventListener("paste", (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text");
        const pasteArray = pasteData.split("");
        pasteArray.forEach((char, pasteIdx) => {
            if (codes[idx + pasteIdx]) {
                codes[idx + pasteIdx].value = char;
            }
        });
        if (codes[idx + pasteArray.length]) {
            codes[idx + pasteArray.length].focus();
        }
    });
});