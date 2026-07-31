# GUION CONSOLIDADO PARA SEEDANCE 2.0 (Higgsfield)
## Tutorial: Cómo obtener la nacionalidad española en 2026 — 12 bloques de ~15s

Fusión de los 23 bloques originales de Flow en 12 bloques más largos, aprovechando
el tope de **15s por generación** de Seedance 2.0 (casi el doble que Flow). Los
13 recursos visuales (imágenes) no cambian — siguen igual, uno por cada uno,
sin límite de duración porque son estáticos.

**Para cada bloque, usa:**
```
model: seedance_2_0
medias: [{ value: "<tu media_id>", role: "video_references" }]
duration: 15
resolution: 720p (sube a 1080p con mode: std cuando ya valides la muestra)
mode: fast
aspect_ratio: 16:9
generate_audio: true
```

Cambié en todos los prompts *"the same man from the reference images (Martín)"*
por **"the same man from the reference video"**, correcto para `video_references`
en vez de Ingredients to Video de Flow.

---

## BLOQUE 1 (fusiona A1+A2) — Introducción completa

**Dice Martín:**
> "Hoy te voy a explicar, con calma y de principio a fin, cómo se consigue realmente la nacionalidad española en 2026, sin letra pequeña. Vamos a ver las cuatro vías según tus años de residencia, los exámenes que hay que aprobar, la documentación exacta, los plazos reales, y un cambio que se está debatiendo ahora mismo para 2026."

**Prompt:**
```
Medium shot, direct to camera, the same man from the reference video, wearing
his navy blue suit jacket, sits in a modern law office with warm, softly
blurred bookshelves and a window with soft daylight behind him. Starts with a
calm, warm, welcoming tone and open posture; around the midpoint the camera
does a slow subtle push-in as his tone becomes slightly more structured and
instructional, counting softly on his fingers. Cinematic, shallow depth of
field, warm neutral lighting, 35mm lens look. He says, "Hoy te voy a explicar,
con calma y de principio a fin, cómo se consigue realmente la nacionalidad
española en 2026, sin letra pequeña. Vamos a ver las cuatro vías según tus
años de residencia, los exámenes que hay que aprobar, la documentación exacta,
los plazos reales, y un cambio que se está debatiendo ahora mismo para 2026."
SFX: subtle room tone. No subtitles. No text overlays.
```
*(Recurso A — índice visual — se inserta después de este bloque)*

---

## BLOQUE 2 (fusiona B1+B2) — Regla general + gran excepción

**Dice Martín:**
> "Empecemos por lo básico. La regla general dice que necesitas diez años de residencia legal y continuada en España. Pero aquí viene lo importante: si eres de un país iberoamericano, de Filipinas, Andorra, Guinea Ecuatorial, Portugal, o eres sefardí, ese plazo baja a solo dos años."

**Prompt:**
```
Medium shot, the same man from the reference video, same navy suit, modern
law office, warm daylight window. Starts calm and explanatory, one hand
gesturing gently; midway through, the camera shifts to a slightly different
three-quarter angle as his tone becomes warmer and more emphatic, leaning in
slightly as if sharing good news. Cinematic, shallow depth of field, warm
lighting, 35mm lens look. He says, "Empecemos por lo básico. La regla general
dice que necesitas diez años de residencia legal y continuada en España. Pero
aquí viene lo importante: si eres de un país iberoamericano, de Filipinas,
Andorra, Guinea Ecuatorial, Portugal, o eres sefardí, ese plazo baja a solo
dos años." SFX: subtle room tone. No subtitles. No text overlays.
```
*(Recurso B1 — timeline 10 años — y Recurso B2 — mapa Iberoamérica — se insertan durante/después de este bloque)*

---

## BLOQUE 3 (fusiona B3+B4) — Vía exprés + refugiados + cierre de sección

**Dice Martín:**
> "Y todavía hay una vía más rápida: solo un año, si naciste en España, si estás casado con una persona española, o si eres viudo o viuda de una. Y si tienes estatuto de refugiado, el plazo son cinco años. Estas son las cuatro puertas de entrada: diez, cinco, dos o un año, según tu situación."

