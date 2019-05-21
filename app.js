const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

const log = console.log;

yargs.version('1.0.0');

// Create Add command 
yargs.command({
    command: 'add',
    describe: 'Add an item',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove an item',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lista all items',
    handler: function(){
        log('List all items')
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read an item',
    handler: function(){
        log('Read an item')
    }
});

yargs.parse();
// log(yargs.argv) 