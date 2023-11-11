const { Users } = require ('../models/usersmodel')
const bcryptjs = require ('bcryptjs');

const userscontroller = {

    async usuariosGet(req, res) {
        const usuario = await Users.find()
        res.status(200).json({usuario, msg:"Estos son los usuarios en la base de datos"})
    },


    async usuariosPost (req, res) {
      const {nombre, apellido, mail, password} = req.body;
  
      const newUser = new Users({nombre, apellido, mail, password});

      const salt = bcryptjs.genSaltSync();

      newUser.password = bcryptjs.hashSync(password, salt)

      try {
        await newUser.save()
        res.status(201).json({
            msg: 'usuario agregado correctamente',
            newUser
        }) 
        } catch (error) {
        res.status(400).json(error)
    }
    },


    async usuariosPut (req, res) {

        const {id} = req.params;

        const {password, nombre, apellido, mail, google, ...resto} = req.body;

        if(password) {
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt)
        }

         usuario = await Users.findByIdAndUpdate(id,{$set:{nombre, ...resto}})
        res.status(201).json({
            msg:"Usuario actualizado con exito",
            usuario
        })

    },


    async usariosDelete (req, res) {

        const {id} = req.params;
        
        await Users.findByIdAndDelete(id) 

        res.status(201).json({
            msg: "Usuario eliminado con exito"
    })
    }
}


module.exports = userscontroller