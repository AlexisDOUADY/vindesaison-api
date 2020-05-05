'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const uuid = require('short-uuid');


module.exports = {
  up: (queryInterface) => {

    let wines =
    [
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Coffret Baron De Rothschild - 2016',
            description: 'Caisse Bois Découverte La Baronnie, Baron Philippe de Rothschild:\n' +
                '1 Bouteille de 75cl Baron Carl AOP Saint Emilion\n' +
                '1 Bouteille de 75cl Baron Henri AOP Médoc\n' +
                '1 Bouteille de 75cl Baron Nathaniel AOP Pauillac',
            price: 69.90,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Côte De Beaune-Village - Bastion de l\'Oratoire - Chanson - 2014',
            description: 'Encore un Flacon Estampillé Chanson, les villages de Beaune sont à l\'honneur. Le fruit est très pur, mûrs et noble. D\'un équilibre insolent d\'une Structure parfaite et une longueur interminable... Beaune sera toujours Beaune !!',
            price: 28.00,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Château De Garros - Bordeaux Supérieur - 2016',
            description: 'Petit Domaine prés de Langon, ici on ne cultive que du Merlot et on le fait bien... C\'est généreux et complexe, belle concentration de nuits murs. Un jolie vin, Un Barbecue et des potes.. la vie !',
            price: 7.90,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Morgon - Cru Du Beaujolais - A.Vonnier- 2018',
            description: 'Le Beaujolais n\'est qu\'Amour. C\'est Suave, Gourmand et équilibré. Les Fruits Noirs donnent la réplique aux épices... merveilleux duo!. Un Régal de bout en bout!',
            price: 8.60,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'La Fiole Du Pape - Brotte - Chateauneuf-Du-Pape',
            description: 'Peut-être le vin le plus unique qui soit. Ici on fait rien comme les autres, on assemble les vins de réserve comme on sculpte un David. C\'est Complexe, riche et toujours a maturité. Quand la fougue de la jeunesse rencontre la sagesse des années... Intense et aromatique.',
            price: 30.90,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Chateau Camarsan - AOC Bordeaux - 2018',
            description: 'Petit Bordeaux, mais quelle bonne surprise! C\'est fruité, généreux et souple. Pas du genre à te laisser le palais rugueux, une légère finale de réglisse te rappelera les bâtons de ton enfance. A Boire entre copain!',
            price: 5.90,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Domaine Des Chambris - Hautes Côtes De Nuits - 2018',
            description: 'Le terroir s\'exprime totalement dans ce vin. Ca pinote et la finesse aromatique tient ses promesses. Gourmand et équilibré, un Bourgogne tout en élégance sans exploser le budget. Sur le Poulet Rôti du Dimanche, c\'est top!',
            price: 16.80,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Chateau Roubine - Lion et Dragon - Cru Classé - Côtes de Provence - 2016',
            description: 'Trés jolie Cuvée des plus vieilles parcelles du Domaine. Bien Charnu et typé, le fruit et des épices comme on les aime. Une bonne Daube et on est bien.',
            price: 21.90,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Chateau Roubine - Cru Classé - Côtes de Provence - 2018',
            description: 'Beau Domaine. Un vin digne de son terroir et d\'une Dracénie Majestueuse. C\'est Subtil et fin tel une caresse. La gourmandise et la fraicheur terminent ce joli voyage. Incontournable.',
            price: 16.60,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Agneau Rouge - AOC Bordeaux - Rothschild - 2018',
            description: 'Bon, La maison Rothschild, on connait! Ce vin ne déroge pas à la règle, ils savent faire du vin... Riche, élégant et équilibré. Un beau bordeaux sur le fruit et Franc... Il te reste à acheter un bon magret et c\'est "Papilles en Vadrouille"',
            price: 11.90,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Pouilly-Fuissé - Chanson - 2015',
            description: 'Quel Bonheur, c\'est la quintessence du Chardonnay. Il est subtil, sérieux et frais. D\'une noblesse à se courber et d\'une qualité aromatique à se damner... Attention très Grand Moment..."',
            price: 30.00,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Uby n°4 - Côtes De Gascogne - 2018',
            description: 'Le champion toute catégorie du kif, avec ses arômes de fruits exotiques, une onctuosité à faire fondre les plus ronchons... il a tout pour plaire quand vient l\'apéro, un foie gras, ou le dessert... Le Plaisir n\'attend pas!',
            price: 11.10,
            image: 'd33ac784-c094-43a8-8c75-cc93ae478ff9.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
    ];

    return queryInterface.bulkInsert('wines', wines)
  },

  down: () => {
    return SequelizeUtils.truncateTable('wines');
  }
};
