import request from '@/utils/request'

export function getData() {
  return request({
    url: 'http://1.1.1.1:808/11111',
    method: 'get'
  })
}
