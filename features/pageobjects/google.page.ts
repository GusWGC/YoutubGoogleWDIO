import Page from './page';

class GooglePage extends Page {
    async open(): Promise<void> {
        await browser.url('https://www.google.com');
    }

    get searchInput() {
        return $('input[name="q"]');
    }

    get searchButton() {
        // Google puede ocultar el botón, pero Enter funciona
        return $('input[name="btnK"]');
    }

    async search(term: string): Promise<void> {
        await this.searchInput.waitForDisplayed({ timeout: 10000 });
        await this.searchInput.setValue(term);
        await browser.keys('Enter');
        await browser.pause(2000);
    }

    get videosTab() {
        return $("a[aria-label='Videos']");
    }

    async goToVideosTab(): Promise<void> {
        await this.videosTab.waitForDisplayed({ timeout: 10000 });
        await this.videosTab.click();
        await browser.pause(2000);
    }

    get firstVideoResult() {
        // Selector robusto para el primer resultado de video
        return $("div#search a");
    }

    async clickFirstVideo(): Promise<void> {
        await this.firstVideoResult.waitForDisplayed({ timeout: 10000 });
        await this.firstVideoResult.click();
    }
}

export default new GooglePage();
