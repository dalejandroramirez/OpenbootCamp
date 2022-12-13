const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

// Llaves para darle permisos al webpush
const vapidKeys = {
                  "publicKey":"BKCbbYB_63Y1BLgb4E1Y9yAMbfUTdM-I2_uX66XvSuw_0QFKTHVvtRCyh1d5D1ApUaCLjU_R8fR0giV42Aba2N8",
                  "privateKey":"V393HOwvkqZsjGVUbNlgpVJMNmTiNbnp8WUIo9FgsG0"
                  }


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Dandole permisos al webpush para poder enviar las notificaciones
webpush.setVapidDetails(
  'mailto:dalejandro.ramirez.dev@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
)

// 

const subscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/eijvSXFWfps:APA91bEHFN3pvwWc6cquW_AVGY-iYYRu9IR42D1X_CV-gCvKh0VQ9uuhI_6PXZ_qyzhNiOf05HDl0E4FikX_EMkbp2Hw7lvOf0IaD0GRaEvEoAhuRyu71dyIsiaQ_HWi2-HKm-yqNjPG',
  expirationTime: null,
  keys: {
    p256dh: 'BGQGmSTVDWPWEe18N_tc7sJWOSee4vHXEp6Aa2pmUOxKuR74ija4UJXku381jk2rFKx2eT6L2NJ6ikxB9eZFQBQ',
    auth: 'U-7vyoDGi2lHITAAJZpTsQ'
  }
}

// Generar una ruta estandar que se mostrara en el port 8000
app.get('/', (req, res) => {
  res.send("Todo ok, funcionando correctamente");
  payload = JSON.stringify({ title: "Hola desde el servidos", message : "Este mensase se envia desde el index del servidor"  })
  webpush.sendNotification(subscription, payload);
});

// Generar un post en subscription y pasar por pantalla el request
app.post('/subscription', (req,res) => {

// const pushSubscription = req.body.pushSubscription; //Mismo de abajo
  const { pushSubscription } = req.body;
  console.log(pushSubscription);
  res.sendStatus(200);
})

//  Escuchar en el puerto 8000
const port = 8000;

app.listen(port, () => console.log(`Server listening on ${port} `));