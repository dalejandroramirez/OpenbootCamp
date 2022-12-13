import React ,{ useState }from 'react';
import axios from 'axios'

function NotificationManager() {

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const EnviarNotification = () => {
    axios.post('http://localhost:8000/custom_notification', {
      title,
      message
    }).then(r => console.log(r))
      .catch(e => console.log(e))
  };

  return (
    <div>
      <h1>Te doy la bienvenida al gestor de Notificaciones</h1>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        <input type='text' placeholder='Título' value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder='Escribir un mensaje' value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button onClick={EnviarNotification}>Send Notification</button>
      </div>
    </div>
  )
}

export default NotificationManager