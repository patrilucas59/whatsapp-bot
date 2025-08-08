const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('📲 Escanear o QR Code com o WhatsApp');
});

client.on('ready', () => {
    console.log('✅ Bot connect ao WhatsApp!');
    
    const number = '5511900000000@c.us';
    const message = 'Yes!';
    
    client.sendMessage(number, message)
        .then(() => console.log(`📤 Send message to ${number}`))
        .catch(err => console.error('❌ Error to send message:', err));
});

client.initialize();
