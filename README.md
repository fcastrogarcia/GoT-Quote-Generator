Para realizar esta pequeña web app utilicé esta API de quotes de Game of Thrones: https://github.com/wsizoo/game-of-thrones-quotes.

Un breve recap de lo que hice:
Lo primero que me propuse hacer fue conectar la API al componente, de forma que se actualizara el state a partir de esa data.
Luego me encontré con que la API por su cuenta ya me ofrecía un resultado aleatorio cada vez que la llamara, por lo que no hacía falta crear un método para randomizar el objeto que estaba pasando como data.
Más bien había que hacer dos veces el fetch de la data: uno mientras se hacía el mounting del componente -o mejor dicho cuando hubiese terminado (componentDidMount)- y otro cuando se solicitara una nueva cita desde la UI. Para eso realicé una función aparte para hacer el fetch de esa data y luego la invoqué desde componentDidMount una vez, y la otra desde el <button> mediante el método onClick. Con esto ya estaba resuelto la principal funcionalidad del componente.   
Luego utilicé Bootstrap para estilizar algunos elementos, tales como la cita.
Utilicé font awesome para hacer el ícono de twitter. 
