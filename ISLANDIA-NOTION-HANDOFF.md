# Islandia 2026 — Handoff para Notion

> Este documento contiene TODO el contenido del viaje de Islandia 2026 de Irene y Víctor, listo para construir un proyecto en Notion.
>
> **Cómo usarlo**: copia TODO este archivo (Cmd+A, Cmd+C) y pégalo en un chat nuevo de Claude. Claude leerá el prompt de la Parte A y te guiará para armar la estructura en Notion paso a paso.

---

## PARTE A — PROMPT PARA CLAUDE CHAT

```
Hola Claude. Soy Victor y con mi pareja Irene vamos a Islandia del 18 de agosto al 3 de septiembre de 2026. Ya hemos investigado todo el viaje y el itinerario está cerrado. Ahora queremos construir un proyecto en Notion que sea nuestro "comando central" para gestionar reservas, notas, checklists, gastos reales y vivencias del viaje.

Debajo de este prompt tienes TODA la información del viaje ya estructurada (Parte B). Tu tarea es ayudarme a construir la estructura inicial en Notion usando esa información.

REQUISITOS CRÍTICOS:

1. **Vista Calendar es la principal**. La visualización que más usaremos es el calendario. Por eso TODAS las bases de datos que tengan fechas deben usar propiedad tipo Date (no Texto). Sin propiedad Date, Notion no permite crear Calendar view.

2. **Database maestra "CALENDARIO DEL VIAJE"** es la pieza más importante. Debe contener cada evento fechado del viaje: días de itinerario, vuelos, recogidas/entregas del motorhome, check-ins de alojamiento, reservas de restaurantes, tours, ferries, transfers. Este es el corazón del Notion. Construirla primero.

3. **Estructura jerárquica** con una página raíz "Islandia 2026" y subpáginas/databases según el árbol que propongo en Parte B.

4. **Relations entre databases**: cuando crees databases separadas (Alojamientos, Gastronomía, Places, Reservas), mantén una propiedad "Relation" que apunte a la database maestra Calendario. Así cuando abro el calendario del 24 ago, veo todo lo que pasa ese día con links a sus fichas completas.

5. **Vistas múltiples** por database: al mínimo Calendar + Table. En los casos donde tenga sentido: Board por categoría, Timeline, Gallery.

CÓMO QUIERO QUE TRABAJES:

- Trabajemos sección por sección. Empecemos por la database "CALENDARIO DEL VIAJE" ya que es la más importante.
- Para cada database/página que propongas, dame: (a) nombre, (b) lista de propiedades con su tipo exacto de Notion (Date, Text, Select, Multi-select, URL, Number, Checkbox, Relation, etc.), (c) vistas sugeridas, (d) los datos iniciales en formato listo para pegar.
- Cuando me des datos en formato tabla, asegúrate de que las fechas estén en formato que Notion entienda al importar (YYYY-MM-DD o "18 de agosto, 2026").
- Si algo del contenido de Parte B está incompleto o poco claro, pregúntame antes de inventar.
- Al final de cada sección, dame un checklist de "lo que debería quedar construido" para que yo lo verifique.

ORDEN SUGERIDO DE IMPLEMENTACIÓN:
1. Página raíz + cover + índice de secciones
2. Database "CALENDARIO DEL VIAJE" con Calendar view (LA CRÍTICA)
3. Database "Itinerario día por día" con Calendar y Timeline
4. Database "Alojamientos" con Calendar (por check-in)
5. Database "Places" (lugares a visitar) con Calendar
6. Database "Gastronomía" con Calendar (opcional por fecha planeada)
7. Database "Reservas" para trackear qué falta por reservar con deadlines
8. Database "Presupuesto" con estimado vs real
9. Subpágina "Motorhome" con reglas, checklists y datos de la reserva
10. Subpágina "Logística" con vuelos, apps, links
11. Databases de checklists pre-viaje
12. Página de diario de viaje (una entrada por día del viaje)

Empecemos. Primero revisa la Parte B completa, luego propón la página raíz y la database CALENDARIO DEL VIAJE con todos sus registros iniciales fechados. Yo los pego en Notion.
```

---

## PARTE B — CONTENIDO ESTRUCTURADO DEL VIAJE

---

## 1. METADATA DEL VIAJE

- **Viajeros**: Irene y Víctor (pareja)
- **Fechas calendario**: 18 agosto 2026 — 3 septiembre 2026
- **Duración**: 17 días calendario, 15 días efectivos en destino
- **Destino**: Islandia
- **Ruta**: Ring Road completa + Westfjords
- **Modalidad**: Híbrida Hotel + Motorhome + Hotel
  - Noche 1 (18 ago): Hotel Reykjavik
  - Noches 2-14 (19 ago - 1 sep): 13 noches en motorhome
  - Noche 15 (2 sep): Hotel Reykjavik
  - Vuelo regreso: 3 sep
- **Vehículo**: McRent Dethleffs grande (baño y ducha propios)
- **Distancia total**: ~1.400 km
- **Presupuesto estimado**: ~7.500€ (2 personas, total)
- **Clima esperado**: 10-15°C, impredecible, viento fuerte
- **Mes en Islandia**: finales de verano / inicio otoño. Últimos días de puffins (hasta mid-agosto). Pico de ballenas. Primeras posibles auroras boreales (muy improbable, días todavía largos).

---

## 2. ESTRUCTURA PROPUESTA EN NOTION

```
📔 Islandia 2026 (página raíz)
│
├── 🏠 Resumen (hero page con cover y datos clave)
│
├── 🗓️ CALENDARIO DEL VIAJE ★ (database unificada, vista Calendar principal)
│   Consolida todos los eventos fechados con relations a otras databases
│
├── 📅 Itinerario día por día (database, 16 filas)
│
├── 🚐 Motorhome (subpágina)
│   ├── Reserva McRent
│   ├── Seguros (SAAP)
│   ├── Checklist recogida/entrega
│   └── Reglas críticas
│
├── 🏨 Alojamientos (database con Date check-in / check-out)
│
├── 🍽️ Gastronomía (database con Date planeada)
│
├── 📍 Places (database con Date planeada)
│
├── ✈️ Logística (subpágina + database de Reservas fechadas)
│
├── 💰 Presupuesto (database estimado vs real)
│
├── 📝 Checklists pre-viaje (databases con Date de deadline)
│
└── 📓 Diario de viaje (database, 1 entrada por día del viaje)
```

**Regla de oro**: toda database cuyos registros tengan sentido en el tiempo debe tener al menos una propiedad Date, para permitir vista Calendar.

---

## 3. DATABASE MAESTRA: CALENDARIO DEL VIAJE ★

Esta es la database más importante. Contiene un registro por cada evento fechado del viaje. Vista principal: Calendar.

### Propiedades

| Propiedad | Tipo Notion | Valores |
|-----------|-------------|---------|
| Evento | Title | Texto libre |
| Date | Date | Fecha única (o rango si dura varios días) |
| Hora | Text | Opcional. Formato HH:MM |
| Categoría | Select | Día · Reserva · Actividad · Comida · Transporte · Checkpoint |
| Status | Select | Planeado · Pendiente reservar · Reservado · Confirmado · Hecho |
| Ubicación | Text | Ciudad o lugar |
| Link | URL | Web oficial o reserva |
| Día | Text | D1-D16 (para ordenar cuando hay múltiples eventos por día) |
| Relacionado con | Relation | → Itinerario / Alojamientos / Gastronomía / Places / Reservas |
| Notas | Text | Libre |

### Vistas sugeridas
- **Calendar** (principal): agosto-septiembre 2026
- **Timeline**: Gantt por día, agrupar por Categoría
- **Board**: agrupado por Status (qué falta por reservar)
- **Table filtrada**: Status = Pendiente reservar (urgencias)

### Registros iniciales (copia y pega en Notion)

