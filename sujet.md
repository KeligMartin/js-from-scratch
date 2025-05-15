## Pokemon TCG

---

Vous êtes chargés de la réalisation d'une interface WEB permettant d'échanger et tirer des cartes
pokémons.

Sur ce site, il est possible de tirer toutes les 5 minutes des cartes au hasard (un paquet de 5 cartes). Il
est possible de réaliser des combats entre dresseurs, à vous de voir comment modéliser cela.

Le "joueur" possède 2 paquets, un pour sa main, et une pioche, il peut tirer (drag & drop) une carte de sa
pioche pour la mettre dans sa main, ce qui enverra la première carte de sa main à la fin de sa pioche.

La carte du pokémon change de couleur suivant le type du pokémon représenté.

A la fin d'un combat, vous pouvez laisser une note au dresseur.

---

### Barême

| Règles de gestion                                                                                                             | Points attribués |
|-------------------------------------------------------------------------------------------------------------------------------|------------------|
| Les cartes pokémon sont affichées clairement                                                                                  | 1 point          |
| Mon code est propre                                                                                                           | 2 points         |
| La donnée est persistée (rien ne change au reload de la page)                                                                 | 2 points         |
| La fonctionnalité de piocher une carte fonctionne correctement                                                                | 1 points         |
| Je peux accéder au détail d'une carte (pop-up ou page dédiée)                                                                 | 2 points         |
| Je peux interagir avec un autre dresseur (commentaire, note etc...)                                                           | 1 point          |
| Je ne peux pas tirer de carte moins de 5 minutes après mon dernier tirage                                                     | 1 point          |
| L'ensemble des notions abordé en cours et en TP a été utilisé pour la réalisation du projet (`dom`, `fetch`, `Promise` etc..) | 2 points         |
| L'expérience utilisateur est fluide (messages d'erreurs, affichage de chargement etc...)                                      | 2 points         |
| Le groupe répond correctement à chaque question posée par le jury                                                             | 2 points         |
| __Sous-Total__                                                                                                                | __16 points__    |
| Bonus : Implémentation d'une notion (utile et conséquente) non abordée en cours                                               | 2 points         |
| Bonus : Ajout d'une autre règle métier                                                                                        | 2 points         |
| __Total__                                                                                                                     | __20 points__    |

### Contraintes et Règles

+ Par groupe de 2 à 3
+ Rendu avant la veille de la soutenance sous forme de repo github (mail à martin.kelig+esgi@gmail.com)
+ Tout travail non rendu ou rendu en retard se verra attribuer la note de zéro.
+ Si une personne du groupe ne fourni aucun travail, le groupe se verra attribué la note de zéro. (Pour éviter cela, me prévenir par mail)
+ Chaque membre du groupe doit pouvoir présenter le projet et le code (et répondre aux questions associées)
