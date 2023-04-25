# Prueba Tecnica Skys Mobile Apps

<p>Realize para esta prueba tecnica el siguiente proyecto, con el fin de cumplir con las especificaciones y requerimientos encomendados por la empresa.</p>
<p>El proyecto consistio en un App web contable con el fin de hacer uso de Firebase y su base de datos, mostrando informacion antes establecida por la empresa en colecciones y documentos. Ademas de toda esta informacion antes mencionado mostrale con uso de React.Js</p>

<p>El objetivo de esta etapa de la entrevista es desarrollar una web utilizando la Firestore de Firebase, que servirá para gestionar un apoyo contable al usuario. La web app debería contar con las siguientes pantallas:</p>

<p><strong>1. Pantalla inicial</strong> con resumen, solo se debe cargar la tabla al darle click en Ingresos
estos vendrán de una colección de Firebase.</p>
    
<p>Donde se muestran las fechas no es necesario hacer ningún filtro solo mostrar el llamado a
un componente de calendario y que este permita hacer la selección de la fecha
La tabla inferior que se ve en la imagen debe tener como titulo : Ingresos y los campos de
la tabla ejemplo serán:
    
    -Nombre
    -Fecha ingreso
    -Valor
</p>
<p>Estos items o listado de ingresos se deben obtener de la base de datos de Firebase.</p>
    <br/>
<p><strong>2. Pantalla de creación de gastos fijos</strong></p>
    
<p>Se mostrará una tabla donde cada item debe ser tipo textbox (pueda ser digitado)
Condiciones del manejo de la tabla y campos:</p>
    
    *ID : Alfanumérico
    
    *Nombre gasto : String
    
    *Valor: Se aceptan decimales pero el sistema debe parsear el valor ingresado a pesos
    con el signo ejemplo: $12.000
    
    *Periodicidad: Lista desplegable con solo una opción de selección opciones: 
        → mensual   - 2 meses - 3 meses - semestral - anual.
    
    *Fecha primer cobro: Abrir componente de fecha no permitir seleccionar fechas
    anteriores a la actual
    
    *Tipo gasto: Lista desplegable con solo una opción de seleccionar , opciones → fijo ,
    variable
    
    *Icono circular rojo que tiene una X: Al darle click se borra la información guardada en
    los campos de esa fila
    
    *Botón “Agregar nuevo item”: Este botón debe permitir que se creen otros campos para
    permitir el diligenciamiento de un nuevo registro. Los campos deben ser iguales a los
    anteriores, como en el siguiente ejemplo.
    
    *Botón “Guardar”: Guarda la información en una colección de Firebase
    
    
<a href="https://prueba-tecnica-skys-gy7umb1sd-aegox.vercel.app/">Link al Deploy</a>

<h4>Requerimientos</h4>
    <p>
    ● Cada pantalla debería tener un loading ya que se trae información de la nube o
    guardas información en la nube de Firebase por ende se necesita un loading.<br/>
    ● El proyecto se debe entregar en un repositorio de código (GitHub público).<br/>
    ● User React Router para navegar entre las páginas.<br/>
    ● La web app debería estar responsible.<b3/></p>
    
<h4>¿Qué vamos a evaluar?</h4>
    
<p>Vamos a ser los usuarios de tu producto y vamos a usar la app que desarrollaste. Además
vamos hacer una revisión del proyecto a nivel código donde vamos a enfocarnos en el
manejo de React Js - UI. Estos son algunos puntos que vamos a mirar:</p>
    <p>● Diseño óptimo.<br/>
        ● Manejo de React Js - React Router.<br/>
        ● Uso de la Firebase Firestore.<br/>
        ● Legibilidad del código.<br/>
        ● Experiencia del usuario.<br/>
    </p>

