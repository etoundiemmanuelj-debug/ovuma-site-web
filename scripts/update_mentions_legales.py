import json, sys

H = "<h2 style='font-family: var(--font-heading)'>"

FR = f"""<p><em>Dernière mise à jour : 7 novembre 2026</em></p>
{H}1. Éditeur</h2>
<p>Le site <strong>ovuma.org</strong> et l'application mobile <strong>Ovúmá</strong> (apprentissage des langues du Cameroun) sont édités par :</p>
<ul>
<li><strong>Joseph Emmanuel Etoundi Alloh</strong>, entrepreneur individuel</li>
<li>Adresse : Rue Eto'o, Bonamoussadi, Douala, Cameroun</li>
<li>E-mail : <a href='mailto:contact@ovuma.org'>contact@ovuma.org</a></li>
<li>Téléphone : <a href='tel:+237697765352'>+237 697 765 352</a></li>
</ul>
<p><strong>Directeur de la publication :</strong> Joseph Emmanuel Etoundi Alloh.</p>
{H}2. Hébergement</h2>
<p><strong>Site web :</strong> Netlify, Inc. - 512 2nd Street, FL2, San Francisco, CA 94107, États-Unis - <a href='https://www.netlify.com' target='_blank' rel='noopener noreferrer'>www.netlify.com</a></p>
<p><strong>Application (serveurs et données) :</strong> Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis - <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>vercel.com</a>. Base de données : Neon. Stockage de fichiers : Vercel Blob.</p>
<p>L'application est distribuée sur Google Play (Google LLC) et sur l'App Store (Apple Inc.), selon les conditions propres à chaque plateforme.</p>
{H}3. Propriété intellectuelle</h2>
<p>Le nom et la marque Ovúmá, le logo, les illustrations, le design, ainsi que les contenus pédagogiques (textes, enregistrements audio, exercices, traductions) sont la propriété de l'éditeur ou de ses partenaires, sauf mention contraire.</p>
<p>Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
{H}4. Données personnelles</h2>
<p>Les traitements de données sont réalisés conformément à la loi n° 2024/017 du 23 décembre 2024 relative à la protection des données à caractère personnel au Cameroun. Le responsable de traitement est l'éditeur indiqué ci-dessus.</p>
<p><strong>Sur ce site</strong>, nous collectons uniquement :</p>
<ul>
<li>les informations que vous saisissez dans les formulaires (contact, inscription à la bêta, newsletter) : nom ou prénom, adresse e-mail, message, système de votre téléphone. Elles sont transmises via Netlify Forms et servent uniquement à vous répondre ou à vous informer d'Ovúmá ;</li>
<li>des statistiques de fréquentation (Google Analytics), seulement si vous les acceptez dans le bandeau cookies.</li>
</ul>
<p>Ces données sont conservées au plus 3 ans après notre dernier échange, puis supprimées. Certains prestataires étant établis aux États-Unis, des données peuvent y être hébergées.</p>
<p>Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition. Écrivez-nous à <a href='mailto:contact@ovuma.org'>contact@ovuma.org</a>. Vous pouvez aussi saisir l'Autorité de protection des données à caractère personnel.</p>
<p>Les données traitées par l'application sont détaillées dans notre <a href='/politique-de-confidentialite'>politique de confidentialité</a>. Pour supprimer votre compte : <a href='/supprimer-compte'>supprimer mon compte</a>.</p>
{H}5. Cookies</h2>
<p>Le site n'utilise aucun cookie publicitaire. Les cookies de mesure d'audience de Google Analytics (Google LLC) ne sont déposés qu'après votre accord, donné dans le bandeau affiché à votre première visite ; ils sont conservés au plus 13 mois. Vous pouvez changer d'avis à tout moment avec le lien « Gérer les cookies » en bas de page.</p>
<p>Dans l'application, certaines données techniques sont enregistrées sur votre appareil (connexion, progression, préférences) pour qu'elle fonctionne correctement.</p>
{H}6. Services tiers</h2>
<p>Le site et l'application peuvent intégrer des services tiers : vidéos YouTube (Google LLC), notifications Firebase / Expo, réseaux sociaux. Leur utilisation est soumise à leurs propres conditions et politiques de confidentialité.</p>
{H}7. Responsabilité</h2>
<p>Nous veillons à l'exactitude des contenus, sans pouvoir garantir l'absence totale d'erreurs. Le site et l'application sont fournis « en l'état » ; des interruptions peuvent survenir (maintenance, mise à jour, force majeure). Les liens vers d'autres sites n'engagent pas notre responsabilité quant à leur contenu.</p>
{H}8. Droit applicable</h2>
<p>Les présentes mentions sont régies par le droit camerounais, notamment la loi n° 2010/021 du 21 décembre 2010 régissant le commerce électronique, la loi n° 2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité, et la loi n° 2024/017 du 23 décembre 2024. En cas de litige, et à défaut d'accord amiable, les tribunaux de Douala sont compétents.</p>
{H}9. Contact</h2>
<p><a href='mailto:contact@ovuma.org'>contact@ovuma.org</a> - <a href='tel:+237697765352'>+237 697 765 352</a></p>"""

