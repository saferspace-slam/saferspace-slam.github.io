export function saveTextAsFile(filename: string, data: string) {
    const blob = new Blob([data], { type: 'text/csv' });


    if ((window.navigator as any).msSaveOrOpenBlob) {
        (window.navigator as any).msSaveBlob(blob, filename);
    }
    else {
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}

export function setSeo(title: string, description: string) {
    useHead({
        title,
        meta: [
            { name: 'description', content: description }
        ]
    })
}