**Prompt:**
```
Close-up shot, the same man from the reference video, same suit, softly
blurred office background. Starts warm and confiding, as if revealing
something valuable; toward the end the camera eases back to a medium shot as
his tone becomes calm and summarizing, with an open reassuring gesture.
Cinematic, shallow depth of field, warm lighting, 35mm lens look. He says, "Y
todavía hay una vía más rápida: solo un año, si naciste en España, si estás
casado con una persona española, o si eres viudo o viuda de una. Y si tienes
estatuto de refugiado, el plazo son cinco años. Estas son las cuatro puertas
de entrada: diez, cinco, dos o un año, según tu situación." SFX: subtle room
tone. No subtitles. No text overlays.
```
*(Recurso B3 — gráfico de barras 10/5/2/1 — se inserta después)*

---

## BLOQUE 4 (fusiona C1+C2) — Buena conducta + continuidad de residencia

**Dice Martín:**
> "Sea cual sea tu vía, hay requisitos que aplican siempre. El primero: buena conducta cívica, no tener antecedentes penales ni en España ni en tu país de origen. El segundo, y este es el que más expedientes arruina: la residencia tiene que ser continuada. Si pasas más de seis meses seguidos fuera de España en un mismo año, rompes esa continuidad."

**Prompt:**
```
Medium shot, fresh angle opening the new section, slightly wider framing, the
same man from the reference video, same suit, modern office. Starts calm and
serious; midway the camera pushes in slightly as his tone becomes more
cautionary and attentive, with a slight forward lean. Cinematic, shallow
depth of field, warm lighting, 35mm lens look. He says, "Sea cual sea tu vía,
hay requisitos que aplican siempre. El primero: buena conducta cívica, no
tener antecedentes penales ni en España ni en tu país de origen. El segundo, y
este es el que más expedientes arruina: la residencia tiene que ser
continuada. Si pasas más de seis meses seguidos fuera de España en un mismo
año, rompes esa continuidad." SFX: subtle room tone. No subtitles. No text
overlays.
```
*(Recurso C1 — alerta 6 meses — se inserta después)*

---

## BLOQUE 5 (fusiona C3+D1) — Empadronamiento + examen DELE A2

**Dice Martín:**
> "Y el tercero: tienes que estar empadronado, con tu domicilio real registrado en el ayuntamiento donde vives. Ahora, los exámenes: el primero es el DELE A2, que certifica tu nivel de español. Pero si tu idioma materno ya es el español, este examen no te hace falta."

**Prompt:**
```
Medium shot, the same man from the reference video, same suit, office
background. Starts calm and practical, matter-of-fact; midway the framing
shifts slightly to open a new topic as his tone becomes instructional and
encouraging. Cinematic, shallow depth of field, warm lighting, 35mm lens
look. He says, "Y el tercero: tienes que estar empadronado, con tu domicilio
real registrado en el ayuntamiento donde vives. Ahora, los exámenes: el
primero es el DELE A2, que certifica tu nivel de español. Pero si tu idioma
materno ya es el español, este examen no te hace falta." SFX: subtle room
tone. No subtitles. No text overlays.
```
*(Recurso C2 — casa + empadronamiento — y Recurso D1 — diploma idioma — se insertan durante/después)*

---

## BLOQUE 6 (fusiona D2+D3) — Examen CCSE + dónde prepararlo

**Dice Martín:**
> "El segundo es el CCSE: veinticinco preguntas tipo test sobre la Constitución, la cultura y la sociedad española. Necesitas acertar al menos quince para aprobar. Los dos exámenes los organiza el Instituto Cervantes, y se pueden preparar con simulacros oficiales gratuitos en su propia página web."