EN = f"""<p><em>Last updated: 7 November 2026</em></p>
{H}1. Publisher</h2>
<p>The website <strong>ovuma.org</strong> and the <strong>Ovúmá</strong> mobile app (learning Cameroonian languages) are published by:</p>
<ul>
<li><strong>Joseph Emmanuel Etoundi Alloh</strong>, sole trader</li>
<li>Address: Rue Eto'o, Bonamoussadi, Douala, Cameroon</li>
<li>Email: <a href='mailto:contact@ovuma.org'>contact@ovuma.org</a></li>
<li>Phone: <a href='tel:+237697765352'>+237 697 765 352</a></li>
</ul>
<p><strong>Publication director:</strong> Joseph Emmanuel Etoundi Alloh.</p>
{H}2. Hosting</h2>
<p><strong>Website:</strong> Netlify, Inc. - 512 2nd Street, FL2, San Francisco, CA 94107, USA - <a href='https://www.netlify.com' target='_blank' rel='noopener noreferrer'>www.netlify.com</a></p>
<p><strong>App (servers and data):</strong> Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, USA - <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>vercel.com</a>. Database: Neon. File storage: Vercel Blob.</p>
<p>The app is distributed on Google Play (Google LLC) and the App Store (Apple Inc.), under each platform's own terms.</p>
{H}3. Intellectual property</h2>
<p>The Ovúmá name and brand, logo, illustrations, design and learning content (texts, audio recordings, exercises, translations) belong to the publisher or its partners, unless stated otherwise.</p>
<p>Any reproduction, representation, modification or use, in whole or in part, without prior written permission is prohibited.</p>
{H}4. Personal data</h2>
<p>Personal data is processed in accordance with Cameroon's Law No. 2024/017 of 23 December 2024 on the protection of personal data. The data controller is the publisher named above.</p>
<p><strong>On this website</strong>, we only collect:</p>
<ul>
<li>what you enter in our forms (contact, beta sign-up, newsletter): name or first name, email address, message, phone operating system. It is sent through Netlify Forms and used only to reply to you or keep you informed about Ovúmá;</li>
<li>audience statistics (Google Analytics), only if you accept them in the cookie banner.</li>
</ul>
<p>This data is kept for up to 3 years after our last exchange, then deleted. Some providers are based in the United States, so data may be stored there.</p>
<p>You have the right to access, correct, delete and object to the processing of your data. Write to <a href='mailto:contact@ovuma.org'>contact@ovuma.org</a>. You may also contact Cameroon's personal data protection authority.</p>
<p>Data processed by the app is described in our <a href='/politique-de-confidentialite'>privacy policy</a>. To delete your account: <a href='/supprimer-compte'>delete my account</a>.</p>
{H}5. Cookies</h2>
<p>The website uses no advertising cookies. Google Analytics (Google LLC) audience cookies are only set after you agree in the banner shown on your first visit; they are kept for up to 13 months. You can change your choice at any time with the “Manage cookies” link at the bottom of the page.</p>
<p>In the app, some technical data is stored on your device (sign-in, progress, preferences) so that it works properly.</p>
{H}6. Third-party services</h2>
<p>The website and app may include third-party services: YouTube videos (Google LLC), Firebase / Expo notifications, social networks. Their use is subject to their own terms and privacy policies.</p>
{H}7. Liability</h2>
<p>We take care to keep content accurate but cannot guarantee it is entirely error-free. The website and app are provided “as is”; interruptions may occur (maintenance, updates, force majeure). We are not responsible for the content of external websites we link to.</p>
{H}8. Governing law</h2>
<p>This notice is governed by Cameroonian law, including Law No. 2010/021 of 21 December 2010 on electronic commerce, Law No. 2010/012 of 21 December 2010 on cybersecurity and cybercrime, and Law No. 2024/017 of 23 December 2024. In the event of a dispute, failing an amicable settlement, the courts of Douala have jurisdiction.</p>
{H}9. Contact</h2>
<p><a href='mailto:contact@ovuma.org'>contact@ovuma.org</a> - <a href='tel:+237697765352'>+237 697 765 352</a></p>"""

