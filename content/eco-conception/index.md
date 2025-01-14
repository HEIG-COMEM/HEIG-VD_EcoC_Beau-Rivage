# Déclaration d'éco-conception

## 1. Stratégie

Le service BRP a été évalué favorablement en termes d’utilité en tenant compte de RGESN.
En effet, le service devrait permettre de : [à détailler]

Les cibles utilisatrices du serviceBRP ont été identifiées en procédant à une analyse UX.
Ainsi, les cibles utilisatrices du service sont [à détailler].

En cohérence, le service numérique répond à leurs besoins puisque présentant les fonctionnalités suivantes : informations sur l'hotel, visualisation de chambre/suites/spa ainsi que leur reservation.

"Personnes référentes en écoconception numérique pour le service :

- Nom(s): Jeremie
- Titre: Lead Dev

Pour ce faire, des audits réguliers sont réalisés tous les mois pour améliorer en continu la performance environnementale du service.

L’empreinte environnementale du service BRP a été évaluée le 14 janvier 2025 en suivant la méthode de quantification d'impact RGESN. Ainsi, les indicateurs environnementaux suivants ont pu être calculés :

- Empreinte carbone [à compléter]
- Consommation d’énergie : [à compléter]
- Consommation en ressources abiotiques minérales/métaux [à compléter]
- Consommation en eau bleue : [à compléter]

Le service numérique collecte des données afin de répondre aux besoins des réservations. Il ne comporte pas de collecte de métadonnées à des fins publicitaires.

Le service numérique publie tout son code en opensource, sous la licence AGPL-3.0. Des efforts sont déployés pour favoriser l’ouverture et le partage des ressources du service en opensource.

## 2. Spécifications

### Matériel :

- Processeur minimum : [à compléter]
- Mémoire vive minimum : [à compléter]
- Évolution à venir sur la configuration matérielle minimum à partir de [date + 2 ans] : [à compléter]

### Logiciel :

- Navigateur web avec javascript activé

### Connexion internet :

- Débit descendant minimum : 512 Kbit/s

### Terminaux d'affichage :

- Le service numérique s’appuie sur un affichage dynamique 'responsive' pour s’adapter à la taille de l’écran de l’utilisateur.
- Type d’interface compatible : tactile, clavier, souris
- Tailles d’affichage supportées par le service : 450px, 768px, 1024px, 1200px, 1440px, 1920px

---

Le service numérique BRP a procédé à une revue de code et de conception pour réduire le coût environnemental du service.

Les fonctionnalités du service sont adaptées de façon dynamique dans le cadre de la politique de maintenance et de décommissionnement mis en œuvre pour assurer l’adéquation entre ces fonctionnalités et les besoins utilisateurs.
[à détailler]

## 3. Architecture

Le développement du backend et frontend du service numérique repose sur le(s) framework Nuxt.js.
Ce frameworks s’inscrit dans la droite ligne de la démarche d’écoconception du service, comme le montre les éléments suivants :

- Tree Shaking
- Pre-rendering
- Lazy loading
- Compression des ressources
- Mise en cache des ressources
- Réduction de la taille des ressources

Tests effectués démontrant l’adaptation de la consommation en ressource de l’architecture en fonction des besoins du service :

- Test de charge

Afin de prévenir les risques d’obsolescence et de limiter le besoin en mise à jour ou modernisation, le service numérique repose sur des protocoles pérennes et adaptés à ses fonctionnalités. En particulier :

- Le service numérique est accessible en IPV6 (et en IPV4)
- Le service numérique repose sur le protocole HTTPS
- La version de TLS utilisée doit prendre en charge la version la plus récente, c’est-à-dire [à l’heure de rédaction de ce document, il s’agit de : TLS v1.3]

## 4. UX UI

Le service ne repose pas sur une fonctionnalité de lecture automatique par défaut et incontrôlée, limite le recours à des animations visuelles, clignotements ou défilements automatiques non contrôlables.

Le design du service numérique repose sur un chargement à la demande du contenu proportionné au contexte d’utilisation (notamment la mise en place d’un bouton « Voir plus » pour continuer la navigation ou une pagination), ou peut s’afficher en entier sur un écran.

Les parcours de navigation sont optimisés et recentrés autour des fonctionnalités essentielles d’après les outils UX et les statistiques d’usages effectuées.
Des indicateurs techniques pour les parcours identifiés ont été ou sont en cours de mise en place pour assurer l’optimisation dans le temps du parcours de navigation, à la lumière des retours récoltés.

L’interface du service numérique s’appuie majoritairement sur des composants fonctionnels.

En cohérence avec les cibles utilisatrices identifiées et l’impact environnemental différencié des contenus audiovisuels, les choix suivants de recours à l’image, l’audio ou la vidéo ont été effectués :

- Images : Afin de limiter l’impact environnemental des images, le service numérique utilise des images compressées et adaptées à la taille d’affichage.
- Audio : Le service numérique ne repose pas sur des contenus audio
- Vidéo : Le service numérique ne repose pas sur des contenus vidéo

Le nombre de polices téléchargées est limité à deux (avec au maximum quatre variantes au total) par page et la taille des polices téléchargées ne dépasse pas 400 Ko par page.

Le service n'inclut pas de dark patterns dans le design du service

## 5. Contenus

Verification périodique que les images matricielles ne sont plus dans les formats JPEG, PNG ou GIF mais en WebP, AVIF, JPEG XL.

Présence de résolutions multiples : x1, x2
Politique de paramétrage de la qualité, lors de l’enregistrement des images :

- Qualité des images : 80%
- Transformation des images au format WebP

## 6. Front-end

- Poids des ressources maximum astreint par écran : 424 kB
- Nombre de requêtes serveurs maximum astreinte par écran : 20

Le service numérique a mis en place une stratégie de cache, optimisée au regard du type de contenu, du contexte d’application et des scénarios d’usage.

Le service numérique a mis en place une stratégie de compression des requêtes http.

Les images sont dimmentionnées en fonction de la taille d'affichage de l'utilisateur.

Seulement les ressources necessaires sont chargées, le reste est chargé à la demande.

L'ensemble des ressources sont hébergée sur un même domaine.

## 7. Back-end

Le service numérique a mis en place une stratégie de cache, optimisée au regard du type de contenu, du contexte d’application et des scénarios d’usage.
En voici les principaux contours côté serveurs :

- Pré-rendering
- Mise en cache des ressources
- Compression des ressources

## 8. Hébergement

L’engagement écologique de l’hébergeur repose également sur une politique de gestion durable des équipements. [Render utilise AWS](https://aws.amazon.com/fr/sustainability/)

L’hébergement fournit les indicateurs suivants sur son efficacité énergétique :

- PUE (Power Usage Effectiveness) réel : [1.12](https://arc.net/l/quote/nfbuqwqa)

L’hébergement fournit les indicateurs suivants sur son utilisation d’eau :

- WUE (Water Usage Effectiveness) réel : [0.25 litres d’eau par kilowatt-heure](https://arc.net/l/quote/tczumfsg)

Le mix énergétique de l’hébergement du service numérique est documenté et présente une consommation d’énergie renouvelable majoritaire comme l’attestent les données suivantes :

Scalabilité de l’hébergement :

- Le service numérique est hébergé sur une infrastructure cloud
- L’hébergement du service numérique est scalable, un SLA est en place

## 9. Algorithmies

Non-applicable
