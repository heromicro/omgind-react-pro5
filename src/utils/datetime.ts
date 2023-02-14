
import moment,{MomentInput} from 'moment';

// 格式化时间戳
export function formatTimestamp(val:number, format:string) {
  let f = 'YYYY-MM-DD HH:mm:ss';
  if (format) {
    f = format;
  }
  return moment.unix(val).format(f);
}

// 解析时间戳
export function parseTimestamp(val:number) {
  return moment.unix(val);
}

// 解析日期
export function parseDate(val:MomentInput) {
  return moment(val);
}

// 格式化日期
export function formatDate(val:MomentInput, format:string) {
  let f = 'YYYY-MM-DD HH:mm:ss';
  if (format) {
    f = format;
  }
  return moment(val).format(f);
}