| Date | Hora | Evento | Categoría | Status | Ubicación | Link | Día | Notas |
|------|------|--------|-----------|--------|-----------|------|-----|-------|
| 2026-08-18 | 14:30 | Vuelo Madrid→Keflavik | Transporte | Pendiente reservar | Madrid | https://icelandair.com | D1 | Icelandair o PLAY. 4h. Maleta incluida con Icelandair |
| 2026-08-18 | 15:30 | Flybus aeropuerto→Reykjavik | Transporte | Planeado | Keflavik | https://flybus.is | D1 | 45 min. 35€ pp |
| 2026-08-18 | 16:30 | Check-in Sand Hotel | Reserva | Pendiente reservar | Reykjavik | https://sand-hotel.is | D1 | 1 noche. 140-200€ |
| 2026-08-18 | - | D1 Llegada + Reykjavik | Día | Planeado | Reykjavik | - | D1 | Tag HOTEL. Exploración downtown |
| 2026-08-18 | 21:00 | Cena Dill | Comida | Pendiente reservar | Reykjavik | https://dillrestaurant.is | D1 | Único Michelin. 120-150€ pp. RESERVAR CON MESES |
| 2026-08-19 | 09:00 | Recogida McRent Keflavik | Transporte | Pendiente reservar | Keflavik | https://mcrent.eu | D2 | 30 min orientación. SAAP obligatorio |
| 2026-08-19 | 10:30 | Compras Bonus para 13 días | Checkpoint | Planeado | Reykjavik | - | D2 | ~250€ víveres. Bonus abre 11am |
| 2026-08-19 | - | D2 Reykjanes + Secret Lagoon | Día | Planeado | Fluðir | - | D2 | Tag VAN. 150 km, 3h |
| 2026-08-19 | 16:00 | Secret Lagoon | Actividad | Planeado | Fluðir | https://secretlagoon.is | D2 | 30€ pp. Piscina termal 1891 |
| 2026-08-19 | - | Camping Þingvellir o Borgarnes | Reserva | Planeado | Borgarnes | - | D2 | Primera noche van |
| 2026-08-20 | - | D3 Snaefellsnes peninsula | Día | Planeado | Snaefellsnes | - | D3 | Tag VAN. 200 km, 4h |
| 2026-08-20 | - | Camping Grundarfjörður | Reserva | Planeado | Grundarfjörður | https://grundarfjordur.is | D3 | Vista Kirkjufell |
| 2026-08-21 | 09:00 | Ferry Baldur Stykkishólmur→Brjánslækur | Transporte | Pendiente reservar | Stykkishólmur | https://seatours.is | D4 | 2h30. 70€ van+2pax. RESERVAR CON SEMANAS |
| 2026-08-21 | - | D4 Westfjords + Dynjandi | Día | Planeado | Westfjords | - | D4 | Tag VAN |
| 2026-08-21 | - | Camping Breiðavík | Reserva | Planeado | Breiðavík | https://breidavik.is | D4 | Al pie de Látrabjarg |
| 2026-08-22 | 06:00 | Látrabjarg puffins amanecer | Actividad | Planeado | Látrabjarg | - | D5 | ÚLTIMOS DÍAS temporada puffins |
| 2026-08-22 | - | D5 Látrabjarg + Ísafjörður | Día | Planeado | Ísafjörður | - | D5 | Tag VAN. 180 km |
| 2026-08-22 | - | Camping Tungudalur Ísafjörður | Reserva | Planeado | Ísafjörður | https://tungudalur.is | D5 | Full facilities |
| 2026-08-23 | - | D6 Hot Pots Drangsnes + traslado norte | Día | Planeado | Hvammstangi | - | D6 | Tag VAN. 280 km, 5h |
| 2026-08-23 | - | Hot Pots Drangsnes | Actividad | Planeado | Drangsnes | - | D6 | GRATIS. Muy local |
| 2026-08-23 | - | Camping Hvammstangi | Reserva | Planeado | Hvammstangi | - | D6 | - |
| 2026-08-24 | - | D7 Siglufjörður + Hofsós + Akureyri | Día | Planeado | Akureyri | - | D7 | Tag VAN. 200 km |
| 2026-08-24 | - | Herring Era Museum | Actividad | Planeado | Siglufjörður | https://sild.is | D7 | Premio Museo Europeo |
| 2026-08-24 | - | Piscina Hofsós | Actividad | Planeado | Hofsós | - | D7 | 8€. Vista fiordo |
| 2026-08-24 | 20:00 | Cena Rub23 o Bautinn | Comida | Pendiente reservar | Akureyri | - | D7 | Sushi premium o cordero |
| 2026-08-24 | - | Camping Hamrar Akureyri | Reserva | Planeado | Akureyri | - | D7 | Piscina al lado |
| 2026-08-25 | - | D8 Akureyri + Mývatn | Día | Planeado | Mývatn | - | D8 | Tag VAN. 100 km |
| 2026-08-25 | 15:00 | Mývatn Nature Baths | Actividad | Planeado | Mývatn | - | D8 | 40€ pp. 3h |
| 2026-08-25 | - | Camping Reykjahlíð Mývatn | Reserva | Planeado | Mývatn | - | D8 | Duchas privadas gratis |
| 2026-08-26 | - | D9 Dettifoss + Húsavík ballenas | Día | Planeado | Húsavík | - | D9 | Tag VAN. 200 km |
| 2026-08-26 | 10:00 | Tour ballenas Húsavík | Actividad | Pendiente reservar | Húsavík | https://northsailing.is | D9 | 85€ pp. 3h. PICO jorobadas |
| 2026-08-26 | 16:00 | GeoSea baths | Actividad | Planeado | Húsavík | https://geosea.is | D9 | 38€ pp |
| 2026-08-26 | - | Camping Húsavík | Reserva | Planeado | Húsavík | - | D9 | - |
| 2026-08-27 | - | D10 Ásbyrgi + Stuðlagil | Día | Planeado | Egilsstaðir | - | D10 | Tag VAN. 280 km, 5h |
| 2026-08-27 | - | Camping Hallormsstaður | Reserva | Planeado | Egilsstaðir | - | D10 | Bosque más grande del país |
| 2026-08-28 | - | D11 Borgarfjörður Eystri + Seyðisfjörður | Día | Planeado | Seyðisfjörður | - | D11 | Tag VAN. 100 km |
| 2026-08-28 | 11:00 | Puffins Borgarfjörður Eystri | Actividad | Planeado | Borgarfjörður Eystri | - | D11 | Últimos días temporada |
| 2026-08-28 | 17:00 | Vök Baths | Actividad | Planeado | Egilsstaðir | https://vokbaths.is | D11 | 40€ pp. Piscinas flotantes |
| 2026-08-28 | 20:00 | Cena Norð Austur Sushi | Comida | Pendiente reservar | Seyðisfjörður | https://nordurogaustur.is | D11 | Mejor sushi fuera de RVK |
| 2026-08-28 | - | Camping Seyðisfjörður | Reserva | Planeado | Seyðisfjörður | - | D11 | En el pueblo pastel |
| 2026-08-29 | - | D12 Vestrahorn + Höfn langosta | Día | Planeado | Höfn | - | D12 | Tag VAN. 260 km, 5h |
| 2026-08-29 | 14:00 | Stokksnes / Vestrahorn | Actividad | Planeado | Stokksnes | - | D12 | 9€ entrada Viking Village |
| 2026-08-29 | 20:00 | Cena Pakkhús langosta | Comida | Pendiente reservar | Höfn | https://pakkhus.is | D12 | Humar. 60-80€ pp. RESERVAR |
| 2026-08-29 | - | Camping Höfn | Reserva | Planeado | Höfn | - | D12 | - |
| 2026-08-30 | 07:00 | Jökulsárlón amanecer | Actividad | Planeado | Jökulsárlón | - | D13 | Icebergs, focas |
| 2026-08-30 | 09:00 | Zodiac Jökulsárlón | Actividad | Pendiente reservar | Jökulsárlón | https://guidetoiceland.is | D13 | 80-90€ pp. RESERVAR |
| 2026-08-30 | - | D13 Jökulsárlón + Skaftafell | Día | Planeado | Skaftafell | - | D13 | Tag VAN. 150 km |
| 2026-08-30 | - | Camping Þakgil | Reserva | Planeado | Þakgil | https://thakgil.is | D13 | Hidden gem montañas |
| 2026-08-31 | - | D14 Vík + Reynisfjara + Seljalandsfoss | Día | Planeado | Hveragerði | - | D14 | Tag VAN. 200 km |
| 2026-08-31 | 15:00 | Reykjadalur hot river hike | Actividad | Planeado | Hveragerði | - | D14 | 1h subida. GRATIS |
| 2026-08-31 | - | Camping Hveragerði | Reserva | Planeado | Hveragerði | - | D14 | Última noche van |
| 2026-09-01 | 09:00 | Golden Circle | Actividad | Planeado | Þingvellir | - | D15 | Þingvellir + Geysir + Gullfoss |
| 2026-09-01 | 16:00 | Entrega McRent Keflavik | Transporte | Planeado | Keflavik | - | D15 | Limpiar van, vaciar aguas |
| 2026-09-01 | 18:00 | Check-in Hotel Borg o Sand Hotel | Reserva | Pendiente reservar | Reykjavik | https://keahotels.is/hotel-borg | D15 | Última noche. 200-300€ |
| 2026-09-01 | - | D15 Golden Circle + entrega + hotel | Día | Planeado | Reykjavik | - | D15 | Tag VAN→HOTEL |
| 2026-09-01 | 21:00 | Cena despedida | Comida | Pendiente reservar | Reykjavik | - | D15 | Dill si no se hizo D1, o Fiskmarkadurinn, o Fjörubordid |
| 2026-09-02 | 09:00 | Desayuno Sandholt | Comida | Planeado | Reykjavik | https://sandholt.is | D16 | Panadería desde 1920 |
| 2026-09-02 | 11:00 | Marshall House | Actividad | Planeado | Reykjavik | https://marshallhouse.is | D16 | Ólafur Elíasson + galerías + café |
| 2026-09-02 | 14:00 | Compras para casa (Omnom, Skyr, lana) | Checkpoint | Planeado | Reykjavik | https://omnom.is | D16 | Chocolate, queso, ropa |
| 2026-09-02 | - | D16 Reykjavik libre | Día | Planeado | Reykjavik | - | D16 | Tag HOTEL |
| 2026-09-03 | - | Vuelo Keflavik→Madrid | Transporte | Pendiente reservar | Keflavik | https://icelandair.com | - | Flybus 3h antes |

