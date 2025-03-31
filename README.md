# riscoNext
1️⃣ Interfaz de usuario: Un formulario donde el usuario ingrese el mínimo de calorías y el peso máximo.
2️⃣ Lógica de optimización: Implementar el algoritmo de mochila dinámica para seleccionar los mejores elementos.
3️⃣ Visualización: Mostrar los elementos seleccionados y su peso/calorías totales.

Esta app es similar a la Mochila 0/1 (Knapsack Problem), donde debemos seleccionar elementos que maximicen las calorías sin exceder el peso máximo permitido.


Plan de Desarrollo
 Frontend: .

Usar React con Next.js para la interfaz.

Utilizar Tailwind CSS para diseño rápido.

 Backend o lógica interna:

Implementar el algoritmo de optimización en una función de React.

Opcional: Usar API en Next.js si los datos se guardan en una base de datos.

 Extras :

Guardar datos en LocalStorage para persistencia.

Permitir agregar nuevos elementos dinámicamente para recalcular los datos con valores actualizados.

Esta documentación describe las estrategias de escalabilidad implementadas en la solución, permitiendo soportar un crecimiento en el tráfico y la carga de datos sin afectar el rendimiento.

La solución utiliza escalabilidad horizontal mediante balanceo de carga (Nginx) y contenedores Docker, permitiendo distribuir el tráfico entre múltiples instancias.

Se planea usar una estrategia de particionamiento de base de datos combinada con caché en Redis para mejorar el rendimiento y reducir la carga en los servidores principales.