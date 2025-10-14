const destinationsDB = [
    {
        id: 1,
        title: "Bali, Indonésie",
        category: "beach",
        price: 1850000, // billet + hôtel 4* + 10 jours
        duration: 10,
        season: "summer",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Découvrez l’île des dieux entre rizières, plages paradisiaques et temples mystiques.",
        details: {
            included: ["Vol aller-retour Abidjan–Denpasar", "Hôtel 4*", "Petit-déjeuner", "Transfert aéroport"],
            highlights: ["Rizières de Tegallalang", "Temples sacrés", "Cérémonies balinaises", "Spa traditionnel"],
            itinerary: ["Jour 1-3: Ubud et ses rizières", "Jour 4-7: Plages de Seminyak", "Jour 8-10: Culture et détente"]
        }
    },
    {
        id: 2,
        title: "Paris, France",
        category: "city", 
        price: 980000, // séjour 5 jours à Paris
        duration: 5,
        season: "all",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Découvrez la ville lumière, ses monuments, sa gastronomie et son art de vivre unique.",
        details: {
            included: ["Vol aller-retour Abidjan–Paris", "Hôtel 3* centre-ville", "Visite guidée", "Pass transport"],
            highlights: ["Tour Eiffel", "Musée du Louvre", "Croisière sur la Seine", "Shopping sur les Champs-Élysées"],
            itinerary: ["Jour 1: Arrivée et Montmartre", "Jour 2: Monuments et musées", "Jour 3: Culture et gastronomie", "Jour 4: Versailles", "Jour 5: Détente"]
        }
    },
    {
        id: 3,
        title: "Alpes Suisses",
        category: "mountain",
        price: 1350000,
        duration: 8,
        season: "winter",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1464822759849-e41f42b317d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Un séjour d’hiver inoubliable dans les montagnes suisses : ski, nature et détente.",
        details: {
            included: ["Vol aller-retour", "Chalet 4*", "Forfait ski", "Guide montagne"],
            highlights: ["Ski alpin", "Villages traditionnels", "Spécialités fromagères", "Spa alpin"],
            itinerary: ["Jour 1-2: Découverte du village", "Jour 3-6: Ski et excursions", "Jour 7-8: Détente et gastronomie"]
        }
    },
    {
        id: 4,
        title: "Tokyo, Japon",
        category: "city",
        price: 2100000,
        duration: 12,
        season: "spring",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1540959733332-0b10d1c16f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Un voyage fascinant au cœur du Japon entre traditions ancestrales et modernité futuriste.",
        details: {
            included: ["Vol Abidjan–Tokyo", "Hôtel 4*", "Pass transport", "Guide francophone"],
            highlights: ["Temples de Kyoto", "Quartiers high-tech", "Cuisine japonaise", "Culture pop"],
            itinerary: ["Jour 1-4: Tokyo", "Jour 5-7: Kyoto", "Jour 8-12: Régions alentours"]
        }
    },
    {
        id: 5,
        title: "Santorini, Grèce",
        category: "beach",
        price: 1150000,
        duration: 7,
        season: "summer",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Profitez d’un séjour de rêve entre mer bleue, maisons blanches et couchers de soleil légendaires.",
        details: {
            included: ["Vol aller-retour", "Hôtel vue mer", "Location voiture", "Croisière incluse"],
            highlights: ["Villages blancs", "Couchers de soleil", "Vins locaux", "Plages volcaniques"],
            itinerary: ["Jour 1-2: Fira", "Jour 3-4: Oia", "Jour 5-7: Plages et détente"]
        }
    },
    {
        id: 6,
        title: "New York, USA",
        category: "city",
        price: 1550000,
        duration: 8,
        season: "all",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Découvrez la ville qui ne dort jamais : culture, shopping et gratte-ciel mythiques.",
        details: {
            included: ["Vol aller-retour", "Hôtel 3* Manhattan", "Pass attractions", "Transports illimités"],
            highlights: ["Times Square", "Central Park", "Statue de la Liberté", "Broadway"],
            itinerary: ["Jour 1-2: Manhattan", "Jour 3-4: Brooklyn", "Jour 5-8: Culture et détente"]
        }
    },
    {
        id: 7,
        title: "Montagne des Pyrénées",
        category: "mountain",
        price: 890000,
        duration: 6,
        season: "summer",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Un séjour nature au cœur des Pyrénées, parfait pour les amateurs de randonnée.",
        details: {
            included: ["Hébergement en refuge", "Guide de montagne", "Repas inclus", "Équipement de marche"],
            highlights: ["Lacs glaciaires", "Vallées verdoyantes", "Faune sauvage", "Villages pittoresques"],
            itinerary: ["Jour 1-2: Vallées", "Jour 3-4: Haute montagne", "Jour 5-6: Lacs et panoramas"]
        }
    },
    {
        id: 8,
        title: "Bora Bora, Polynésie",
        category: "beach",
        price: 2950000,
        duration: 10,
        season: "winter",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Le paradis sur Terre : lagons turquoise, bungalows sur pilotis et paysages de rêve.",
        details: {
            included: ["Vol aller-retour", "Bungalow sur pilotis", "Pension complète", "Activités nautiques"],
            highlights: ["Lagon turquoise", "Plongée", "Spa polynésien", "Culture locale"],
            itinerary: ["Jour 1-3: Détente", "Jour 4-7: Activités nautiques", "Jour 8-10: Découvertes culturelles"]
        }
    },
    {
        id: 9,
        title: "Rome, Italie",
        category: "city",
        price: 850000,
        duration: 5,
        season: "spring",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Plongez dans l’histoire romaine : le Colisée, le Vatican et la dolce vita italienne.",
        details: {
            included: ["Vol aller-retour", "Hôtel 3* centre historique", "Visites guidées", "Petit-déjeuner"],
            highlights: ["Colisée", "Vatican", "Fontaine de Trevi", "Cuisine italienne"],
            itinerary: ["Jour 1: Rome antique", "Jour 2: Vatican", "Jour 3: Découvertes", "Jour 4: Gastronomie", "Jour 5: Shopping"]
        }
    },
    {
        id: 10,
        title: "Alpes Autrichiennes",
        category: "mountain",
        price: 970000,
        duration: 7,
        season: "winter",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Un séjour sportif et chaleureux dans les majestueuses Alpes d’Autriche.",
        details: {
            included: ["Vol aller-retour", "Chalet typique", "Forfait ski", "Soins bien-être"],
            highlights: ["Pistes de ski", "Gastronomie montagnarde", "Marchés de Noël", "Spa alpin"],
            itinerary: ["Jour 1-2: Découverte", "Jour 3-5: Ski et traditions", "Jour 6-7: Détente"]
        }
    },
    {
        id: 11,
        title: "Maldives",
        category: "beach",
        price: 2600000,
        duration: 12,
        season: "winter",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Vivez le luxe et la tranquillité dans un cadre paradisiaque entouré d’eaux turquoise.",
        details: {
            included: ["Vol aller-retour", "Villa sur pilotis", "Pension complète", "Excursion snorkeling"],
            highlights: ["Plongée", "Spa sur mer", "Coucher de soleil", "Cuisine tropicale"],
            itinerary: ["Jour 1-4: Détente", "Jour 5-8: Activités nautiques", "Jour 9-12: Découverte des îles"]
        }
    },
    {
        id: 12,
        title: "Londres, Angleterre",
        category: "city",
        price: 920000,
        duration: 6,
        season: "all",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Découvrez Londres entre histoire royale, musées et ambiance cosmopolite.",
        details: {
            included: ["Vol aller-retour", "Hôtel 3* centre-ville", "Pass métro", "Visites incluses"],
            highlights: ["Buckingham Palace", "British Museum", "Big Ben", "Shopping à Oxford Street"],
            itinerary: ["Jour 1-2: Monuments royaux", "Jour 3-4: Musées et culture", "Jour 5-6: Quartiers animés"]
        }
    }
];