ES = f"""<p><em>Última actualización: 7 de noviembre de 2026</em></p>
{H}1. Editor</h2>
<p>El sitio <strong>ovuma.org</strong> y la aplicación móvil <strong>Ovúmá</strong> (aprendizaje de las lenguas de Camerún) son editados por:</p>
<ul>
<li><strong>Joseph Emmanuel Etoundi Alloh</strong>, empresario individual</li>
<li>Dirección: Rue Eto'o, Bonamoussadi, Duala, Camerún</li>
<li>Correo: <a href='mailto:contact@ovuma.org'>contact@ovuma.org</a></li>
<li>Teléfono: <a href='tel:+237697765352'>+237 697 765 352</a></li>
</ul>
<p><strong>Director de la publicación:</strong> Joseph Emmanuel Etoundi Alloh.</p>
{H}2. Alojamiento</h2>
<p><strong>Sitio web:</strong> Netlify, Inc. - 512 2nd Street, FL2, San Francisco, CA 94107, Estados Unidos - <a href='https://www.netlify.com' target='_blank' rel='noopener noreferrer'>www.netlify.com</a></p>
<p><strong>Aplicación (servidores y datos):</strong> Vercel Inc. - 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos - <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>vercel.com</a>. Base de datos: Neon. Almacenamiento de archivos: Vercel Blob.</p>
<p>La aplicación se distribuye en Google Play (Google LLC) y en la App Store (Apple Inc.), según las condiciones de cada plataforma.</p>
{H}3. Propiedad intelectual</h2>
<p>El nombre y la marca Ovúmá, el logotipo, las ilustraciones, el diseño y los contenidos pedagógicos (textos, grabaciones de audio, ejercicios, traducciones) pertenecen al editor o a sus socios, salvo indicación contraria.</p>
<p>Queda prohibida cualquier reproducción, representación, modificación o explotación, total o parcial, sin autorización escrita previa.</p>
{H}4. Datos personales</h2>
<p>Los datos se tratan conforme a la Ley n.º 2024/017 de 23 de diciembre de 2024 relativa a la protección de datos personales en Camerún. El responsable del tratamiento es el editor indicado arriba.</p>
<p><strong>En este sitio</strong> solo recogemos:</p>
<ul>
<li>lo que escribes en los formularios (contacto, inscripción a la beta, boletín): nombre, correo electrónico, mensaje, sistema de tu teléfono. Se envía mediante Netlify Forms y solo sirve para responderte o informarte sobre Ovúmá;</li>
<li>estadísticas de visitas (Google Analytics), solo si las aceptas en el aviso de cookies.</li>
</ul>
<p>Estos datos se conservan como máximo 3 años después de nuestro último intercambio y luego se eliminan. Algunos proveedores están en Estados Unidos, por lo que los datos pueden alojarse allí.</p>
<p>Tienes derecho de acceso, rectificación, supresión y oposición. Escríbenos a <a href='mailto:contact@ovuma.org'>contact@ovuma.org</a>. También puedes dirigirte a la autoridad camerunesa de protección de datos personales.</p>
<p>Los datos que trata la aplicación se describen en nuestra <a href='/politique-de-confidentialite'>política de privacidad</a>. Para eliminar tu cuenta: <a href='/supprimer-compte'>eliminar mi cuenta</a>.</p>
{H}5. Cookies</h2>
<p>El sitio no usa cookies publicitarias. Las cookies de medición de audiencia de Google Analytics (Google LLC) solo se instalan con tu consentimiento, dado en el aviso que aparece en tu primera visita; se conservan como máximo 13 meses. Puedes cambiar de opinión en cualquier momento con el enlace «Gestionar cookies» al pie de página.</p>
<p>En la aplicación, algunos datos técnicos se guardan en tu dispositivo (inicio de sesión, progreso, preferencias) para que funcione correctamente.</p>
{H}6. Servicios de terceros</h2>
<p>El sitio y la aplicación pueden integrar servicios de terceros: vídeos de YouTube (Google LLC), notificaciones Firebase / Expo, redes sociales. Su uso está sujeto a sus propias condiciones y políticas de privacidad.</p>
{H}7. Responsabilidad</h2>
<p>Cuidamos la exactitud de los contenidos, sin poder garantizar la ausencia total de errores. El sitio y la aplicación se ofrecen «tal cual»; pueden producirse interrupciones (mantenimiento, actualizaciones, fuerza mayor). No somos responsables del contenido de los sitios externos enlazados.</p>
{H}8. Legislación aplicable</h2>
<p>Este aviso se rige por la legislación camerunesa, en particular la Ley n.º 2010/021 de 21 de diciembre de 2010 sobre comercio electrónico, la Ley n.º 2010/012 de 21 de diciembre de 2010 sobre ciberseguridad y cibercriminalidad y la Ley n.º 2024/017 de 23 de diciembre de 2024. En caso de litigio, a falta de acuerdo amistoso, serán competentes los tribunales de Duala.</p>
{H}9. Contacto</h2>
<p><a href='mailto:contact@ovuma.org'>contact@ovuma.org</a> - <a href='tel:+237697765352'>+237 697 765 352</a></p>"""

COOKIES = {
    'fr': {'text': "Nous utilisons Google Analytics pour comprendre comment le site est utilisé. Rien n'est enregistré sans votre accord.", 'accept': "Accepter", 'refuse': "Refuser", 'more': "En savoir plus", 'manage': "Gérer les cookies"},
    'en': {'text': "We use Google Analytics to understand how the site is used. Nothing is stored without your consent.", 'accept': "Accept", 'refuse': "Decline", 'more': "Learn more", 'manage': "Manage cookies"},
    'es': {'text': "Usamos Google Analytics para entender cómo se usa el sitio. No se guarda nada sin tu consentimiento.", 'accept': "Aceptar", 'refuse': "Rechazar", 'more': "Más información", 'manage': "Gestionar cookies"},
}

root = sys.argv[1]
for lang, html in {'fr': FR, 'en': EN, 'es': ES}.items():
    p = f'{root}/src/i18n/{lang}.json'
    d = json.load(open(p, encoding='utf-8'))
    d['legal']['mentions']['content'] = html
    d['cookies'] = COOKIES[lang]
    json.dump(d, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
    print('ok', lang, list(d['legal']['mentions'].keys()))
