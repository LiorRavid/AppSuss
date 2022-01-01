import { storageService } from '../../../services/storage.service.js'
export const MailService = {
    getEmailById,
    query,
    removeMail,
    addMail,
    

}

const KEY = 'mailDB';
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const emails = [{
        id: 'e101',
        from: 'helena',
        subject: 'Miss you!',
        body: 'Would love to catch up sometime and sit for a cup of coffee',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        sender: 'helena@sababa.com'
    },
    {
        id: 'e102',
        from: 'eyal',
        subject: 'going out to a party',
        body: 'what are you doin next friday night??',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        sender: 'eyal@awesome.com'
    },
    {
        id: 'e103',
        from: 'cat',
        subject: 'angry meow!',
        body: 'where did you hide my food hooman?',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        sender: 'catboy@meow.com'
    },
    {
        id: 'e104',
        from: 'edmond',
        subject: 'heard you are learning react',
        body: 'that is amazing to hear!! if you need any help with it contact me whenever you like :)',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        sender: 'edmond@wowmail.com'
    }
    
]

_createMails()

const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki',
    // no need to support complex text search isRead: true,
    // (optional property, if missing: show all) isStared: true, 
    // (optional property, if missing: show all) lables: ['important', 'romantic'] // has any of the labels 
}

function _createMail (to,subject,body) {
const id =  ('a' + Math.floor(Math.random() * 10000))
const from = 'johny'
const sentAt = Date.now()
const newMail = {
    id: id,
    from: from,
    subject: subject,
    body: body,
    isRead: false,
    sentAt: sentAt,
    to: to,
    sender: 'user@appsus.com'
}
return newMail
}
function addMail(to,subject,body) {
    let mails = _loadMailsFromStorage();
    let newMail = _createMail(to,subject,body);
    mails = [newMail, ...mails];
    _saveMailsToStorage(mails);
    return Promise.resolve();
  }
  

function getEmailById(id) {
    const mails = _loadMailsFromStorage() 
    const mail = mails.find(mail => mail.id === id)
    return Promise.resolve ( mail)
}

function removeMail(id) {
    let mails = _loadMailsFromStorage();
    mails = mails.filter((mail) => mail.id !== id);
    _saveMailsToStorage(mails);
    return Promise.resolve();
  }

function query(filterBy = null) {
    const mails = _loadMailsFromStorage()
    if (!filterBy) return Promise.resolve(mails)
    const filteredMails = _getFilteredMails(mails, filterBy)
    return Promise.resolve(filteredMails)

}
function _createMails() {
    let mails = _loadMailsFromStorage();
    if (!mails || !mails.length) 
    {
      mails = emails;
    }
    _saveMailsToStorage(mails);
  }

function _saveMailsToStorage(mails) {
    storageService.saveToStorage(KEY, mails)
}

function _loadMailsFromStorage() {
    return storageService.loadFromStorage(KEY)
}