import { request } from '@/service/axios'

import { getCanvasData } from './params-type'
import { GetCityTotal } from './res-type'

enum APIS {
  GET_CITY_TOTAL_NUMBER = '/xxxx/xxxx/xxxxx'
}

export const getCityTotalNumber = (params: getCanvasData) =>
  request.get<GetCityTotal>(APIS.GET_CITY_TOTAL_NUMBER, params)
