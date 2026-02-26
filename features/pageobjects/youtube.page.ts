import Page from './page';

class YoutubePage extends Page {
    async search(term: string): Promise<void> {
        const searchInput = await $("input[name='search_query']");
        await searchInput.waitForDisplayed({ timeout: 10000 });
        // Opcional: verificar clase si hay más de un input con ese name
        // const searchInput = await $("input.yt-searchbox-input[name='search_query']");
        await searchInput.setValue(term);
        // Simular presionar Enter para buscar
        await browser.keys('Enter');
        // Esperar a que los resultados carguen
        await browser.pause(2000);
    }
    async open(): Promise<void> {
        await browser.url('https://www.youtube.com');
    }

    get firstVideo() {
        // Selector para el enlace del primer video en los resultados de búsqueda
        return $("ytd-video-renderer a#video-title");
    }

    get videoPlayer() {
        return $('video');
    }

    async playFirstVideo(): Promise<void> {
        await this.firstVideo.waitForExist({ timeout: 10000 });
        await this.firstVideo.click();
        await this.videoPlayer.waitForExist({ timeout: 10000 });
    }

    async clickMiddleOfVideo(): Promise<void> {
        const video = await this.videoPlayer;
        const rect = await video.getRect();
        const x = Math.floor(rect.x + rect.width / 2);
        const y = Math.floor(rect.y + rect.height / 2);
        await browser.performActions([
            {
                type: 'pointer',
                id: 'mouse',
                parameters: { pointerType: 'mouse' },
                actions: [
                    { type: 'pointerMove', duration: 0, x, y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        await browser.releaseActions();
    }
}

export default new YoutubePage();
