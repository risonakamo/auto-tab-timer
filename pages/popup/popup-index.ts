import PopupIndexMain from "./PopupIndexMain.svelte";

function main()
{
    new PopupIndexMain({
        target:document.body
    });
}

window.onload=main;