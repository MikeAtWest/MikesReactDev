import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should have h1 that says Example News Components', (done) => {
        const index = fs.readFileSync('./src/components/helloWorld/helloPage.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Example News Components");
            done(); //Reading the index file is asynchronous, so we need to return this done() callback to let Mocha know we're done.
            window.close();
        });
    });
});
