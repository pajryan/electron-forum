// Here is the starting point for your application code.

// Small helpers you might want to keep
import './helpers/context_menu.js';
import './helpers/external_links.js';

// All stuff below is just to show you how it works. You can delete all of it.
import { remote } from 'electron';
import jetpack from 'fs-jetpack';
import { haveALook } from './forum/forum';
import { imageFetch } from './forum/imageFetch';
import env from './env';

// import { thing } from './hello_world/hello_world';


const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files form disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read('package.json', 'json');

var btnXML = document.getElementById('btn_buildXML');
btnXML.addEventListener('click', haveALook)


var btnImgFetch = document.getElementById('btn_fetchImages');
btnImgFetch.addEventListener('click', imageFetch)


// thing();

