/** Theme + identity for NeonPulse. Everything brand-specific lives here. */
module.exports = {
    id: 'neonpulse',
    name: 'NeonPulse',
    short: 'NeonPulse',
    keyPrefix: 'NPX',
    tagline: "Neon-charged streaming with full music control.",
    footer: 'Prism Protocol',
    colors: { brand: 0xff2e97, success: 0x00ffaa, danger: 0xff3366, premium: 0xffc857 },
    emoji: { brand: '⚡', ok: '✅', error: '❌', premium: '💎', radio: '📼', wave: '∿∿∿' },
    bar: { done: '━', head: '⚡', todo: '─' },
    statuses: [
        { name: "/play • in neon", type: 'Listening' },
        { name: "{servers} neon cities", type: 'Watching' },
        { name: "/radio vaporwaves", type: 'Playing' }
    ],
    // Listener-supported radio from SomaFM (https://somafm.com). Please consider supporting them.
    stations: [
        { id: 'vaporwaves', name: "Vaporwaves", genre: "Vaporwave", url: 'https://ice1.somafm.com/vaporwaves-128-mp3' },
        { id: 'u80s', name: "Underground 80s", genre: "80s synthpop & new wave", url: 'https://ice1.somafm.com/u80s-128-mp3' },
        { id: 'poptron', name: "PopTron", genre: "Electropop & indie dance", url: 'https://ice1.somafm.com/poptron-128-mp3' },
        { id: 'beatblender', name: "Beat Blender", genre: "Deep house & downtempo", url: 'https://ice1.somafm.com/beatblender-128-mp3' },
        { id: 'thetrip', name: "The Trip", genre: "Progressive house", url: 'https://ice1.somafm.com/thetrip-128-mp3' }
    ],
    premium: { prices: { premium: '₹99/month', plus: '₹249/month' } },
    links: {
        panel: 'https://krishyaa06.github.io/prism-bots-panel/',
        support: 'https://dc.gg/prismprotocol',
        buy: 'https://krishyaa06.github.io/prism-bots-panel/#/premium/neonpulse',
        github: 'https://github.com/krishyaa06/neonpulse-music-bot'
    }
};
