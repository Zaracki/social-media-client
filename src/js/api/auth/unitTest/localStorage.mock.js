const setItem = jest.fn((key, value) => {
  localStorage[key] = value;
});

const getItem = jest.fn((key) => {
  return localStorage[key] || null;
});

const removeItem = jest.fn((key) => {
  delete localStorage[key];
});

const localStorageMock = {
  setItem,
  getItem,
  removeItem,
};

export default localStorageMock;
