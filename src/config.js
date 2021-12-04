/**
OPCION_DATOS: Variable de entorno que define donde se graban los datos
*/
// const OPCION_DATOS =  'memoria' 
// const OPCION_DATOS =  'json'
// const OPCION_DATOS =  'mongodb'
const OPCION_DATOS =  'firebase'

export default {
    OPCION_DATOS,
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        uri: 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
        nombreDb: 'coderhouse',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "/* BORRADO * /",
        "private_key_id": "/* BORRADO * /",
        "private_key": "-----BEGIN PRIVATE KEY-----/* BORRADO * /-----END PRIVATE KEY-----\n",
        "client_email": "/* BORRADO * /",
        "client_id": "/* BORRADO * /",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "/* BORRADO * /"
      }
      
}
