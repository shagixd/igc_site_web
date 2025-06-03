import React from 'react';

const Diplomas_Catalogos = () => (
    <>
        <div>
            <h2>Catálogo de Diplomas</h2>
            <p>Solicita el diploma en el cual quieres especializarte y potenciar tu conocimiento para mejorar tus oportunidades laborales.</p>
        </div>
        
        <div>
            <form method="post" action="">
                <div>
                    <label>Nombre:</label><br />
                    <input type="text" name="nombre" required />
                </div>
                <div>
                    <label>Apellido:</label><br />
                    <input type="text" name="apellido" required />
                </div>
                <div>
                    <label>Correo:</label><br />
                    <input type="email" name="correo" required />
                </div>
                <div>
                    <label>Catálogo de Diplomas:</label><br />
                    <input type="text" name="catalogo" required />
                </div>
                <div>
                    <label>Comentario:</label><br />
                    <textarea name="comentario" rows="3"></textarea>
                </div>
                <button type="submit">Enviar solicitud</button>
            </form>
        </div>
    </>
);

export default Diplomas_Catalogos;