export default defineEventHandler((event) => {
    const { id } = getQuery(event);

    const rooms = [
        {
            id: 1,
            img: '/img/rooms/1.png',
            gallery: {
                path: '/img/rooms/1',
                nb: 4,
            },
            title: 'Supérieure vue ville',
            desc: "D'une superficie moyenne de 28m2, ces chambres ont une vue sur la ville et les jardins.",
            longDesc:
                'Séjourner au Beau-Rivage Palace, c’est s’imprégner de son histoire, tout en se laissant surprendre par un sens innovant de l’accueil, anticipant les moindres besoins. Chacune des 168 chambres est une déclinaison du talent de Pierre-Yves Rochon à qui l’on doit une décoration moderne et élégante, dans des tons pastel enveloppants.',
            details: {
                size: 'Superficie moyenne des chambres supérieures vue ville : 28m2',
                wifi: true,
                package: [
                    "Large choix d'oreillers sur demande",
                    "Produits d'accueil Guerlain",
                    'Nombreuses possibilités de chambres communicantes',
                ],
            },
        },
        {
            id: 2,
            img: '/img/rooms/2.png',
            gallery: {
                path: '/img/rooms/1',
                nb: 4,
            },
            title: 'Supérieure vue lac & alpes',
            desc: "D'une superficie moyenne de 32m2, ces chambres ont la vue sur le lac ou le port d'Ouchy.",
            longDesc:
                'Séjourner au Beau-Rivage Palace, c’est s’imprégner de son histoire, tout en se laissant surprendre par un sens innovant de l’accueil, anticipant les moindres besoins. Chacune des 168 chambres est une déclinaison du talent de Pierre-Yves Rochon à qui l’on doit une décoration moderne et élégante, dans des tons pastel enveloppants.',
            details: {
                size: 'Superficie moyenne des chambres supérieures vue ville : 28m2',
                wifi: true,
                package: [
                    "Large choix d'oreillers sur demande",
                    "Produits d'accueil Guerlain",
                    'Nombreuses possibilités de chambres communicantes',
                ],
            },
        },
        {
            id: 3,
            img: '/img/rooms/3.png',
            gallery: {
                path: '/img/rooms/1',
                nb: 4,
            },
            title: 'Deluxe',
            desc: "D'une superficie moyenne de 45m2, ces chambres bénéficient d'un coin salon et ont la vue sur le lac ou sur les jardins.",
            longDesc:
                'Séjourner au Beau-Rivage Palace, c’est s’imprégner de son histoire, tout en se laissant surprendre par un sens innovant de l’accueil, anticipant les moindres besoins. Chacune des 168 chambres est une déclinaison du talent de Pierre-Yves Rochon à qui l’on doit une décoration moderne et élégante, dans des tons pastel enveloppants.',
            details: {
                size: 'Superficie moyenne des chambres supérieures vue ville : 28m2',
                wifi: true,
                package: [
                    "Large choix d'oreillers sur demande",
                    "Produits d'accueil Guerlain",
                    'Nombreuses possibilités de chambres communicantes',
                ],
            },
        },
        {
            id: 4,
            img: '/img/rooms/4.png',
            gallery: {
                path: '/img/rooms/1',
                nb: 4,
            },
            title: 'Deluxe Riviera',
            desc: "D'une superficie moyenne de 50m2, ces chambres élégantes bénéficient d'un coin salon et ont la vue sur le lac.",
            longDesc:
                'Séjourner au Beau-Rivage Palace, c’est s’imprégner de son histoire, tout en se laissant surprendre par un sens innovant de l’accueil, anticipant les moindres besoins. Chacune des 168 chambres est une déclinaison du talent de Pierre-Yves Rochon à qui l’on doit une décoration moderne et élégante, dans des tons pastel enveloppants.',
            details: {
                size: 'Superficie moyenne des chambres supérieures vue ville : 28m2',
                wifi: true,
                package: [
                    "Large choix d'oreillers sur demande",
                    "Produits d'accueil Guerlain",
                    'Nombreuses possibilités de chambres communicantes',
                ],
            },
        },
        {
            id: 5,
            img: '/img/rooms/5.png',
            gallery: {
                path: '/img/rooms/1',
                nb: 4,
            },
            title: 'Junior Suite Palace',
            desc: "D'une superficie de 65 à 75m2, ces chambres offrent une vue imprenable sur le lac et ont un grand coin salon séparé. Les salles de bains sont très spacieuses.",
            longDesc:
                'Séjourner au Beau-Rivage Palace, c’est s’imprégner de son histoire, tout en se laissant surprendre par un sens innovant de l’accueil, anticipant les moindres besoins. Chacune des 168 chambres est une déclinaison du talent de Pierre-Yves Rochon à qui l’on doit une décoration moderne et élégante, dans des tons pastel enveloppants.',
            details: {
                size: 'Superficie moyenne des chambres supérieures vue ville : 28m2',
                wifi: true,
                package: [
                    "Large choix d'oreillers sur demande",
                    "Produits d'accueil Guerlain",
                    'Nombreuses possibilités de chambres communicantes',
                ],
            },
        },
        {
            id: 6,
            img: '/img/rooms/6.png',
            gallery: {
                path: '/img/rooms/1',
                nb: 4,
            },
            title: 'Junior Suite Beau-rivage',
            desc: "D'une superficie de 65 à 70m2, ces Junior Suites offrent une vue imprenable sur le lac et bénéficient d'un grand coin salon séparé. Les salles de bains sont très spacieuses.",
            longDesc:
                'Séjourner au Beau-Rivage Palace, c’est s’imprégner de son histoire, tout en se laissant surprendre par un sens innovant de l’accueil, anticipant les moindres besoins. Chacune des 168 chambres est une déclinaison du talent de Pierre-Yves Rochon à qui l’on doit une décoration moderne et élégante, dans des tons pastel enveloppants.',
            details: {
                size: 'Superficie moyenne des chambres supérieures vue ville : 28m2',
                wifi: true,
                package: [
                    "Large choix d'oreillers sur demande",
                    "Produits d'accueil Guerlain",
                    'Nombreuses possibilités de chambres communicantes',
                ],
            },
        },
        {
            id: 7,
            img: '/img/rooms/7.png',
            gallery: {
                path: '/img/rooms/1',
                nb: 4,
            },
            title: 'Junior Suite Léman',
            desc: "Les Junior Suites 'Léman' offrent deux espaces distincts, la chambre et le salon étant séparés. Ces chambres sont très spacieuses et ont un balcon avec vue sur le lac.",
            longDesc:
                'Séjourner au Beau-Rivage Palace, c’est s’imprégner de son histoire, tout en se laissant surprendre par un sens innovant de l’accueil, anticipant les moindres besoins. Chacune des 168 chambres est une déclinaison du talent de Pierre-Yves Rochon à qui l’on doit une décoration moderne et élégante, dans des tons pastel enveloppants.',
            details: {
                size: 'Superficie moyenne des chambres supérieures vue ville : 28m2',
                wifi: true,
                package: [
                    "Large choix d'oreillers sur demande",
                    "Produits d'accueil Guerlain",
                    'Nombreuses possibilités de chambres communicantes',
                ],
            },
        },
    ];

    const shortRooms = rooms.map(({ id, img, title, desc }) => ({
        id,
        img,
        title,
        desc,
    }));

    return id ? rooms.find((room) => room.id === +id) : shortRooms;
});
