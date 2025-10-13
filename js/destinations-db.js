const destinationsDB = [
    {
        id: 1,
        title: "Bali, Indonésie",
        category: "beach",
        price: 1200,
        duration: 10,
        season: "summer",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "L'île des dieux vous attend avec ses temples sacrés, ses rizières en terrasses et ses plages de sable fin.",
        details: {
            included: ["Vol aller-retour", "Hôtel 4*", "Petit-déjeuner", "Transfert aéroport"],
            highlights: ["Plages de sable blanc", "Temples sacrés", "Culture balinaise authentique", "Spa traditionnel"],
            itinerary: ["Jour 1-3: Ubud et ses rizières", "Jour 4-7: Plages de Seminyak", "Jour 8-10: Culture locale et détente"]
        }
    },
    {
        id: 2,
        title: "Paris, France",
        category: "city", 
        price: 650,
        duration: 5,
        season: "all",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Découvrez la ville de l'amour avec ses monuments emblématiques, sa gastronomie raffinée et son art de vivre.",
        details: {
            included: ["Vol aller-retour", "Hôtel 3* centre", "Visite guidée", "Métro illimité"],
            highlights: ["Tour Eiffel", "Musée du Louvre", "Croisière sur la Seine", "Gastronomie française"],
            itinerary: ["Jour 1: Arrivée et Montmartre", "Jour 2: Musée et monuments", "Jour 3: Culture et shopping", "Jour 4: Excursion Versailles", "Jour 5: Dernières découvertes"]
        }
    },
    {
        id: 3,
        title: "Alpes Suisses",
        category: "mountain",
        price: 1450,
        duration: 8,
        season: "winter",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1464822759849-e41f42b317d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Paysages montagneux à couper le souffle, villages pittoresques et sports d'hiver exceptionnels.",
        details: {
            included: ["Vol aller-retour", "Chalet 4*", "Forfait ski", "Guide montagne"],
            highlights: ["Ski alpin", "Randonnées glaciaires", "Spécialités fromagères", "Villages traditionnels"],
            itinerary: ["Jour 1-2: Arrivée et acclimatation", "Jour 3-6: Ski et randonnées", "Jour 7-8: Détente et traditions"]
        }
    },
    {
        id: 4,
        title: "Tokyo, Japon",
        category: "city",
        price: 1800,
        duration: 12,
        season: "spring",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1540959733332-0b10d1c16f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Plongez dans l'univers fascinant de Tokyo, où tradition et modernité se rencontrent.",
        details: {
            included: ["Vol aller-retour", "Hôtel 4*", "Pass transport", "Guide francophone"],
            highlights: ["Temples anciens", "Quartiers high-tech", "Gastronomie japonaise", "Culture pop"],
            itinerary: ["Jour 1-4: Découverte de Tokyo", "Jour 5-7: Excursion Kyoto", "Jour 8-12: Régions alentours"]
        }
    },
    {
        id: 5,
        title: "Santorini, Grèce",
        category: "beach",
        price: 950,
        duration: 7,
        season: "summer",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Île paradisiaque aux maisons blanches et couchers de soleil légendaires.",
        details: {
            included: ["Vol aller-retour", "Hôtel avec vue mer", "Location voiture", "Croisière"],
            highlights: ["Couchers de soleil", "Villages blancs", "Plages volcaniques", "Vins locaux"],
            itinerary: ["Jour 1-3: Oia et Fira", "Jour 4-5: Plages et villages", "Jour 6-7: Détente et découvertes"]
        }
    },
    {
        id: 6,
        title: "New York, USA",
        category: "city",
        price: 1100,
        duration: 8,
        season: "all",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "La ville qui ne dort jamais, entre gratte-ciel, culture et divertissement.",
        details: {
            included: ["Vol aller-retour", "Hôtel 3* Manhattan", "Pass attractions", "Transport illimité"],
            highlights: ["Times Square", "Central Park", "Statue de la Liberté", "Broadway"],
            itinerary: ["Jour 1-3: Manhattan", "Jour 4-5: Brooklyn et Queens", "Jour 6-8: Musées et shopping"]
        }
    },
    {
        id: 7,
        title: "Montagne des Pyrénées",
        category: "mountain",
        price: 750,
        duration: 6,
        season: "summer",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Randonnées spectaculaires au cœur des Pyrénées françaises.",
        details: {
            included: ["Hébergement refuge", "Guide montagne", "Matériel randonnée", "Repas compris"],
            highlights: ["Randonnées alpines", "Lacs glaciaires", "Faune sauvage", "Villages typiques"],
            itinerary: ["Jour 1-2: Vallées et forêts", "Jour 3-4: Haute montagne", "Jour 5-6: Lacs et sommets"]
        }
    },
    {
        id: 8,
        title: "Bora Bora, Polynésie",
        category: "beach",
        price: 2500,
        duration: 10,
        season: "winter",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Bungalows sur pilotis et lagons turquoise dans ce paradis polynésien.",
        details: {
            included: ["Vol aller-retour", "Bungalow sur pilotis", "Pension complète", "Activités nautiques"],
            highlights: ["Lagon turquoise", "Plongée sous-marine", "Massages traditionnels", "Culture polynésienne"],
            itinerary: ["Jour 1-4: Détente au resort", "Jour 5-7: Activités nautiques", "Jour 8-10: Découverte culturelle"]
        }
    },
    {
        id: 9,
        title: "Rome, Italie",
        category: "city",
        price: 580,
        duration: 5,
        season: "spring",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Voyage dans le temps au cœur de la Rome antique et de la Renaissance.",
        details: {
            included: ["Vol aller-retour", "Hôtel centre historique", "Visites guidées", "Pass monuments"],
            highlights: ["Colisée", "Vatican", "Fontaine de Trevi", "Gastronomie italienne"],
            itinerary: ["Jour 1: Rome antique", "Jour 2: Vatican", "Jour 3: Renaissance", "Jour 4: Découvertes", "Jour 5: Shopping"]
        }
    },
    {
        id: 10,
        title: "Alpes Autrichiennes",
        category: "mountain",
        price: 890,
        duration: 7,
        season: "winter",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Ski et traditions autrichiennes dans les Alpes majestueuses.",
        details: {
            included: ["Vol aller-retour", "Chalet typique", "Forfait ski", "Soins bien-être"],
            highlights: ["Domaines skiables", "Chalets traditionnels", "Spécialités autrichiennes", "Marchés de Noël"],
            itinerary: ["Jour 1-2: Arrivée et ski", "Jour 3-5: Exploration domaines", "Jour 6-7: Détente et culture"]
        }
    },
    {
        id: 11,
        title: "Maldives",
        category: "beach",
        price: 2200,
        duration: 12,
        season: "winter",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Atolls paradisiaques et fonds marins exceptionnels.",
        details: {
            included: ["Vol aller-retour", "Villa sur pilotis", "Pension complète", "Plongée libre"],
            highlights: ["Atolls coralliens", "Plongée avec masque", "Spa sur mer", "Couchers de soleil"],
            itinerary: ["Jour 1-4: Détente resort", "Jour 5-8: Activités nautiques", "Jour 9-12: Exploration îles"]
        }
    },
    {
        id: 12,
        title: "Londres, Angleterre",
        category: "city",
        price: 720,
        duration: 6,
        season: "all",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Entre tradition royale et modernité, découvrez la capitale britannique.",
        details: {
            included: ["Vol aller-retour", "Hôtel centre-ville", "Pass métro", "Visites incluses"],
            highlights: ["Buckingham Palace", "British Museum", "West End", "Pubs traditionnels"],
            itinerary: ["Jour 1-2: Monuments royaux", "Jour 3-4: Culture et musées", "Jour 5-6: Quartiers typiques"]
        }
    }
];