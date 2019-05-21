const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    console.log("Your notes...");
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title );

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log( chalk.bold.green.inverse('New note added successfully 😊'));
    } 
    else {
        console.log(chalk.bold.red.inverse("Note title is already taken! 😠"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const noteToKeep = notes.filter((note) => note.title !== title );

    if(notes.length > noteToKeep.length){
        saveNotes(noteToKeep);
        console.log( chalk.bold.green.inverse('Note removed successfully😊'));
    } 
    else {
        console.log(chalk.bold.red.inverse("The note wasn't found!"))        
    }
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote  
};