'use strict';

var phoneBook = new Array(); // Здесь вы храните записи как хотите

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {
    if (isValidName(name) && isValidPhone(phone) && isValidEmail(email)){
        phoneBook.push({'name':name,'phone':phone,'email':email, 'hash':name+";"+phone+";"+email});
        console.log("Запись "+name+' '+phone+' '+email+" добавлена")
    }
    console.log("Запись "+name+' '+phone+' '+email+" не корректна")
};

function isValidEmail(email) {
    if (/[^@;]+@[^@;]+\.\w/.test(email)) {
        return true
    }
    return false
}
function isValidPhone(phone){
    if (/^(([\+]?)?([\d]{0,3})|([\d]{1,2}))[\s]?(\(?([\d]{3}\))|[\d]{3})[\s|-]?[\d]{3}[\s|-]?[\d]{1}[\s|-]?[\d]{3}/.test(phone)) {
        return true 
    }
    return false
}
function isValidName(name){
  if (/\s/.test(name)) {
        return false
    }
    return true  
}
/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {
    console.log("Поиск записей по запросу: "+query)
    var re = new RegExp(query);
    for (var i = 0; i < phoneBook.length; i++) {
        if (re.test(phoneBook[i]['hash'])) {
            console.log(phoneBook[i]['name']+'  '+phoneBook[i]['phone']+'   '+phoneBook[i]['email'])
        }
    }
    return 0;
};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {
    var re = new RegExp(query);
    for (var i = 0; i < phoneBook.length; i++) {
        if (re.test(phoneBook[i]['hash'])) {
            console.log(phoneBook[i]['name']+'  '+phoneBook[i]['phone']+'   '+phoneBook[i]['email']+'   - запись удалена');
            delete phoneBook[i]
        }
    }
    return 0;
};

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');
    console.log("Этот метод не хочет работать");
    // Ваша чёрная магия:
    // - Разбираете записи и з `data`
    // - Добавляете каждую запись в книгу
    return 0;
};

/*
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
module.exports.showTable = function showTable() {
    console.log("Этот метод не хочет работать");
    // Ваша чёрная магия здесь
    return 0;
};
