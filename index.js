#!/usr/bin/env node
/* eslint no-console:off */
'use strict';

const express = require('express');
const program = require('commander');
const path = require('path');
const PROJECTS_FOLDER = 'projects';
const PORT = 1337;

program
	.version('0.0.1')
	.command('serve <project_path>')
	.description('Serve the project specified (eg. angular/draggable')
	.action(serve);

program.parse(process.argv);

function serve(project) {
	let app = express();
	try{
		app.use('/bower_components/', express.static(path.join(__dirname, 'bower_components')));
		app.use('/', express.static(path.join(__dirname, PROJECTS_FOLDER, project)));
		app.listen(PORT, () => console.log(`Serving '${project}' on http://localhost:${PORT}/`));
	}
	catch(error){
		console.log(error);
	}
}