**Prompt:**
```
Medium close-up, the same man from the reference video, same suit, office
background. Starts clear and methodical, counting gently with fingers;
toward the end the camera eases back to a medium shot as his tone becomes
warm and reassuring. Cinematic, shallow depth of field, warm lighting, 35mm
lens look. He says, "El segundo es el CCSE: veinticinco preguntas tipo test
sobre la Constitución, la cultura y la sociedad española. Necesitas acertar
al menos quince para aprobar. Los dos exámenes los organiza el Instituto
Cervantes, y se pueden preparar con simulacros oficiales gratuitos en su
propia página web." SFX: subtle room tone. No subtitles. No text overlays.
```
*(Recurso D2 — examen tipo test — se inserta después)*

---

## BLOQUE 7 (fusiona D4+E1) — Consejo de preparación + primer documento

**Dice Martín:**
> "Mi consejo: hazlos con al menos un mes de margen, porque necesitarás incluir los certificados de ambos exámenes aprobados. Vamos con los papeles: necesitas tu certificado de nacimiento, legalizado y traducido oficialmente al español si viene de otro país."

**Prompt:**
```
Medium close-up, the same man from the reference video, same suit, office
background. Starts in an advisory, warm mentor tone; midway the framing opens
slightly wider to signal a new topic, tone becoming calm and checklist-style.
Cinematic, shallow depth of field, warm lighting, 35mm lens look. He says,
"Mi consejo: hazlos con al menos un mes de margen, porque necesitarás incluir
los certificados de ambos exámenes aprobados. Vamos con los papeles:
necesitas tu certificado de nacimiento, legalizado y traducido oficialmente al
español si viene de otro país." SFX: subtle room tone. No subtitles. No text
overlays.
```
*(Recurso E1 — checklist documentos — se inserta después)*

---

## BLOQUE 8 (fusiona E2+E3) — Resto de documentación

**Dice Martín:**
> "También el certificado de antecedentes penales de tu país, legalizado con la apostilla de La Haya, y el certificado de empadronamiento actualizado. Y por supuesto, tu pasaporte en vigor, tu tarjeta de residencia, y los justificantes de haber vivido en España el tiempo que corresponda según tu vía."

**Prompt:**
```
Medium close-up, the same man from the reference video, same suit, office
background. Starts steady and practical; toward the end the camera eases
back slightly as his tone becomes warm and wrapping-up. Cinematic, shallow
depth of field, warm lighting, 35mm lens look. He says, "También el
certificado de antecedentes penales de tu país, legalizado con la apostilla
de La Haya, y el certificado de empadronamiento actualizado. Y por supuesto,
tu pasaporte en vigor, tu tarjeta de residencia, y los justificantes de haber
vivido en España el tiempo que corresponda según tu vía." SFX: subtle room
tone. No subtitles. No text overlays.
```
*(Recurso E2 — pasaporte + tarjeta — se inserta después)*

---

## BLOQUE 9 (fusiona F1+F2) — El proceso de solicitud completo

**Dice Martín:**
> "Toda la solicitud se presenta de forma electrónica, a través de la sede del Ministerio de Justicia, con tu certificado digital o tu DNI electrónico. Subes todos los documentos escaneados, pagas la tasa, y a partir de ahí tu expediente queda en manos de la Dirección General de Seguridad Jurídica."

**Prompt:**
```
Medium shot, fresh angle opening the new section, the same man from the
reference video, same suit, office background. Starts clear and
step-by-step; midway the camera pushes in slightly as his tone becomes calm,
confident and informative. Cinematic, shallow depth of field, warm lighting,
35mm lens look. He says, "Toda la solicitud se presenta de forma
electrónica, a través de la sede del Ministerio de Justicia, con tu
certificado digital o tu DNI electrónico. Subes todos los documentos
escaneados, pagas la tasa, y a partir de ahí tu expediente queda en manos de
la Dirección General de Seguridad Jurídica." SFX: subtle room tone. No
subtitles. No text overlays.
```
*(Recurso F1 — subida de documento online — se inserta durante este bloque)*

---

## BLOQUE 10 (fusiona G1+G2) — Plazos reales + qué hacer si te deniegan

**Dice Martín:**
> "En la práctica, la resolución tarda entre tres y nueve meses en la mayoría de provincias, aunque en algunas puede acercarse al año. Y si te deniegan la solicitud, no es el final: tienes derecho a presentar un recurso de reposición, y después, si hace falta, acudir a la vía judicial."

