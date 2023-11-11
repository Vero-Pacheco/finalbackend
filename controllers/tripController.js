const { Trip } = require ('../models/tripmodel')


const tripscontroller = {

    async viajeGet(req, res) {
        const viaje = await Trip.find()
        res.status(200).json(viaje)
    },

    async viajePost(req, res) {
        try {
            const newTrip = new Trip(req.body)
            await newTrip.save() 
            res.status(201).json(newTrip) 
        } catch (error) {
            res.status(400).json(error)
        }
    },
    
    
    async viajePut (req, res) {

        const {id} = req.params;

        const {nombre, ciudades, dias, precio, estado, ...resto} = req.body;

        try {
         viaje = await Trip.findByIdAndUpdate(id,{$set:{nombre, estado, ...resto}})
        res.status(201).json({
            msg:"Usuario actualizado con exito",
            viaje})
        } catch (error) {
            res.status(400).json({error, msg: "hubo un error"})
    }
    },

    async viajeHide (req, res) {
        
        const {id} = req.params;

        await Trip.findByIdAndUpdate(id,{estado:false})

        res.status(201).json({
            msg:"viaje oculto con exito",
        })
    },

    async viajeDelete (req, res) {
        
        const {id} = req.params;

        await Trip.findByIdAndDelete(id)
    
        res.status(201).json({
            msg:"Borrado exitoso",
        })
    }
}


module.exports = tripscontroller