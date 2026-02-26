import GooglePage from '../pageobjects/google.page.ts';
Given(/^I am on the google page$/, async () => {
    await GooglePage.open();
});

When(/^I search for "([^"]+)"$/, async (term) => {
    if (browser.getUrl().includes('google')) {
        await GooglePage.search(term);
    } else {
        await YoutubePage.search(term);
    }
});

When(/^I click on the Videos tab$/, async () => {
    await GooglePage.goToVideosTab();
});

When(/^I click the first video result$/, async () => {
    await GooglePage.clickFirstVideo();
});

Then(/^the video page should open$/, async () => {
    // Esperar a que la URL cambie o el título de la página cambie
    await browser.pause(2000);
    const url = await browser.getUrl();
    expect(url).not.toContain('google');
});
When(/^I search for "([^"]+)"$/, async (term) => {
    await YoutubePage.search(term);
});
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import YoutubePage from '../pageobjects/youtube.page.ts';


Given(/^I am on the (\w+) page$/, async (page) => {
    if (page === 'login') {
        await LoginPage.open();
    } else if (page === 'youtube') {
        await YoutubePage.open();
    }
});
When(/^I play the first video$/, async () => {
    await browser.pause(5000);

    await YoutubePage.playFirstVideo();
});

When(/^I click in the middle of the video$/, async () => {
    await YoutubePage.clickMiddleOfVideo();
});

When(/^I wait for (\d+) seconds$/, async (seconds) => {
    await browser.pause(Number(seconds) * 1000);
});

Then(/^the video should continue playing$/, async () => {
    await browser.pause(5000);
    const video = await YoutubePage.videoPlayer;
    // Wait a moment to ensure playback state is updated
    await browser.pause(500);
    const isPaused = await browser.execute((vid) => vid.paused, video);
    expect(isPaused).toBe(false);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

