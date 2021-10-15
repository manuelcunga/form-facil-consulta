import { Router } from "express"
const api = Router()

api.use('/',(request,response)=>{
  return response.json({
    Message: 'FacilConsulta',
    description: `Bem vindo a facilConsulta 
    plantaforma que conecta pacientes e médicos especialistas`
  })
})

export { api }


