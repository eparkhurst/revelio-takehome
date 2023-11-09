const url = 'https://labs.quansight.org/blog/building-scipy-with-flang';
const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)/;

const match = regex.exec(url);

if (match) {
    let domain = match[2];
    const domainParts = domain.split('.');
    if (domainParts.length > 2) {
        domain = domainParts.slice(1).join('.');
    }
    console.log(domain);
}
