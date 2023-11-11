const axios = require ('axios')

const apicontroller  = {
       
   async busquedaApi( req, res) {
            try {
                const {data} = await axios.get('https://fakestoreapi.com/products')
                res.json(data)
            } catch (error) {
                res.status(404).json({status: error.response.status, data: error.response.data})
            }
        }
    
}

module.exports = apicontroller