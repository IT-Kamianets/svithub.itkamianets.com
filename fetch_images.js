const https = require('https');
https.get('https://bakota.com.ua/hotels/svithub/', (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => {
        const regex = /<img[^>]+src="([^"]+)"/g;
        let match;
        const links = new Set();
        while ((match = regex.exec(data)) !== null) {
            if (match[1].includes('wp-content/uploads')) {
                links.add(match[1]);
            }
        }
        console.log(Array.from(links).join('\n'));
    });
}).on('error', console.error);
