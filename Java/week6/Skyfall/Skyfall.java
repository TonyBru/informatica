public class Skyfall {
    private String[] cities;

    public Skyfall() {
        cities = new String[] {
            "Aalst",
            "Aarschot",
            "Alken",
            "Anderlues",
            "Anhèe",
            "Assesse",
            "Baarle-Hertog",
            "Beerse",
            "Begijnendijk",
            "Bekkevoort",
            "Beringen",
            "Berlaar",
            "Bierbeek",
            "Blègny",
            "Bocholt",
            "Borgloon",
            "Bouillon",
            "Boussu",
            "Boutersem",
            "Brasschaat",
            "Brecht",
            "Brugelette",
            "Brunehaut",
            "Chiévres",
            "Crisnèe",
            "Dessel",
            "Diest",
            "Dinant",
            "Dison",
            "Drogenbos",
            "Duffel",
            "Edegem",
            "Eghezèe",
            "Flèron",
            "Froidchapelle",
            "Geel",
            "Genk",
            "Geraardsbergen",
            "Glabbeek",
            "Grobbendonk",
            "Haacht",
            "Habay",
            "Ham",
            "Hamont-Achel",
            "Harelbeke",
            "Hasselt",
            "Havelange",
            "Heist-op-den-Berg",
            "Herbeumont",
            "Herent",
            "Herentals",
            "Herenthout",
            "Herk-de-Stad",
            "Herselt",
            "Herstal",
            "Hoegaarden",
            "Hoei",
            "Hoeilaart",
            "Holsbeek",
            "Hoogstraten",
            "Hotton",
            "Houhalen-Helchteren",
            "Hove",
            "Huldenberg",
            "Ingelmunster",
            "Kalmthout",
            "Kampenhout",
            "Kapellen",
            "Kasterlee",
            "Kinrooi",
            "Kortenberg",
            "La Bruyére",
            "Landen",
            "La Roche-en-Ardenne",
            "Lèglise",
            "Leuven",
            "Leuze-en-Hainaut",
            "Lier",
            "Lint",
            "Linter",
            "Lommel",
            "Maarkedal",
            "Maaseik",
            "Maasmechelen",
            "Malmedy",
            "Mechelen",
            "Meerhout",
            "Meeuwen-Gruitrode",
            "Merelbeke",
            "Mol",
            "Neuprè",
            "Nijlen",
            "Nijvel",
            "Ninove",
            "Olen",
            "Opglabbeek",
            "Oudergem",
            "Oud-Heverlee",
            "Overijse",
            "Pecq",
            "Perwez",
            "Profondeville",
            "Ravels",
            "Rebecq",
            "Retie",
            "Scherpenheuvel-Zichem",
            "Sint-Amands",
            "Sint-Katelijne-Waver",
            "Sint-Pieters-Woluwe",
            "Tellin",
            "Tervuren",
            "Tessenderlo",
            "Thimister-Clermont",
            "Tielt-Winge",
            "Tienen",
            "Tinlot",
            "Trois-Ponts",
            "Turnhout",
            "Verviers",
            "Veurne",
            "Vilvoorde",
            "Viroinval",
            "Vorselaar",
            "Vosselaar",
            "Walhain",
            "Wanze",
            "Weismes",
            "Wellen",
            "Wervik",
            "Westerlo",
            "Wichelen",
            "Wijnegem",
            "Wuustwezel",
            "Zandhoven",
            "Zaventem",
            "Zoersel",
            "Zonhoven",
            "Zoutleeuw"
        };
    }

    public String skyfall() {
        for(String city:cities){
            if(city.length() == 10 && city.contains("h") && city.contains("a") && city.contains("m")){
                return city;
            }
        }
        return null;
    }

}
