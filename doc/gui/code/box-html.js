doc.body.insertAdjacentHTML(
    "beforeEnd",
    "<div class=box>" +
        "<div class=head>" +
        `<span class=title>${title}</span>` +
        "<span class=close>X</span>" +
        "</div>" +
        `<div class=body>${content}</div>` +
        "</div>"
);
