import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)

    const users = [
        {id: 1, name: 'Wagao'},
        {id: 2, name: 'Wagao'},
        {id: 3, name: 'Wagao'}
    ]

    return response.json(users)
}