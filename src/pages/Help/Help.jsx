import React from 'react'
import './Help.css'
import Username from '../../images/username.JPG'
import UserSettings from '../../images/userSettings.JPG'
import Newenvir from '../../images/newEnvir.JPG'
import SystemName from '../../images/systemName.JPG'
import RepeatId from '../../images/repeatID.JPG'
import ModifyName from '../../images/modifyName.JPG'
import Update from '../../images/Update.JPG'
import Delete from '../../images/delete.JPG'
import ProfilePic from '../../images/profilePic.JPG'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/nav/Navbar'

class Help extends React.Component {
    render(){
  return(
    <React.Fragment>
        
      <div>
        <div className="Help__content">
            <Navbar theme={"Navbar"}></Navbar>  
        </div>
        <div className="Info__content_help">
            <div className="Info__help_img" >
                <img src={Username} alt="kit" width="80%" height="80%"/>
            </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help">Cambio de nombre de usuario</h3>
            <p className="Info__paragraph_help">Ve a "configuración del perfil" para seleccionar la opción de cambio de nombre. Una vez dentro, coloca el nuevo nombre de usuario que deseas utilizar y presiona "guardar". NOTA: Si el nombre ya está en uso, se verá el siguiente mensaje "Este Username ya está en uso".</p>
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_help">
        <div className="Info__help_img" >
            <img src={UserSettings} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help">Perfil del usuario</h3>
            <p className="Info__paragraph_help">En la barra inferior, se encuentran dos íconos. En el primero podrás encontrar tu perfil de usuario donde tendrás acceso a la sección de ayuda, cambio de nombre y un acceso a tus ambientes registrados.</p>
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_help">
        <div className="Info__help_img" >
            <img src={Newenvir} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help font-face-ap">Creación de un nuevo ambiente</h3>
            <p className="Info__paragraph_help">Al seleccionar la opción "ambientes", tendrás acceso a una vista previa de todos tus ambientes creados. Si se desea agregar uno nuevo, solo es necesario seleccionar la opción "Crear nuevo ambiente" en la parte superior.</p>
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_help">
        <div className="Info__help_img" >
            <img src={SystemName} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help font-face-ap">Creación de un nuevo ambiente (Parte 2)</h3>
            <p className="Info__paragraph_help">Al seleccionar la opción "Crear nuevo ambiente", aparecerá la siguiente pantalla, donde deberá registrar su ambiente con un nombre personalizado que pueda identificar, seleccione el tipo de animal del que FarmENV se hará cargo y finalmente registrará el mismo ID de sistema que se adjuntó en el kit comprado con anterioridad.</p>
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_help">
        <div className="Info__help_img" >
            <img src={RepeatId} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help font-face-ap">ID inexistente/equivocado</h3>
            <p className="Info__paragraph_help">ID inexistente/equivocado
Si el ID registrado no existe o no es el correcto, se mostrará el siguiente mensaje. De ser este el caso, se tendrá la opción de eliminar el ambiente completo o cambiar únicamente el ID por uno nuevo, seleccione una de las dos opciones.</p>
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_help">
        <div className="Info__help_img" >
            <img src={ModifyName} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help font-face-ap">Modificación de los ambientes</h3>
            <p className="Info__paragraph_help">Para modificar nombre, ID o tipo de animal que se seleccionó con anterioridad, solo hace falta seleccionar la opción "Modificar" que se encuentra en la parte superior de los datos del interior del ambiente.</p>
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_help">
        <div className="Info__help_img" >
            <img src={Update} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help font-face-ap">Modificación de los ambientes (Parte 2)</h3>
            <p className="Info__paragraph_help">Al seleccionar la opción "Modificar", se mostrará la siguiente pantalla donde se realizarán los cambios en el campo deseado.</p>
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_help">
        <div className="Info__help_img" >
            <img src={Delete} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help font-face-ap">Eliminación de ambiente</h3>
            <p className="Info__paragraph_help">En caso de desearse la eliminación de un ambiente en específico, deberá realizarse el mismo método que la de modificación. Una vez dentro del modo "Modificar", será necesario seleccionar la opción del cesto de basura a un lado del botón "actualizar". Una vez hecho esto, seleccione "Eliminar".</p>
          </div>
        </div>
        <hr id="estiloHR"/>
        <div className="Info__content_help">
        <div className="Info__help_img" >
            <img src={ProfilePic} alt="kit" width="80%" height="80%"/>
          </div>
          <div className="Info__help_info">
            <h3 className="Info__title_help font-face-ap">Cambio de la foto de perfil</h3>
            <p className="Info__paragraph_help">Para realizar el cambio de la foto de perfil, será necesario ir al perfil del usuario y seleccionar el ícono de la cámara al lado de la foto, esto abrirá la galería de fotos de su celular, donde deberá seleccionarse la foto deseada.</p>
          </div>
        </div>
      </div>
      <Footer s={{bottom:0}}></Footer>
    </React.Fragment>
  )
}
}

export default Help