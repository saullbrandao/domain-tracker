import { NextApiRequest, NextApiResponse } from 'next'
import { geoApi } from 'services/geoApi'

type Location = {
  region: string
  country: string
  postalCode: string
  timezone: string
  lat: number
  lng: number
}

type Data = {
  ip: string
  isp: string
  location: Location
}

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>,
) {
  try {
    const { data } = await geoApi.get('', {
      params: {
        apiKey: process.env.NEXT_GEO_API_KEY,
        domain: req.query.domain,
      },
    })
    const newData = {
      ip: data.ip,
      isp: data.isp,
      location: {
        region: data.location.region,
        country: data.location.country,
        postalCode: data.location.postalCode,
        timezone: data.location.timezone,
        lat: data.location.lat,
        lng: data.location.lng,
      },
    }

    res.json(newData)
  } catch (err) {
    res.status(500).json({ message: 'error' })
  }
}
