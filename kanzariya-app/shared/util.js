

// async function getFileText(fileUrl) {
//     // console.log('getFileText: ');
//     const text = await (await fetch(fileUrl)).text();
//     // console.log('text: getFileText >>> ', text);
//     return text;
// }


// export async function getHtml() {
//     const pageHtml = await getFileText("kanzariya-app/emplyee-card/employee-card.html");
//     const pageCSS = await getFileText("kanzariya-app/emplyee-card/employee-card.css");
//     if (pageHtml && pageHtml.length && pageCSS && pageCSS.length) {
//         const template = document.createElement('template');
//         template.innerHTML = `
//         <style>${pageCSS}</style>
//         ${pageHtml}`;
//         return template;
//     }
// }



async function getFileText(fileUrl) {
    const text = await (await fetch(fileUrl)).text();
    return text;
}


export async function getHtml(htmlPath, cssPath) {
    console.log('getHtml: ', getHtml);
    let template;
    if(cssPath && htmlPath){
        const pageHtml = await getFileText(htmlPath);
        const pageCSS = await getFileText(cssPath);
        if(pageCSS && pageCSS.length){
            template = `
            <style>${pageCSS}</style>
            ${pageHtml}`;
        }
    }
    if(!cssPath && htmlPath){
        const pageHtml = await getFileText(htmlPath);
        if(pageHtml && pageHtml.length){
            template = `${pageHtml}`;
        }
    }
    return template;
}


