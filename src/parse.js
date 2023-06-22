import { JSDOM } from 'jsdom';

const checkElement = (dom, element) => {
  const result = (dom.querySelector(element))
    ? dom.querySelector(element).textContent
    : '---';

  return result;
};

const parse = async (file) => {
  const data = {
    items: [],
  };

  const dom = await JSDOM.fromFile(file);
  dom.window.document.querySelectorAll('.book').forEach((book) => data.items.push({
    title: checkElement(book, '.title'),
    price: checkElement(book, '.price'),
    rating: checkElement(book, '.rating'),
    availability: checkElement(book, '.availability'),
  }));

  return data;
};

export default parse;
