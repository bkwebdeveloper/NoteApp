const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    console.log("Your notes...");
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log( chalk.bold.green('New note added successfully 😊'));
    } 
    else {
        console.log(chalk.bold.red("Note title is already taken! 😠"))
    }
    
}

const removeNote = function(title){
    const notes = loadNotes();
    const noteToBeRemoved = notes.filter(function(note) {
        return note.title === title;
    });

    if(noteToBeRemoved.length !== 0){
        notes.splice(noteToBeRemoved[0], 1);
        saveNotes(notes);
        console.log( chalk.bold.green('Note removed successfully 😊'));
    } 
    else {
        console.log(chalk.bold.red("The note wasn't found!"))        
    }
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote  
};