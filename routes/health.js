import express from 'express'
import { client as graphqlClient } from '../graphql'
import * as graphqlQueries from '../graphql/queries'

import jwtDecode from 'jwt-decode';
const router = express.Router()

router.get('/', (req, res) => {
    const decoded = jwtDecode(process.env.JWT_TOKEN)
    const currentTime = Date.now().valueOf() / 1000;
    const fetchBotConfigurations = graphqlClient.query({ query: graphqlQueries.fetchBotConfigurations })
    
    // test graphql connection 
    fetchBotConfigurations
    .then( console.log('graphql ok') )
    .catch(err => res.status(500).send(`${JSON.stringify(err)}`.red))
    
    // test token expiration
	if (currentTime > decoded.exp) { 
        res.status(500).send('Token expirado')
    }
    res.end(JSON.stringify({ status: 'ok' }))

    
    
})

export default router
