/* Click-to-copy BibTeX. Each button's data-bibtex names the hidden <pre> that holds the entry.
   If the clipboard is unavailable, the entry is shown and selected so it can be copied by hand. */
(function () {
  function reveal(pre) {
    pre.hidden = false;
    var range = document.createRange();
    range.selectNodeContents(pre);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".pub__bibtex-btn") : null;
    if (!btn) return;
    var pre = document.getElementById(btn.getAttribute("data-bibtex"));
    if (!pre) return;

    if (!navigator.clipboard || !window.isSecureContext) {
      reveal(pre);
      return;
    }
    navigator.clipboard.writeText(pre.textContent).then(function () {
      btn.classList.add("is-copied");
      btn.textContent = "Copied";
      setTimeout(function () {
        btn.classList.remove("is-copied");
        btn.textContent = "BibTeX";
      }, 1800);
    }, function () {
      reveal(pre);
    });
  });
})();
