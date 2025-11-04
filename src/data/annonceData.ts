export type Annonce = {
	id: string;
	title: string;
	description: string;
	category: 'immobilier' | 'emploi' | 'vente' | 'service' | 'divers';
	price?: number; // en euros
	currency?: string;
	location: string; // ville / adresse simplifiée
	coords?: { lat: number; lon: number } | null;
	images?: string[];
	datePosted: string; // ISO date
	contact?: { name?: string; email?: string; phone?: string };
	tags?: string[];
	status?: 'active' | 'sold' | 'closed';
};

export const annonceData: Annonce[] = [
	{
		id: 'ann-001',
		title: "Appartement T2 centre-ville",
		description:
			"Beau T2 de 48m² situé en plein centre, lumineux, proche transports et commerces. Cuisine équipée, balcon. Disponible immédiatement.",
		category: 'immobilier',
		price: 620,
		currency: 'EUR',
		location: 'Lyon 2ème',
		coords: { lat: 45.7578, lon: 4.8320 },
		images: ['/images/annonces/appart1-1.jpg', '/images/annonces/appart1-2.jpg'],
		datePosted: '2025-10-20',
		contact: { name: 'Sophie Dupont', email: 'sophie@example.com', phone: '+33 6 12 34 56 78' },
		tags: ['centre', 'balcon', 'lumineux'],
		status: 'active',
	},

	{
		id: 'ann-002',
		title: 'Développeur React.js (Freelance) - 3 mois',
		description:
			"Mission freelance pour intégrer une équipe produit : développement de composants React, intégration API et tests. Remote possible 2j/semaine.",
		category: 'emploi',
		price: 400, // taux journalier
		currency: 'EUR',
		location: 'Remote / Paris',
		coords: null,
		images: [],
		datePosted: '2025-10-28',
		contact: { name: 'Agence Digitale', email: 'recrutement@agence.com' },
		tags: ['react', 'typescript', 'freelance'],
		status: 'active',
	},

	{
		id: 'ann-003',
		title: 'Vends vélo électrique - Bon état',
		description:
			"Vélo électrique de ville, 2 ans, autonomie ~50km, batterie changée en 2024. Idéal pour trajets quotidiens. Visible sur rendez-vous.",
		category: 'vente',
		price: 450,
		currency: 'EUR',
		location: 'Grenoble',
		coords: { lat: 45.1885, lon: 5.7245 },
		images: ['/images/annonces/velo1.jpg'],
		datePosted: '2025-09-02',
		contact: { name: 'Marc', phone: '+33 6 98 76 54 32' },
		tags: ['vélo', 'électrique', 'ville'],
		status: 'sold',
	},

	{
		id: 'ann-004',
		title: 'Cours particuliers de guitare',
		description:
			"Professeur diplômé propose cours particuliers (débutant à avancé). Cours à domicile ou en ligne. Tarif dégressif selon forfait.",
		category: 'service',
		price: 30,
		currency: 'EUR',
		location: 'Nantes',
		coords: { lat: 47.2184, lon: -1.5536 },
		images: [],
		datePosted: '2025-11-01',
		contact: { name: 'Paul Martin', email: 'paul.guitare@example.com' },
		tags: ['musique', 'cours', 'guitare'],
		status: 'active',
	},

	{
		id: 'ann-005',
		title: 'Partage de bureaux - Espace coworking',
		description:
			"Postes de travail disponibles dans un espace coworking convivial (internet fibre, salle de réunion, café). Accès 24/7 possible.",
		category: 'immobilier',
		price: 250,
		currency: 'EUR',
		location: 'Marseille',
		coords: { lat: 43.2965, lon: 5.3698 },
		images: ['/images/annonces/cowork1.jpg'],
		datePosted: '2025-10-05',
		contact: { name: 'Cowork Marseille', email: 'contact@cowork-mrs.fr' },
		tags: ['coworking', 'bureaux', 'fibre'],
		status: 'active',
	},

	{
		id: 'ann-006',
		title: 'Cherche échange de service: jardinage contre cours d’anglais',
		description:
			"Je propose des heures de jardinage/entretien en échange de cours d'anglais conversationnel. Basé en région parisienne.",
		category: 'divers',
		location: 'Île-de-France',
		coords: null,
		images: [],
		datePosted: '2025-08-15',
		contact: { name: 'Anne', email: 'anne@example.com' },
		tags: ['échange', 'jardinage', 'anglais'],
		status: 'active',
	},

	{
		id: 'ann-007',
		title: 'Studio meublé proche université',
		description:
			"Studio 20m² meublé, idéal étudiant, charges comprises, proche campus et bus. Disponible à partir de février.",
		category: 'immobilier',
		price: 420,
		currency: 'EUR',
		location: 'Rennes',
		coords: { lat: 48.1173, lon: -1.6778 },
		images: ['/images/annonces/studio1.jpg'],
		datePosted: '2025-10-10',
		contact: { name: 'Le propriétaire', phone: '+33 6 11 22 33 44' },
		tags: ['étudiant', 'meublé', 'campus'],
		status: 'active',
	},
	{
		id: 'ann-008',
		title: 'Développeur Back-End Java',
		description: `Les missions du poste

Le poste en quelques mots :
Nous recherchons un(e) Développeur(euse) Fullstack Java pour rejoindre notre équipe professionnelle dans les Alpes-Maritimes, afin de travailler sur des projets innovants dans le domaine du voyage et de l'aérien. Dans ce poste, vous évoluerez dans un environnement dynamique où vous participerez à la conception et au développement d'architectures microservices en utilisant le framework Spring et/ou Quarkus. Vous interviendrez sur des environnements Cloud Azure de Microsoft.

Responsabilités clés :
* Concevoir, développer et maintenir des applications fullstack en s'appuyant sur une architecture microservices avec Java (Spring).
* Participer aux discussions techniques et contribuer aux choix architecturaux des projets.
* Collaborer étroitement avec les équipes DevOps afin d'assurer une intégration fluide des systèmes.
* Rester en veille sur les évolutions technologiques et s'impliquer activement dans l'amélioration continue des processus de développement.
* Analyser les besoins utilisateurs pour concevoir des solutions logicielles adaptées.
* Réaliser l'analyse de faisabilité technique, proposer des alternatives et les valider avec les équipes concernées.
* Modéliser, concevoir et implémenter des bases de données robustes.
* Effectuer les tests unitaires, d'intégration et de performance pour garantir la qualité des livrables.
* Assurer la maintenance corrective et évolutive des applications existantes.
* Rédiger une documentation technique complète à destination des parties prenantes internes et externes.`,
		category: 'emploi',
		location: 'Alpes-Maritimes',
		coords: null,
		images: [],
		datePosted: '2025-10-25',
		contact: { name: 'Service RH', email: 'recrutement@entreprise.fr' },
		tags: ['java', 'spring', 'backend'],
		status: 'active'
	}
    
];

export default annonceData;
