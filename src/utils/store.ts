export const storeKeys = {
  AccessToken: 'Access-Token',
};

export const storeType = {
  localStorage,
  sessionStorage,
};

const defaultStorage = storeType.localStorage;

function set(key: string, value: any, ...options: any[]) {
  const storage = options[0] || defaultStorage;
  storage.setItem(key, JSON.stringify(value));
}

function get(key: string, ...options: any[]) {
  const storage = options[0] || defaultStorage;
  const value = storage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function remove(key: string, ...options: any[]) {
  const storage = options[0] || defaultStorage;
  storage.removeItem(key);
}

export default {
  set,
  get,
  remove,
};
