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

export function setSeo(title: string, description: string, ) {
    useHead({
        title,
        meta: [
            { name: 'description', content: description },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: 'https://saferspace-slam.de/sharepic.jpg' },
            { name: 'twitter:card', content: 'summary_large_image' },
        ]
    })
}

export function dateToANSI(date: Date): string {
    return `${date.getFullYear()}-${padNumber(date.getMonth()+1, 2)}-${padNumber(date.getDate(), 2)}`
}

export function padNumber(n: number, width: number, z: string = "0") {
  return String(n).padStart(width, z);
}