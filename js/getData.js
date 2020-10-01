const PARAM = {
  cat: 'category',
  subcat: 'subcategory',
  search: ['name', 'description', 'category', 'subcategory']
};

export const getData = {
  url: 'database/dataBase.json',
  // запрос на сервер с помощью fetch на url 'database/dataBase.json'
  get(process) {
    // console.log(this);
    fetch(this.url)
      // обработка данных перевод из json в массив
      .then((response) => {
        return response.json()
      })
      // передача данных в procces
      .then(process);
  },
  wishList(list, callback) {
    this.get(
      // таже функция procces
      (data) => {
        // фильтруем список/массив dataBase.json и возвращаем те которые содержат id из списка wishList
        const result = data.filter((item) => {
          return list.includes(item.id);
        });
        // запускаем callback
        callback(result);
      }
    )
  },
  item(value, callback) {
    this.get(
      (data) => {
        const result = data.find(item => item.id === value);
        // запускаем callback
        callback(result);
      }
    )
  },
  cart(list, callback) {
    this.get(
      (data) => {
        const result = data.filter((item) => list.some(obj => obj.id === item.id));
        // запускаем callback
        callback(result);
      }
    )
  },
  category(prop, value, callback) {
    this.get(
      (data) => {
        const result = data.filter(item => item[PARAM[prop]].toLowerCase() === value.toLowerCase());
        // запускаем callback
        callback(result);
      }
    )
  },
  search(value, callback) {
    this.get(
      (data) => {
        const result = data.filter(item => {
          for (const prop in item) {
            if (PARAM.search.includes(prop) && item[prop].toLowerCase().includes(value.toLowerCase())) {
              return true;
            }
          }
        });
        // запускаем callback
        callback(result);
      }
    )
  },
  catalog(callback) {
    this.get(
      (data) => {
        const result = []; //массив из категорий.
        // перебираем массив данных и проверяем есть ли в result уже такая категория, если нет то пушим в массив result
        data.forEach(item => {
          if (!result.includes(item.category)) {
            result.push(item.category);
          }
        });
        // выводим result
        callback(result);
      }
    )
  },
  subCatalog(value, callback) {
    this.get(
      (data) => {
        const result = [];
        data.filter(item => item.category.toLowerCase() === value.toLowerCase())
          .forEach(item => {
            if (!result.includes(item.subcategory))
              result.push(item.subcategory);
          });
        callback(result);
      }
    )
  }
};