export const MailService = {
    getEmailById,
    query,

}
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const emails = [{
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: 'e102',
        subject: 'love you',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: 'e103',
        subject: 'meow!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    }
]

const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki',
    // no need to support complex text search isRead: true,
    // (optional property, if missing: show all) isStared: true, 
    // (optional property, if missing: show all) lables: ['important', 'romantic'] // has any of the labels 
}

function getEmailById(id) {
    const mailId = emails.find(email => email.id = id)
    return mailId
}

function query(filterBy = null) {
    const mails = _loadMailsFromStorage()
    if (!filterBy) return Promise.resolve(mails)
    const filteredMails = _getFilteredMails(mails, filterBy)
    // return Promise.resolve(filteredMails)
    return 'null'

}
// return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
// function _createMails() {
//     var mails = _loadMailsFromStorage()
//     if (!mails || !mails.length) {
//         mails = []
//         gVendors.forEach(vendor => {
//             const carToSave = { vendor }
//             cars.push(_createCar(carToSave))
//         })
//     }
//     _saveCarsToStorage(cars);
// }

function _saveMailsToStorage(cars) {
    storageService.saveToStorage(KEY, cars)
}

function _loadMailsFromStorage() {
    return storageService.loadFromStorage(KEY)
}