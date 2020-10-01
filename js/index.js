'use strict';
// импорт функции
import { catalog } from './catalog.js';
// импорт по дефолту
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
import { loadData } from './loadData.js';
// import { getGoods } from './getData.js';

// запуск функций
generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();

catalog();
loadData();