/*
Copyright 2022 DigitalOcean

This code is licensed under the MIT License.
You may obtain a copy of the License at
https://github.com/digitalocean/nginxconfig.io/blob/master/LICENSE or https://mit-license.org/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions :

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import fs from 'fs';
import { URL } from 'url';

// Fetch the posthtml template and convert it to an ejs template
const main = () => {
    const buildDir = '../../../build';
    let template = fs.readFileSync(new URL(`${buildDir}/base.html`, import.meta.url), 'utf8');

    // Inject our title now
    template = template.replace('<block name="title"><title>DigitalOcean</title></block>', '<title>NGINXConfig</title> \
    <meta charset=”utf-8”/>');

    // Inject our app mounting point
    template = template.replace('<block name="content"></block>', '<div id="app"></div>');

    fs.writeFileSync(new URL(`${buildDir}/index.html`, import.meta.url), template);
};

main();