**Prompt:**
```
Medium shot, fresh angle opening the new section, the same man from the
reference video, same suit, office background. Starts calm, realistic and
honest; midway the camera pushes in slightly as his tone becomes reassuring
and resolute. Cinematic, shallow depth of field, warm lighting, 35mm lens
look. He says, "En la práctica, la resolución tarda entre tres y nueve meses
en la mayoría de provincias, aunque en algunas puede acercarse al año. Y si
te deniegan la solicitud, no es el final: tienes derecho a presentar un
recurso de reposición, y después, si hace falta, acudir a la vía judicial."
SFX: subtle room tone. No subtitles. No text overlays.
```
*(Recurso G1 — timeline 3-9 meses — se inserta durante este bloque)*

---

## BLOQUE 11 (fusiona H1+H2) — Reforma 2026 + resumen (bookend con bloque 1)

**Dice Martín:**
> "Un último dato importante: ahora mismo se está debatiendo una reforma para eliminar los plazos fijos de espera. Todavía no es ley, pero podría cambiar este panorama pronto. Resumiendo: mira tus años de residencia, prepara tus exámenes con tiempo, reúne bien tu documentación, y ten paciencia con los plazos. Así es como se consigue, de verdad, la nacionalidad española."

**Prompt:**
```
Medium shot, fresh angle opening the closing section, the same man from the
reference video, same suit, office background. Starts intriguing and
forward-looking, with a slight raised eyebrow; midway the camera returns to
the exact framing of block 1 to create a full bookend, his tone becoming
warm, summarizing and confident. Cinematic, shallow depth of field, warm
lighting, 35mm lens look. He says, "Un último dato importante: ahora mismo se
está debatiendo una reforma para eliminar los plazos fijos de espera. Todavía
no es ley, pero podría cambiar este panorama pronto. Resumiendo: mira tus
años de residencia, prepara tus exámenes con tiempo, reúne bien tu
documentación, y ten paciencia con los plazos. Así es como se consigue, de
verdad, la nacionalidad española." SFX: subtle room tone. No subtitles. No
text overlays.
```
*(Recurso H1 — reforma próximamente — se inserta durante este bloque)*

---

## BLOQUE 12 (H3, sin fusionar) — CTA + disclaimer + cierre final

**Dice Martín:**
> "Esto es información general y educativa, no sustituye una consulta personalizada — cada caso tiene su propia casuística. Si quieres que analicemos el tuyo, sígueme y hablamos. Nos vemos en el próximo video."

**Prompt:**
```
Medium close-up, camera static, warm final framing looking directly at the
lens, the same man from the reference video, same suit, office background.
Warm, trustworthy, closing tone, small genuine smile at the end. Cinematic,
shallow depth of field, warm lighting, 35mm lens look. He says, "Esto es
información general y educativa, no sustituye una consulta personalizada —
cada caso tiene su propia casuística. Si quieres que analicemos el tuyo,
sígueme y hablamos. Nos vemos en el próximo video." SFX: subtle room tone. No
subtitles. No text overlays.
```

---

## Notas

- Se dejó como bloque único (sin fusionar) el cierre H3: es el CTA + disclaimer,
  merece su propio espacio sin compartir con otro contenido.
- Los 13 recursos visuales (imágenes) se generan y montan exactamente igual que
  antes — no dependen del límite de duración del video, así que no había nada
  que fusionar ahí.
- Cálculo de coste con `seedance_2_0` (`mode: fast`, 720p, ~15s): ~28 créditos
  por bloque × 12 bloques ≈ **336 créditos** solo en video (antes, con 23
  bloques de Flow/Gemini, habría sido más generaciones — aunque en Flow cada
  generación tiene su propio coste dentro de tu plan, no de estos créditos de
  Higgsfield).
- Si algún bloque se queda corto de los 15s completos o el diálogo no cabe
  bien, es preferible acortar un poco el texto antes que fiarse de que
  Seedance lo comprima solo.
