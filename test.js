const RPC = require('discord-rpc');
const client = new RPC.Client({transport: 'ipc'});

const activity = {
    details: 'detalles',
    state: 'estado',
    timestamps: {
        start: Date.now(),
    },
    assets: {
        large_image: 'tommeito',
        large_text: 'MUCHO TEXTO',
    },
    instance: true,
};

client.on('ready', () => {
    client.request('SET_ACTIVITY', {pid: process.pid, activity: activity});
    console.log('custom presence is now visible!');
});

client.login({ clientId: '868021840491204639'});