**Nota**: cuando hay varios eventos en el mismo día, Notion Calendar view los agrupa. Agregar más eventos a medida que se reserven (vuelos exactos, hora de cena Dill, etc.).

---

## 4. DATABASE: ITINERARIO DÍA POR DÍA

### Propiedades

| Propiedad | Tipo Notion |
|-----------|-------------|
| Día | Title (D1, D2, ...) |
| Date | Date |
| Título | Text |
| Tag | Select (HOTEL, VAN, VAN→HOTEL) |
| Km aprox | Number |
| Tiempo conducción | Text |
| Ciudad destino | Text |
| Camping / Hotel | Relation → Alojamientos |
| Destacados | Multi-select |
| Descripción completa | Text (rich) |

### Datos

#### D1 — 2026-08-18 — Llegada + Reykjavik · HOTEL
- **Km**: 0 (sin conducción, 45 min Flybus)
- **Ciudad**: Reykjavik
- **Alojamiento**: Sand Hotel (https://sand-hotel.is) — 140-200€ o alternativa Kex Hostel (https://kexrvk.is) 100-160€
- **Bloques**:
  - **Imperdible**: Aterrizaje Keflavik. Flybus a Reykjavik, 45 min, 35€ pp. Alternativa: taxi ~80€.
  - **Monocle café**: Reykjavik Roasters (https://reykjavikroasters.is). Pionero de especialidad desde 2008. Ubicaciones Kárastígur y Brautarholt.
  - **Monocle tienda**: Kraum (https://kraum.is). Casa de 1762, la más antigua de Reykjavik. 200+ artesanos islandeses.
  - **Monocle moda**: Kiosk (Laugavegur). Cooperativa de 5 diseñadores de moda islandeses.
  - **Monocle música**: 12 Tónar (https://12tonar.is). Tienda de discos legendaria + sello musical.
  - **Cena**: Dill (https://dillrestaurant.is) si se reservó con meses 120-150€ pp. Alternativa Matur og Drykkur (https://maturogdrykkur.is) 50-70€ pp.
- **Tip**: Ducha larga. Cama grande. Jet lag no fuerza. Desayuno Sandholt al día siguiente antes de recoger van.

#### D2 — 2026-08-19 — Recogida van + Reykjanes + Secret Lagoon · VAN
- **Km**: 150 km · 3h conducción
- **Ciudad**: Fluðir
- **Camping**: Þingvellir National Park o Borgarnes
- **Bloques**:
  - **Imperdible**: 9am Flybus a Keflavik. Recogida McRent. Orientación al vehículo 30 min.
  - **Provisiones**: Bonus (cerdito rosa) para 13 días. ~250€. Abre 11am. Alternativa Krónan (abre 8am, mejor selección).
  - **Monocle**: Seltún / Gunnuhver (Reykjanes). Pozas de barro multicolor. Menos turístico que Blue Lagoon. Gratis.
  - **Relax**: Secret Lagoon / Gamla Laugin (https://secretlagoon.is). Fluðir. Piscina termal 1891. 30-40°C. 30€ pp.
- **Tip**: Primera noche en van = probar todos los sistemas (calefacción, agua, etc).

#### D3 — 2026-08-20 — Snaefellsnes peninsula · VAN
- **Km**: 200 km · 4h conducción + paradas
- **Ciudad**: Grundarfjörður
- **Camping**: Grundarfjörður (https://grundarfjordur.is) o Hellissandur
- **Bloques**:
  - **Imperdible**: Kirkjufell (montaña icónica cono). Caminar a Kirkjufellsfoss.
  - **Imperdible**: Búðir. Iglesia negra de madera, la más fotografiada de Islandia. Contraste con glaciar Snaefellsjökull.
  - **Fauna**: Ytri Tunga Beach. Colonia de focas (harbor + grey seal), pico agosto con marea baja.
  - **Natural**: Arnarstapi + Hellnar. Acantilados con formaciones basálticas. Caminata 2.5 km.
  - **Natural**: Djúpalónssandur. Playa de guijarros negros con restos del naufragio Epine (1948).
  - **Monocle**: Narfeyrarstofa (Stykkishólmur). Mariscos en casa histórica junto al puerto.
- **Tip**: Vista Kirkjufell al atardecer desde el camping.

#### D4 — 2026-08-21 — Ferry Westfjords + Dynjandi · VAN
- **Km**: Ferry 2h30 + 100 km
- **Ciudad**: Breiðavík
- **Camping**: Breiðavík (https://breidavik.is) o Patreksfjörður
- **Bloques**:
  - **Transporte**: Ferry Baldur (https://seatours.is) Stykkishólmur→Brjánslækur. 2h30. Van+2pax ~70€. Alternativa conducir: +4h.
  - **Imperdible**: Dynjandi. Cascada en 7 niveles, 100m total. La más bella de Westfjords. Parking gratis, caminata 15 min.
  - **Natural**: Playa Rauðasandur. Arena roja-dorada (única en Islandia). Focas. Acceso por gravel road.
- **Tip**: Llegar antes del atardecer al camping.

#### D5 — 2026-08-22 — Látrabjarg puffins + Ísafjörður · VAN
- **Km**: 180 km · 4h conducción costera
- **Ciudad**: Ísafjörður
- **Camping**: Tungudalur Ísafjörður (https://tungudalur.is)
- **Bloques**:
  - **Imperdible**: Látrabjarg AMANECER. 14 km de acantilados, 440m. Millones de aves. PUFFINS hasta mid-agosto (últimos días). A 1 metro de distancia.
  - **Ruta**: Costera de regreso, fiordo tras fiordo. Cascadas sin nombre cada 2 km.
  - **Monocle**: Heimabyggð (Aðalstræti 22b, Ísafjörður). Café + librería + pan sourdough. +354 774 2596.
  - **Monocle**: Tjöruhúsið. Pescado del día en casa de madera. Reservar.
  - **Monocle**: Edinborg Cultural House. Arte + eventos.
- **Tip**: Valle bosque, rarísimo en Islandia.

#### D6 — 2026-08-23 — Hot Pots Drangsnes + traslado norte · VAN
- **Km**: 280 km · 5h
- **Ciudad**: Hvammstangi
- **Camping**: Hvammstangi o Blönduós
- **Bloques**:
  - **Natural**: Mañana Ísafjörður. Gamla Bakaríið (panadería tradicional).
  - **Imperdible**: Hot Pots Drangsnes. 3 piscinas termales GRATIS a orilla del fiordo. Cambiarse en la gasolinera enfrente. 100% local.
  - **Imperdible**: Hvítserkur. Roca-elefante de basalto en el mar. Focas en la playa Ósar.
- **Tip**: Pueblos pequeños, noche calma.

#### D7 — 2026-08-24 — Siglufjörður + Hofsós + Akureyri · VAN
- **Km**: 200 km · 4h con desvíos
- **Ciudad**: Akureyri
- **Camping**: Hamrar Akureyri (piscina geotermal al lado)
- **Bloques**:
  - **Natural**: Kolugljúfur Canyon. 7 cascadas. VER desde el puente, peligroso.
  - **Imperdible**: Tröllaskagi peninsula. Paisaje montañoso espectacular.
  - **Monocle**: Siglufjörður. Pueblo pastel en fiordo más bonito del norte.
  - **Monocle**: Herring Era Museum (https://sild.is). Premio Museo Europeo. Edificio noruego 1907.
  - **Relax**: Piscina infinity Hofsós. Vista fiordo e isla Drangey. 8€. 30-31°C.
  - **Monocle cena**: Rub23 (sushi) o Bautinn (cordero clásico) en Akureyri.

#### D8 — 2026-08-25 — Akureyri mañana + Mývatn · VAN
- **Km**: 100 km · 2h + explorar
- **Ciudad**: Mývatn
- **Camping**: Reykjahlíð Mývatn (lake view, duchas privadas gratis)
- **Bloques**:
  - **Monocle**: Kaffi Ilmur (mejor café norte). Brynja (helados desde 1939, https://brynjuis.is). Bláa Kannan (café azul icónico).
  - **Imperdible**: Jardines Botánicos Akureyri. Los más al norte del mundo. Gratis.
  - **Imperdible**: Goðafoss ("cascada de los dioses") en ruta.
  - **Natural**: Dimmuborgir. Formaciones lávicas negras. Caminata 1h.
  - **Natural**: Grjótagjá. Cueva con poza termal turquesa (solo mirar). Game of Thrones.
  - **Relax**: Mývatn Nature Baths. 40€ pp. 3h.
  - **Monocle**: Vogafjós (https://vogafjos.is). Pan hveraubrauð horneado bajo tierra geotermal 24h. Café granja.

#### D9 — 2026-08-26 — Dettifoss + Húsavík ballenas · VAN
- **Km**: 200 km · con barco 6h total
- **Ciudad**: Húsavík
- **Camping**: Húsavík
- **Bloques**:
  - **Imperdible**: Dettifoss. La cascada más potente de Europa. 100m ancho, 45m alto.
  - **Natural**: Selfoss (vecina). Hverir (Námaskarð). Pozas de barro burbujeante.
  - **Imperdible**: Húsavík ballenas (https://northsailing.is). 85€ pp, 3h, barco de vela. AGOSTO PICO jorobadas + minkes. ~100% avistamiento.
  - **Relax**: GeoSea (https://geosea.is). Baños geotermales mirando al mar desde acantilado. 38€ pp.
  - **Monocle**: Salka Restaurant (https://salkarestaurant.is). Cocina local en ex-tienda.

#### D10 — 2026-08-27 — Ásbyrgi + Stuðlagil · VAN
- **Km**: 280 km · 5h
- **Ciudad**: Egilsstaðir
- **Camping**: Hallormsstaður (bosque más grande del país)
- **Bloques**:
  - **Natural**: Ásbyrgi. Cañón en forma de herradura. 1 km largo, 100m alto.
  - **Imperdible**: Stuðlagil canyon. Columnas basálticas hexagonales (descubierto 2018). Caminata 2.5 km. Agua grisácea ago-sep pero imponente.
  - **Ruta**: Egilsstaðir capital del este. Reponer víveres.

#### D11 — 2026-08-28 — Borgarfjörður Eystri + Seyðisfjörður · VAN
- **Km**: 100 km · 3h rutas montañosas
- **Ciudad**: Seyðisfjörður
- **Camping**: Seyðisfjörður en el pueblo o Egilsstaðir
- **Bloques**:
  - **Imperdible**: Borgarfjörður Eystri. 10.000 parejas de puffins. Plataformas a 1m. Pueblo de elfos.
  - **Ruta**: Seyðisfjörður por Route 93. 27 km bajando con cascadas.
  - **Monocle**: Pueblo noruego casas pastel. Rainbow Street.
  - **Monocle**: Kaffi Rauðka. Café en ex-fábrica de arenque.
  - **Monocle**: Skaftfell Center for Visual Art (https://skaftfell.is). Galería + café + residencia.
  - **Cena**: Norð Austur Sushi and Bar (https://nordurogaustur.is). Mejor sushi fuera de RVK.
  - **Relax**: Vök Baths (https://vokbaths.is). Piscinas flotantes en lago. 40€ pp.

#### D12 — 2026-08-29 — Vestrahorn + Höfn langosta · VAN
- **Km**: 260 km · 5h costa este-sur
- **Ciudad**: Höfn
- **Camping**: Höfn o Skaftafell
- **Bloques**:
  - **Imperdible**: Stokksnes / Vestrahorn. Montaña basalto negro con playa. 9€ entrada Viking Village.
  - **Natural**: Ring Road costera, fiordos uno tras otro.
  - **Monocle**: Höfn capital langosta islandesa.
  - **Cena especial**: Pakkhús (https://pakkhus.is). Humar plancha. Casa histórica. 60-80€ pp. RESERVAR.
  - **Alternativa**: Humarhöfnin (https://humarhofnin.is). Lobster roll style.

#### D13 — 2026-08-30 — Jökulsárlón + Skaftafell · VAN
- **Km**: 150 km con paradas largas
- **Ciudad**: Skaftafell
- **Camping**: Þakgil (https://thakgil.is) hidden gem entre montañas, o Vík
- **Bloques**:
  - **Imperdible**: Jökulsárlón AMANECER. Icebergs, focas. Zodiac opcional 80-90€ pp (https://guidetoiceland.is).
  - **Imperdible**: Diamond Beach. Icebergs en arena negra.
  - **Natural**: Fjaðrárgljúfur. Cañón de Justin Bieber. 100m.
  - **Imperdible**: Skaftafell National Park. Caminata Svartifoss 1h30.
  - **Opcional**: Glacier hike (https://icelandicmountainguides.com). 100€ pp, 3h.

#### D14 — 2026-08-31 — Vík + Reynisfjara + Seljalandsfoss · VAN
- **Km**: 200 km
- **Ciudad**: Hveragerði
- **Camping**: Hveragerði o Selfoss (última noche van)
- **Bloques**:
  - **Imperdible**: Reynisfjara. Playa negra, columnas. CUIDADO sneaker waves.
  - **Imperdible**: Dyrhólaey. Mirador con puffins hasta mid-ago.
  - **Imperdible**: Skógafoss 60m.
  - **Imperdible**: Seljalandsfoss. Se camina DETRÁS (impermeable).
  - **Natural**: Gljúfrabúi. Cascada escondida al lado de Seljalandsfoss. Se entra por grieta. Catedral de agua.
  - **Monocle**: LAVA Centre (https://lavacentre.is). Museo interactivo volcanes.
  - **Relax**: Reykjadalur hot river hike. 1h subida. Bañarse en río caliente. GRATIS.

#### D15 — 2026-09-01 — Golden Circle + entrega van · VAN→HOTEL
- **Km**: 300 km incluye entrega
- **Ciudad**: Reykjavik
- **Alojamiento**: Sand Hotel o Hotel Borg (https://keahotels.is/hotel-borg) Art Deco 1930
- **Bloques**:
  - **Imperdible**: Þingvellir (UNESCO). Grieta placas tectónicas americana-europea.
  - **Imperdible**: Geysir + Strokkur. Explota cada 5-7 min, 20-30m.
  - **Imperdible**: Gullfoss "cascada dorada". 32m en dos niveles.
  - **Práctico**: Vaciar aguas grises dump station. Limpiar van. Llenar combustible.
  - **Entrega**: 4pm McRent Keflavik. Bus/taxi a Reykjavik.
  - **Cena despedida**: Dill (si no se hizo D1), Fiskmarkadurinn (fusión islandesa-japonesa), o Fjörubordid en Stokkseyri (humarsúpa top del país).
  - **Monocle shopping**: Geysir (ropa lana), Aurum by Guðbjörg (joyería), 66°North (ropa técnica).

#### D16 — 2026-09-02/03 — Reykjavik libre + vuelo · HOTEL
- **Km**: 0
- **Ciudad**: Reykjavik
- **Bloques**:
  - **Mañana**: Desayuno Sandholt (https://sandholt.is). Panadería desde 1920.
  - **Monocle**: Marshall House (https://marshallhouse.is). Ólafur Elíasson + 3 galerías + café.
  - **Monocle**: Hafnarhús (arte contemporáneo). Shopping Laugavegur.
  - **Para casa**: Skyr Ísey, chocolates Omnom (https://omnom.is), rye bread, lana.
  - **Final**: Hallgrímskirkja elevador ~8€. Vista panorámica.
  - **Vuelo**: 2 sep evening o 3 sep. Flybus al aeropuerto (https://flybus.is).

---

## 5. DATABASE: ALOJAMIENTOS

### Propiedades

| Propiedad | Tipo Notion |
|-----------|-------------|
| Nombre | Title |
| Date check-in | Date |
| Date check-out | Date |
| Noches | Number (formula: checkout - checkin) |
| Tipo | Select (Hotel, Camping, Motorhome) |
| Ciudad | Text |
| Precio/noche | Number (€) |
| Total | Number (formula: noches × precio) |
| Link | URL |
| Estado | Select (Pendiente, Reservado, Confirmado) |
| Confirmación # | Text |
| Notas | Text |

### Hoteles Reykjavik (D1 y D15)

| Date check-in | Date check-out | Nombre | Tipo | Ciudad | Precio/noche | Link | Estado | Notas |
|---------------|----------------|--------|------|--------|--------------|------|--------|-------|
| 2026-08-18 | 2026-08-19 | Sand Hotel (recomendado) | Hotel | Reykjavik | 140-200€ | https://sand-hotel.is | Pendiente | Minimalista escandinavo |
| 2026-09-01 | 2026-09-03 | Sand Hotel o Hotel Borg | Hotel | Reykjavik | 200-300€ | https://keahotels.is/hotel-borg | Pendiente | Art Deco 1930 icono |

### Alternativas hoteles Reykjavik

| Nombre | Precio/noche | Link | Notas |
|--------|--------------|------|-------|
| Kex Hostel | 100-160€ | https://kexrvk.is | Ex-fábrica galletas, ambiente social |
| 101 Hotel | 300+€ | https://101hotel.is | Boutique diseño |
| Reykjavik EDITION | 400+€ | - | Lujo, waterfront |

### Motorhome (D2-D14)

| Date pickup | Date return | Nombre | Tipo | Precio/día | Link | Estado | Notas |
|-------------|-------------|--------|------|------------|------|--------|-------|
| 2026-08-19 | 2026-09-01 | McRent Dethleffs grande | Motorhome | 220-340€ | https://mcrent.eu | Pendiente | SAAP obligatorio ~350€. GPS recomendado. Pickup Keflavik |

### Alternativas motorhome

| Nombre | Precio/día | Link | Notas |
|--------|------------|------|-------|
| Happy Campers Premium | 140-240€ | https://happycampers.is | Incluye gas 12 días |
| Kuku Campers | 120-200€ | https://kukucampers.is | Marca islandesa local |
| CampEasy | 130-220€ | https://campeasy.com | Familia, 10+ años |

### Campings en la ruta

| Date | Día | Nombre | Ciudad | Link | Notas |
|------|-----|--------|--------|------|-------|
| 2026-08-19 | D2 | Þingvellir o Borgarnes | Borgarnes | - | Primera noche van |
| 2026-08-20 | D3 | Grundarfjörður | Grundarfjörður | https://grundarfjordur.is | Vista Kirkjufell |
| 2026-08-21 | D4 | Breiðavík | Breiðavík | https://breidavik.is | Pie de Látrabjarg |
| 2026-08-22 | D5 | Tungudalur | Ísafjörður | https://tungudalur.is | Valle bosque |
| 2026-08-23 | D6 | Hvammstangi | Hvammstangi | - | Focas museum |
| 2026-08-24 | D7 | Hamrar Akureyri | Akureyri | - | Piscina geotermal al lado |
| 2026-08-25 | D8 | Reykjahlíð Mývatn | Mývatn | - | Duchas privadas gratis |
| 2026-08-26 | D9 | Húsavík | Húsavík | - | - |
| 2026-08-27 | D10 | Hallormsstaður | Egilsstaðir | - | Bosque más grande |
| 2026-08-28 | D11 | Seyðisfjörður | Seyðisfjörður | - | Pueblo pastel |
| 2026-08-29 | D12 | Höfn o Skaftafell | Höfn | - | - |
| 2026-08-30 | D13 | Þakgil | Þakgil | https://thakgil.is | Hidden gem montañas |
| 2026-08-31 | D14 | Hveragerði o Selfoss | Hveragerði | - | Última noche van |

Otros campings destacados: Reykjavik Campsite (https://reykjavikcampsite.is) como fallback inicial.

---

## 6. DATABASE: PLACES (lugares a visitar)

### Propiedades

| Propiedad | Tipo Notion |
|-----------|-------------|
| Nombre | Title |
| Date planeada | Date |
| Día | Text (D#) |
| Categoría | Select (Imperdible, Monocle, Natural, Relax, Cultura, Fauna) |
| Ubicación | Text |
| Precio entrada | Text |
| Horario | Text |
| Link | URL |
| Hecho? | Checkbox |
| Notas | Text |

### Registros iniciales

| Date | Día | Nombre | Categoría | Ubicación | Precio | Link | Notas |
|------|-----|--------|-----------|-----------|--------|------|-------|
| 2026-08-18 | D1 | Hallgrímskirkja | Imperdible | Reykjavik | 8€ | - | Elevador a la torre, vista panorámica |
| 2026-08-18 | D1 | Reykjavik Roasters | Monocle | Reykjavik | - | https://reykjavikroasters.is | Pionero café especialidad desde 2008 |
| 2026-08-18 | D1 | Kraum | Monocle | Reykjavik | - | https://kraum.is | Casa 1762, 200+ artesanos islandeses |
| 2026-08-18 | D1 | Kiosk | Monocle | Reykjavik | - | - | Cooperativa 5 diseñadores moda |
| 2026-08-18 | D1 | 12 Tónar | Monocle | Reykjavik | - | https://12tonar.is | Tienda discos legendaria |
| 2026-08-19 | D2 | Seltún / Gunnuhver | Natural | Reykjanes | Gratis | - | Pozas barro multicolor |
| 2026-08-19 | D2 | Secret Lagoon (Gamla Laugin) | Relax | Fluðir | 30€ pp | https://secretlagoon.is | Piscina termal 1891 |
| 2026-08-20 | D3 | Kirkjufell + Kirkjufellsfoss | Imperdible | Snaefellsnes | Gratis | - | Montaña icónica cono |
| 2026-08-20 | D3 | Búðir iglesia negra | Imperdible | Snaefellsnes | Gratis | - | La más fotografiada de Islandia |
| 2026-08-20 | D3 | Ytri Tunga Beach | Fauna | Snaefellsnes | Gratis | - | Colonia focas, marea baja |
| 2026-08-20 | D3 | Arnarstapi + Hellnar | Natural | Snaefellsnes | Gratis | - | Acantilados basálticos, 2.5 km |
| 2026-08-20 | D3 | Djúpalónssandur | Natural | Snaefellsnes | Gratis | - | Playa guijarros negros + naufragio 1948 |
| 2026-08-21 | D4 | Dynjandi | Imperdible | Westfjords | Gratis | - | Cascada 7 niveles, 100m |
| 2026-08-21 | D4 | Playa Rauðasandur | Natural | Westfjords | Gratis | - | Arena roja-dorada única |
| 2026-08-22 | D5 | Látrabjarg | Imperdible | Westfjords | Gratis | - | Puffins hasta mid-ago. 14 km acantilados |
| 2026-08-22 | D5 | Heimabyggð | Monocle | Ísafjörður | - | - | Café + librería + sourdough |
| 2026-08-22 | D5 | Edinborg Cultural House | Monocle | Ísafjörður | - | - | Arte + eventos |
| 2026-08-23 | D6 | Hot Pots Drangsnes | Relax | Drangsnes | Gratis | - | 3 piscinas termales fiordo |
| 2026-08-23 | D6 | Hvítserkur | Natural | Vatnsnes | Gratis | - | Roca-elefante basalto + focas |
| 2026-08-24 | D7 | Kolugljúfur Canyon | Natural | Norte | Gratis | - | 7 cascadas, ver desde puente |
| 2026-08-24 | D7 | Herring Era Museum | Monocle | Siglufjörður | 15€ | https://sild.is | Premio Museo Europeo. Edificio 1907 |
| 2026-08-24 | D7 | Piscina infinity Hofsós | Relax | Hofsós | 8€ | - | Vista fiordo + isla Drangey |
| 2026-08-25 | D8 | Jardines Botánicos Akureyri | Cultura | Akureyri | Gratis | - | Los más al norte del mundo |
| 2026-08-25 | D8 | Goðafoss | Imperdible | Entre Akureyri y Mývatn | Gratis | - | "Cascada de los dioses" |
| 2026-08-25 | D8 | Dimmuborgir | Natural | Mývatn | Gratis | - | Formaciones lávicas, caminata 1h |
| 2026-08-25 | D8 | Grjótagjá | Natural | Mývatn | Gratis | - | Cueva poza turquesa, solo mirar. GoT |
| 2026-08-25 | D8 | Mývatn Nature Baths | Relax | Mývatn | 40€ pp | - | Alternativa Blue Lagoon |
| 2026-08-26 | D9 | Dettifoss | Imperdible | Noreste | Gratis | - | Cascada más potente de Europa |
| 2026-08-26 | D9 | Hverir (Námaskarð) | Natural | Mývatn | Gratis | - | Pozas barro burbujeante |
| 2026-08-26 | D9 | Húsavík ballenas | Imperdible | Húsavík | 85€ pp | https://northsailing.is | Pico jorobadas, barco vela tradicional |
| 2026-08-26 | D9 | GeoSea | Relax | Húsavík | 38€ pp | https://geosea.is | Baños geotermales mar |
| 2026-08-27 | D10 | Ásbyrgi | Natural | Noreste | Gratis | - | Cañón herradura, 1 km, 100m |
| 2026-08-27 | D10 | Stuðlagil canyon | Imperdible | Este | Gratis | - | Columnas basálticas hexagonales |
| 2026-08-28 | D11 | Borgarfjörður Eystri puffins | Imperdible | Este | Gratis | - | 10.000 parejas, plataforma 1m |
| 2026-08-28 | D11 | Rainbow Street | Monocle | Seyðisfjörður | Gratis | - | Calle arcoíris hacia iglesia azul |
| 2026-08-28 | D11 | Skaftfell Center for Visual Art | Monocle | Seyðisfjörður | - | https://skaftfell.is | Galería + café + residencia artistas |
| 2026-08-28 | D11 | Vök Baths | Relax | Egilsstaðir | 40€ pp | https://vokbaths.is | Piscinas flotantes lago |
| 2026-08-29 | D12 | Stokksnes / Vestrahorn | Imperdible | Höfn | 9€ | - | Montaña basalto + playa |
| 2026-08-30 | D13 | Jökulsárlón | Imperdible | Sur | Gratis | - | Laguna glaciar, icebergs |
| 2026-08-30 | D13 | Zodiac Jökulsárlón | Actividad | Jökulsárlón | 80-90€ pp | https://guidetoiceland.is | Reserva previa |
| 2026-08-30 | D13 | Diamond Beach | Imperdible | Sur | Gratis | - | Icebergs en arena negra |
| 2026-08-30 | D13 | Fjaðrárgljúfur | Natural | Sur | Gratis | - | Cañón Justin Bieber, 100m |
| 2026-08-30 | D13 | Skaftafell (Svartifoss) | Imperdible | Sur | Gratis | - | Caminata 1h30 cascada basalto |
| 2026-08-30 | D13 | Glacier hike | Actividad | Skaftafell | 100€ pp | https://icelandicmountainguides.com | 3h, crampones incluidos |
| 2026-08-31 | D14 | Reynisfjara | Imperdible | Sur | Gratis | - | Playa negra. CUIDADO sneaker waves |
| 2026-08-31 | D14 | Dyrhólaey | Imperdible | Sur | Gratis | - | Mirador + puffins mid-ago + roca-arco |
| 2026-08-31 | D14 | Skógafoss | Imperdible | Sur | Gratis | - | 60m, escaleras arriba |
| 2026-08-31 | D14 | Seljalandsfoss | Imperdible | Sur | Gratis | - | Caminar detrás |
| 2026-08-31 | D14 | Gljúfrabúi | Natural | Sur | Gratis | - | Cascada escondida, catedral de agua |
| 2026-08-31 | D14 | LAVA Centre | Cultura | Hvolsvöllur | 15€ | https://lavacentre.is | Museo interactivo volcanes |
| 2026-08-31 | D14 | Reykjadalur hot river hike | Relax | Hveragerði | Gratis | - | 1h subida, bañarse en río caliente |
| 2026-09-01 | D15 | Þingvellir | Imperdible | Golden Circle | Gratis | - | UNESCO. Grieta tectónica |
| 2026-09-01 | D15 | Geysir + Strokkur | Imperdible | Golden Circle | Gratis | - | Explota cada 5-7 min |
| 2026-09-01 | D15 | Gullfoss | Imperdible | Golden Circle | Gratis | - | Cascada dorada 32m |
| 2026-09-02 | D16 | Marshall House | Monocle | Reykjavik | Gratis | https://marshallhouse.is | Ólafur Elíasson + galerías + café |
| 2026-09-02 | D16 | Hafnarhús | Cultura | Reykjavik | 15€ | - | Arte contemporáneo |
| 2026-09-02 | D16 | Perlan | Cultura | Reykjavik | 45€ | https://perlan.is | Museo + mirador + cueva hielo |
| 2026-09-02 | D16 | Harpa | Monocle | Reykjavik | Gratis | - | Concert hall fachada hexágonos |

---

## 7. DATABASE: GASTRONOMÍA

### Propiedades

| Propiedad | Tipo Notion |
|-----------|-------------|
| Nombre | Title |
| Date planeada | Date (opcional) |
| Día | Text (D#) |
| Momento | Select (Desayuno, Almuerzo, Cena, Café, Compras) |
| Tipo | Select (Restaurante, Café, Bar, Bakery, Tienda, Tostador) |
| Ciudad | Text |
| Precio aprox | Text |
| Link | URL |
| Reserva necesaria | Checkbox |
| Estado reserva | Select (No aplica, Pendiente, Reservado, Confirmado) |
| Notas | Text |

### Reykjavik — Cafés

| Nombre | Tipo | Precio | Link | Notas |
|--------|------|--------|------|-------|
| Reykjavik Roasters | Café/Tostador | 4-6€ | https://reykjavikroasters.is | Pionero especialidad desde 2008 |
| Kaffibrennslan | Café | 4-7€ | - | Laugavegur 20, casa 1884 |
| Mokka-Kaffi | Café | 4-6€ | - | El más antiguo desde 1958 |
| Stofan Café | Café | 4-6€ | - | Sofás, libros, velas |
| Sandholt | Bakery | 5-10€ | https://sandholt.is | Panadería 1920 |
| Brauð & Co | Bakery | 4-8€ | - | Croissants, cinnamon rolls |
| Kaffibarinn | Bar | 8-12€ | - | Bar de Damon Albarn |

### Reykjavik — Restaurantes

| Date | Nombre | Momento | Precio | Link | Reserva | Notas |
|------|--------|---------|--------|------|---------|-------|
| 2026-08-18 | Dill | Cena | 120-150€ pp | https://dillrestaurant.is | Sí, con meses | Único Michelin del país |
| 2026-09-01 | Matur og Drykkur | Cena | 50-70€ pp | https://maturogdrykkur.is | Sí | Tradicional moderna |
| - | Fiskmarkadurinn | Cena | 60-80€ pp | https://fiskmarkadurinn.is | Sí | Fusión islandesa-japonesa |
| - | Grillmarkadurinn | Cena | 70-100€ pp | https://grillmarkadurinn.is | Sí | Parrilla premium |
| - | Messinn | Almuerzo/Cena | 25-40€ pp | https://messinn.com | No | Pescado casual |
| - | Fjörubordid (Stokkseyri) | Cena | 50-70€ pp | - | Sí | Humarsúpa top, desvío vale la pena |
| - | Bæjarins Beztu | Almuerzo | 5€ | - | No | Hot dog famoso desde 1937 |

### Reykjavik — Diseño / Tiendas

| Nombre | Tipo | Link | Notas |
|--------|------|------|-------|
| Kraum | Tienda | https://kraum.is | Flagship diseño islandés, casa 1762 |
| Kiosk | Tienda | - | Cooperativa 5 diseñadores moda |
| Geysir | Tienda | https://geysir.com | Ropa y lana islandesa contemporánea |
| 66°North | Tienda | https://66north.com | Ropa técnica desde 1926 |
| 12 Tónar | Tienda | https://12tonar.is | Vinilos + sello musical |
| Aurum by Guðbjörg | Tienda | - | Joyería contemporánea |
| Lucky Records | Tienda | - | Vinilos raros |
| Mál og Menning | Librería-café | - | Laugavegur |

### En ruta — Westfjords y Norte

| Date | Nombre | Momento | Ciudad | Link | Notas |
|------|--------|---------|--------|------|-------|
| 2026-08-22 | Heimabyggð | Café/Librería | Ísafjörður | - | Café + sourdough diario |
| 2026-08-22 | Tjöruhúsið | Cena | Ísafjörður | - | Pescado del día. Reservar |
| 2026-08-23 | Gamla Bakaríið | Desayuno | Ísafjörður | - | Panadería tradicional |
| 2026-08-24 | Kaffi Ilmur | Café | Akureyri | - | Mejor café del norte |
| 2026-08-25 | Brynja | Helado | Akureyri | https://brynjuis.is | Helados desde 1939 |
| 2026-08-25 | Bláa Kannan | Café | Akureyri | - | Café azul icónico |
| 2026-08-24 | Rub23 | Cena | Akureyri | - | Sushi islandés premium |
| - | Bautinn | Cena | Akureyri | - | Cordero tradicional |
| 2026-08-25 | Vogafjós | Café/Granja | Mývatn | https://vogafjos.is | Pan hveraubrauð geotermal 24h |
| 2026-08-26 | Salka Restaurant | Almuerzo | Húsavík | https://salkarestaurant.is | Cocina local en ex-tienda |

### En ruta — Este y Sur

| Date | Nombre | Momento | Ciudad | Link | Notas |
|------|--------|---------|--------|------|-------|
| 2026-08-28 | Kaffi Rauðka | Café | Seyðisfjörður | - | Ex-fábrica arenque |
| 2026-08-28 | Norð Austur Sushi | Cena | Seyðisfjörður | https://nordurogaustur.is | Mejor sushi fuera de RVK. Reservar |
| 2026-08-28 | Skaftfell Art Center Café | Café | Seyðisfjörður | https://skaftfell.is | Café + galería |
| 2026-08-29 | Pakkhús | Cena | Höfn | https://pakkhus.is | Langosta plancha. Reservar. 60-80€ pp |
| - | Humarhöfnin | Almuerzo | Höfn | https://humarhofnin.is | Lobster roll style. Casual 25-35€ |
| - | Narfeyrarstofa | Almuerzo | Stykkishólmur | - | Mariscos en casa histórica |

---

## 8. PRODUCTOS LOCALES A PROBAR

- **Skyr Ísey** (supermercado). Fermentado 1100 años, 12% proteína, más denso que yogur griego. Sabores: blueberry, rabarbara.
- **Queso Höfðingi** (blanco suave) + mermelada arándanos silvestres = desayuno islandés clásico.
- **Rúgbrauð geotermal**. Pan de centeno denso horneado bajo tierra 24h con calor geotermal. Vogafjós (Mývatn) lo hace así. Supermercado tiene versión industrial pero la real solo en Mývatn. Con mantequilla + salmón ahumado.
- **Humar** (langostino islandés). Experiencia gastronómica del viaje. Mejor en Höfn. Pakkhús (plancha) o Humarhöfnin (baguette lobster roll). Humarsúpa en cada pueblo costero.
- **Pylsur** (hot dog). Cordero + cerdo + ternera. Cebolla cruda + crispy + ketchup + mostaza dulce + remoulade. Bæjarins Beztu (Reykjavik desde 1937) famoso. Cada gasolinera lo tiene por 4-5€.
- **Hákarl** (tiburón fermentado). Solo para valientes.
- **Arctic char**. Pescado local, todas las costas.
- **Smoked lamb (hangikjöt)**. En supermercado.
- **Kleinur** (dona islandesa torcida). En panaderías.
- **Chocolate Omnom** (https://omnom.is). Reykjavik, de autor.
- **Agua del grifo**. La mejor del mundo. Rellenar botella del grifo o de cualquier arroyo de montaña. Sin plástico.

---

## 9. TIPS DE COMIDA EN MOTORHOME

1. **Supermercados**. Bonus (cerdito rosa) es el más barato, 10% menos que otros. Abre 11am. Krónan tiene mejor selección y abre 8-9am. Plan: comprar D2 en Reykjavik para 13 días (~250€). Reponer Akureyri (D7) y Höfn (D12).

2. **Skyr y lácteos**. Skyr Ísey fermentado 1100 años. Queso Höfðingi + mermelada arándanos silvestres para desayuno.

3. **Rúgbrauð geotermal**. Vogafjós en Mývatn lo hace bajo tierra 24h.

4. **Langosta y mariscos**. Humar en Höfn (capital): Pakkhús 60-80€ pp o Humarhöfnin 25-35€. Humarsúpa en cada pueblo costero.

5. **Pylsur (hot dog)**. Bæjarins Beztu o cualquier gasolinera, 4-5€.

6. **Agua**. Tap water de la mejor del mundo.

7. **Estrategia**. Desayuno en van (skyr + pan + café) = ~5€. Almuerzo pícnic al aire libre = ~5€. Cena en van 5 días/semana + restaurante 2 días = 25-50€ pp. Parada obligatoria en panadería de cada pueblo.

---

## 10. LOGÍSTICA

### Vuelos
- **Icelandair** (https://icelandair.com). Directo Madrid/BCN, 4h. Maleta incluida.
- **PLAY** (https://flyplay.com). Low-cost.
- **Rango**: 300-700€ pp.

### Motorhome
- **McRent** (https://mcrent.eu). Dethleffs premium. 220-340€/día.
- **SAAP obligatorio** ~350€ total. Sand & Ash Protection. Motorhomes más superficie = más riesgo. Se agrega al reservar (no después).
- **Extras**: GPS Garmin, bike rack, mesa+sillas, kit cocina superior.

### Camping
- **tjalda.is** + **parka.is** para reservar.
- **Camping Card** 187$ = 28 noches en 40+ sitios (si conviene según cálculo).
- **Acampada libre PROHIBIDA** desde 2015. Multas 50.000+ ISK (~330€).

### Carreteras
- **road.is** condiciones en vivo.
- **vedur.is** tiempo.
- **F-roads PROHIBIDAS** para motorhomes. Sin excepción.
- **Nueva tasa 2026**: 6.95 ISK/km en TODOS los vehículos. ~70€ total ruta.
- **Viento** puede tumbar puerta del van. Aparcar cara al viento.
- **No conducir sobre musgo/lava** = delito criminal.

### Apps esenciales
- **Road.is** carreteras
- **Vedur.is** tiempo
- **Parka.is** parking + campings
- **SafeTravel.is** seguridad
- **Google Maps offline**
- **Aurora Forecast** (https://auroraforecast.is)
- **Perlan Aurora** (https://perlan.is/aurora-forecast)

### Dinero
- **Cashless total**. Chip+PIN en todas partes.
- ISK: 1€ ≈ 140-150 ISK
- Gasolineras unmanned solo con tarjeta.

### Seguro
- **IATI** (https://iatiseguros.com) o **Heymondo** (https://heymondo.com). ~80€ pp.
- SAAP en rental obligatorio además.

### eSIM
- **Airalo** 10GB ~18$ o **Holafly** ilimitado ~47$.

### Equipaje técnico
- Capa base térmica
- Fleece
- Gore-Tex impermeable + pantalón impermeable
- Botas trekking impermeables
- Gorro, buff, guantes
- Traje de baño (aguas termales)
- Toalla microfibra
- Adaptador Europa (ya sirve, Islandia es Europa)
- Powerbank + cargador USB largo para el van
- Linterna frontal
- Gafas de sol
- Crema solar (sí, hace falta)

---

## 11. PRESUPUESTO DETALLADO

### Tabla estimado vs real

| Concepto | Rango estimado | Real | Pagado? | Notas |
|----------|----------------|------|---------|-------|
| Vuelos x2 | 600-1.400€ | | ☐ | Icelandair o PLAY |
| Hotel Reykjavik 2 noches | 300-400€ | | ☐ | Sand Hotel o Hotel Borg |
| Motorhome 13 días McRent | 2.860-4.420€ | | ☐ | 220-340€/día |
| SAAP + GPS extras | 350€ | | ☐ | SAAP obligatorio |
| Gasolina + tasa km 2026 | 300-400€ | | ☐ | 6.95 ISK/km |
| Campings 13 noches | 300-400€ | | ☐ | ~25€/noche |
| Ferry Baldur (van+2pax) | 70€ | | ☐ | Reservar con semanas |
| Comida supermercado | 250-350€ | | ☐ | Bonus/Krónan 13 días |
| Cenas restaurante (5-6) | 300-500€ | | ☐ | Dill, Pakkhús, etc. |
| Actividades (ballenas, baths, zodiac) | 400-700€ | | ☐ | - |
| eSIM + seguro | 200-380€ | | ☐ | IATI + Airalo |
| **Total estimado** | **~7.500€ media** | | | **2 personas** |

---

## 12. REGLAS CRÍTICAS MOTORHOME

1. **Acampada libre PROHIBIDA** desde 2015. Solo campings designados. Multas 50.000+ ISK.
2. **Nueva tasa kilométrica 2026**: 6.95 ISK/km en todos los vehículos. Reemplaza impuesto combustible.
3. **F-roads PROHIBIDAS** para motorhomes. Sin excepción. Ring Road + rutas pavimentadas. Westfjords OK en verano.
4. **SAAP obligatorio** para motorhomes. Cubre daño de ceniza volcánica y arena. Se agrega al reservar (no después).
5. **Viento**: puede tumbar puertas del van. Aparcar cara al viento. Sujetar puertas al abrir.
6. **No conducir sobre musgo o lava** = delito criminal. Daño permanente al ecosistema.
7. **Velocidades**: 90 km/h paved, 80 km/h gravel, 50 km/h en pueblos.
8. **Fuel strategy**: mantener tanque sobre la mitad. Estaciones escasas en zonas remotas.
9. **Dump stations**: aguas grises en campings y algunas gasolineras. Nunca en desagües de calle.
10. **Check daily**: road.is + vedur.is. Clima cambia en minutos, 4 estaciones en un día.

---

## 13. CHECKLISTS PRE-VIAJE

### Reservas a hacer (con deadline sugerido)

| Deadline | Reserva | Link | Urgencia |
|----------|---------|------|----------|
| Ya | Vuelos Icelandair/PLAY | https://icelandair.com | Alta |
| Ya | Motorhome McRent + SAAP | https://mcrent.eu | Alta |
| Ya | Hotel Reykjavik D1 (Sand Hotel) | https://sand-hotel.is | Alta |
| Ya | Hotel Reykjavik D15 | https://keahotels.is/hotel-borg | Alta |
| 3-4 meses antes | Cena Dill (Michelin) | https://dillrestaurant.is | Alta |
| 1-2 meses antes | Ferry Baldur | https://seatours.is | Alta |
| 1 mes antes | Ballenas Húsavík | https://northsailing.is | Media |
| 2-3 semanas antes | Zodiac Jökulsárlón | https://guidetoiceland.is | Media |
| 2 semanas antes | Cena Pakkhús Höfn | https://pakkhus.is | Media |
| 2 semanas antes | Cena Norð Austur sushi | https://nordurogaustur.is | Media |
| 2 semanas antes | Glacier hike (opcional) | https://icelandicmountainguides.com | Baja |
| 1 mes antes | Seguro IATI/Heymondo | https://iatiseguros.com | Alta |
| 1 semana antes | eSIM Airalo | https://airalo.com | Baja |

### Documentos
- [ ] DNI vigente
- [ ] Tarjeta Sanitaria Europea
- [ ] Impresiones de confirmaciones (hoteles, van, vuelos)
- [ ] Carnet de conducir
- [ ] Seguro de viaje impreso y digital
- [ ] Confirmación McRent imprimible

### Equipaje técnico
- [ ] Capa base térmica (merino si posible)
- [ ] Fleece
- [ ] Chaqueta Gore-Tex impermeable
- [ ] Pantalón impermeable
- [ ] Botas trekking impermeables
- [ ] Zapatillas casual
- [ ] Gorro + buff + guantes
- [ ] Traje de baño (esencial, termales)
- [ ] Toalla microfibra x2
- [ ] Sandalias/chanclas (termales)
- [ ] Mochila pequeña día
- [ ] Powerbank
- [ ] Cargador USB largo van
- [ ] Linterna frontal
- [ ] Gafas de sol
- [ ] Crema solar
- [ ] Repelente de mosquitos Mývatn (en serio)
- [ ] Cámara + tarjetas SD
- [ ] Kit primeros auxilios básico

### Apps a descargar
- [ ] Road.is
- [ ] Vedur.is
- [ ] Parka.is
- [ ] SafeTravel.is
- [ ] Google Maps (offline Islandia descargado)
- [ ] Aurora Forecast
- [ ] Flybus (para tickets)
- [ ] McRent app si existe
- [ ] Airalo
- [ ] Banco (pagos en ISK)

### Compras pre-viaje
- [ ] Tarjeta SIM / eSIM activada
- [ ] Mínimo 100€ en efectivo (sólo por si acaso)
- [ ] Adaptador europeo universal
- [ ] Impermeable ligero de emergencia

### Cosas para el van (opcional, algunos incluidos)
- [ ] Bolsa cocina básica (sal, aceite, especias)
- [ ] Tupper hermético
- [ ] Botella reutilizable agua
- [ ] Bolsas de basura reforzadas
- [ ] Rollo papel cocina
- [ ] Guantes domésticos

---

## 14. LINKS Y RECURSOS (apéndice consolidado)

### Booking / Reservas
- Vuelos: https://icelandair.com · https://flyplay.com
- Motorhome: https://mcrent.eu · https://happycampers.is · https://kukucampers.is · https://campeasy.com
- Hotel Sand: https://sand-hotel.is
- Hotel Borg: https://keahotels.is/hotel-borg
- Kex Hostel: https://kexrvk.is
- 101 Hotel: https://101hotel.is
- Ferry Baldur: https://seatours.is
- Flybus: https://flybus.is
- Tour ballenas: https://northsailing.is
- Zodiac Jökulsárlón: https://guidetoiceland.is
- Glacier hike: https://icelandicmountainguides.com
- Camping card: https://tjalda.is
- Campings: https://parka.is
- Camping Breiðavík: https://breidavik.is
- Camping Grundarfjörður: https://grundarfjordur.is
- Camping Tungudalur: https://tungudalur.is
- Camping Þakgil: https://thakgil.is
- Camping Reykjavik: https://reykjavikcampsite.is
- Secret Lagoon: https://secretlagoon.is
- Mývatn Nature Baths: https://myvatnnaturebaths.is
- Vök Baths: https://vokbaths.is
- GeoSea: https://geosea.is
- LAVA Centre: https://lavacentre.is
- Herring Era Museum: https://sild.is

### Gastronomía Reykjavik
- Dill: https://dillrestaurant.is
- Matur og Drykkur: https://maturogdrykkur.is
- Fiskmarkadurinn: https://fiskmarkadurinn.is
- Grillmarkadurinn: https://grillmarkadurinn.is
- Messinn: https://messinn.com
- Reykjavik Roasters: https://reykjavikroasters.is
- Sandholt: https://sandholt.is

### Gastronomía ruta
- Norð Austur Sushi: https://nordurogaustur.is
- Salka Restaurant: https://salkarestaurant.is
- Vogafjós: https://vogafjos.is
- Pakkhús: https://pakkhus.is
- Humarhöfnin: https://humarhofnin.is
- Brynja: https://brynjuis.is

### Diseño / Tiendas / Cultura
- Kraum: https://kraum.is
- Geysir: https://geysir.com
- 66°North: https://66north.com
- 12 Tónar: https://12tonar.is
- Marshall House: https://marshallhouse.is
- Skaftfell: https://skaftfell.is
- Perlan: https://perlan.is
- Omnom chocolate: https://omnom.is

### Información práctica
- Condiciones carretera: https://road.is
- Tiempo: https://vedur.is
- Seguridad: https://safetravel.is
- Aurora: https://auroraforecast.is
- Perlan Aurora: https://perlan.is/aurora-forecast
- Seguro IATI: https://iatiseguros.com
- Seguro Heymondo: https://heymondo.com

---

## 15. NOTAS FINALES PARA EL USUARIO

Este documento es la **fuente de verdad** inicial. Al pegarlo en Claude chat con el prompt de Parte A, Claude te guiará paso a paso para construir:

1. Primero la database **CALENDARIO DEL VIAJE** ★ (la más importante, la que usaréis a diario).
2. Luego el resto de databases y páginas.
3. Las relations entre databases para que todo se conecte.

A medida que vayáis confirmando reservas, completad los campos Status y Confirmación #. Los gastos reales van en la database de Presupuesto. El diario de viaje se rellena día a día durante el trip.

**La idea**: abrir Notion el 18 de agosto, ver en Calendar view que hoy toca "D1 Llegada + Reykjavik" + "Flybus 15:30" + "Check-in Sand Hotel 16:30" + "Cena Dill 21:00" todo en un vistazo, con links para abrir confirmaciones al instante.

Buen viaje, Irene y Víctor.
