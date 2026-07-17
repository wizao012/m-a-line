/* ================================
   ツナグM&A LP  interaction / tracking
   ================================ */
(function () {
  "use strict";

  // GTM dataLayer は index.html の GTM スニペットで初期化済み
  window.dataLayer = window.dataLayer || [];

  // LINE 友だち追加ボタンのクリック計測（イベント委任）
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest('[data-cta="line_add"]') : null;
    if (!el) return;
    window.dataLayer.push({
      event: "cta_line_add_click",
      cta_id: "line_add",
      cta_location: el.getAttribute("data-cta-location") || "unknown"
    });
  });
})();
