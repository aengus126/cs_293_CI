const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    const text = textInput.value;

    // Character count (includes spaces)
    charCount.textContent = text.length;

    // Word count (ignores extra spaces)
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = text.trim() === "" ? 0 : words.length;
});