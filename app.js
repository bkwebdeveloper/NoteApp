const chalk = require('chalk');
const yargs = require('yargs');

// Some house keeping:-)
const log = console.log;

yargs.version('1.0.0');
// Create Add command 
yargs.command({
    command: 'add',
    describe: 'Add an item',
    handler: function(){
        log('Adding an item')
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove an item',
    handler: function(){
        log('Remove an item')
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lista all items',
    handler: function(){
        log('Lista all items')
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

log(yargs.argv) 
log('hello')