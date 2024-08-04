function formatTOC(){
    let TOC = document.querySelector(".toc");
    if (!TOC) throw new TypeError("Page does not contain a TOC (table of contents).");
    TOC.innerHTML = TOC.innerHTML
        .replaceAll("<ol", "<ul")
        .replaceAll("</ol>", "</ul>")
    return TOC
}

export function SideTOC() {
    let TOC = formatTOC()
    TOC.querySelector('ul').classList.add("menu", "h-full", "whitespace-normal")
    TOC.classList.add("fixed","h-1", "top-0", "h-full", "bg-base-200", "w-[25%]", "max-w-[250px]", "hidden", "md:block", "mt-16")
}