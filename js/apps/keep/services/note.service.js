import { utilService } from '../../../services/util.service.js';
import { storageService } from '../../../services/storage.service.js';

export const noteService = {
    query,
    removeNote,
    addNote,
    updateNoteStyle,
    getNoteById,
    updateNoteTodo,
    saveEditNote,
    duplicateNote
};

const STORAGE_KEY = 'noteDB';
_createNotes()

function _starterNotes() {
    return [{
        id: utilService.makeId(),
        type: 'note-img',
        isPinned: false,
        info: {
            title: '',
            url: 'https://i.pinimg.com/originals/4f/b5/88/4fb5886838c0492fc4b0cee3de87b648.jpg'
        },
        style: { backgroundColor: '#fff475' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: true,
        info: {
            title: '',
            txt: `
                    if (brain! = empty) {
                        keepCoding();
                    } else {
                        drinkCoffee();
                    }
                `
        },
        style: { backgroundColor: '#cbf0f8' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-video',
        isPinned: false,
        info: {
            title: 'React explained',
            url: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM'
        },
        style: { backgroundColor: '#e6c9a8' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-img',
        isPinned: false,
        info: {
            title: '',
            url: 'https://assets.hongkiat.com/uploads/programming-jokes/joke-job-arrays.jpg'
        },
        style: { backgroundColor: '#aecbfa' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: false,
        info: {
            title: 'Sprint 3',
            txt: 'omg'
        },
        style: { backgroundColor: '#e8eaed' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: false,
        info: {
            title: '',
            txt: 'I want to eat hamburger today'
        },
        style: { backgroundColor: '#ffffff' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: false,
        info: {
            title: '',
            txt: 'Remember to look at this code'
        },
        style: { backgroundColor: '#ffffff' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: false,
        info: {
            title: '',
            txt: 'Proggrammer - A machine that turns coffee into code'
        },
        style: { backgroundColor: '#fff475' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: false,
        info: {
            title: '',
            txt: 'blah blah blah'
        },
        style: { backgroundColor: '#ffffff' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-todos',
        isPinned: true,
        info: {
            title: 'Sprint list so far',
            todos: [{ txt: 'minesweeper', isChecked: true }, { txt: 'memegen', isChecked: true }, { txt: 'appsus', isChecked: false }],
        },
        style: { backgroundColor: '#ccff90' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-img',
        isPinned: false,
        info: {
            title: 'Me while sprint 3',
            url: 'https://media2.giphy.com/media/unQ3IJU2RG7DO/giphy.gif'
        },
        style: { backgroundColor: '#ffffff' },
        label: [],
    },
    {
        id: utilService.makeId(),
        type: 'note-img',
        isPinned: false,
        info: {
            title: '',
            url: 'https://miro.medium.com/max/1050/1*80PmaIWGzskApKLQ_uSpZg.png'
        },
        style: { backgroundColor: '#aecbfa' },
        label: [],
    },
    ];
}

function query(filterBy = null) {
    const notes = _loadNotesFromStorage()
    if (!filterBy) return Promise.resolve(notes)
    const filteredNotes = _getFilteredNotes(notes, filterBy)
    return Promise.resolve(filteredNotes)

}

function duplicateNote(note) {
    let notes = _loadNotesFromStorage()
    let newNote = note;
    newNote.id = utilService.makeId();
    newNote.isPinned = false;
    notes.unshift(newNote)
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function removeNote(noteId) {
    let notes = _loadNotesFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveNotesToStorage(notes);
    return Promise.resolve()
}

function addNote(type, value) {
    let notes = _loadNotesFromStorage()
    let newNote = _createBasicNote(type);
    if (type === 'note-txt') newNote.info['txt'] = value;
    else if (type === 'note-video' || type === 'note-img') newNote.info['url'] = value;
    else if (type === 'note-todos') newNote.info['todos'] = value;
    notes = [newNote, ...notes];
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function updateNoteStyle(noteId, property, value) {
    const notes = _loadNotesFromStorage()
    let noteIdx = notes.findIndex(function (note) {
        return note.id === noteId;
    })
    notes[noteIdx].style[property] = value;
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function updateNoteTodo(noteIdx, todoIdx, value) {
    const notes = _loadNotesFromStorage()
    let Idx = notes.findIndex(function (note) {
        return note.id === noteIdx;
    })
    notes[Idx].info.todos[todoIdx].isChecked = value;
    _saveNotesToStorage(notes);
    return Promise.resolve(notes[Idx]);
}

function saveEditNote(editNote){
    const notes = _loadNotesFromStorage()
    let Idx = notes.findIndex(function (note) {
        return note.id === editNote.id;
    })
    notes[Idx] = editNote
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function getNoteById(noteId) {
    const notes = _loadNotesFromStorage()
    var note = notes.find(function (note) {
        return noteId === note.id
    })
    return Promise.resolve(note)
}


function _getFilteredNotes(notes, filterBy) {
    let { vendor, minSpeed, maxSpeed } = filterBy
    minSpeed = minSpeed ? minSpeed : 0
    maxSpeed = maxSpeed ? maxSpeed : Infinity
    return cars.filter(car => {
        return car.vendor.includes(vendor) && car.speed >= minSpeed && car.speed <= maxSpeed
    })
}

function _createNotes() {
    let notes = _loadNotesFromStorage();
    if (!notes || !notes.length) {
        notes = _starterNotes();
        _saveNotesToStorage(notes);
    }
    return notes;
}

function _createBasicNote(type) {
    return {
        id: utilService.makeId(),
        type: type,
        isPinned: false,
        info: {
            title: '',
        },
        style: {
            backgroundColor: 'white'
        },
        label: [],
    }
}

function _saveNotesToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, notes);
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY);
}
