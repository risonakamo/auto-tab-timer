import IndexMain from "./IndexMain.svelte";

function main()
{
    new IndexMain({
        target:document.body
    });
}

window.onload=main;