
async function getFileText(fileUrl) {
    const text = await (await fetch(fileUrl)).text();
    return text;
}


export async function getHtml(htmlPath, cssPath) {
    return new Promise(async(resolve)=>{
        let template;
        if(cssPath && htmlPath){
            const pageHtml = await getFileText(htmlPath);
            const pageCSS = await getFileText(cssPath);
            if(pageHtml){
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
        resolve(template);
    })
}


