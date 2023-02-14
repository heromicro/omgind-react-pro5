import md5 from 'md5';
import uuid from 'uuid/v9';


// md5加密
export function md5Hash(value:string) {
  return md5(value);
}

// 创建UUID
export function newUUID() {
  return uuid();
}

export function fillFormKey(data:any[]) {
  if (!data) {
    return [];
  }
  return data.map(item => {
    const nitem = { ...item };
    if (!nitem.key) {
      nitem.key = newUUID();
    }
    return nitem;
  });
}
