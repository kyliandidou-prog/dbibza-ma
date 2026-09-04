const SUPABASE_URL =
    "https://ktcqaleykifuhvgjoalm.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_349R1Ttgnky7RYrel3HKpQ_z6ZOLWCL";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


/* =========================
   ZONES
========================= */

const zones = {

    "Tunis": [
        "Centre Ville",
        "Médina",
        "Bab Bhar",
        "Bab Souika",
        "El Omrane",
        "El Menzah",
        "Cité El Khadra",
        "Le Bardo",
        "La Goulette",
        "Le Kram",
        "Carthage",
        "La Marsa",
        "Séjoumi",
        "Ezzouhour",
        "El Ouardia",
        "El Kabaria",
        "Jebel Jelloud",
        "Sidi Hassine"
    ],

    "Ariana": [
        "Ariana Centre",
        "Ariana Medina",
        "Ariana Supérieur",
        "Riadh Ennasr",
        "Riadh Andalous",
        "Cité El Ghazala",
        "El Menzah",
        "Ennasr I",
        "Ennasr II",
        "La Petite Ariana",
        "La Soukra",
        "Chotrana",
        "Borj Louzir",
        "Dar Fadhal",
        "Raoued",
        "Borj Touil",
        "Sidi Thabet",
        "Kalaat El Andalous",
        "Ettadhamen",
        "El Mnihla"
    ],

    "Ben Arous": [
        "Ben Arous",
        "El Mourouj",
        "Hammam Lif",
        "Hammam Chott",
        "Bou Mhel",
        "Ezzahra",
        "Radès",
        "Mégrine",
        "Fouchana",
        "Mornag"
    ],

    "Manouba": [
        "Manouba",
        "Denden",
        "Douar Hicher",
        "Oued Ellil",
        "Mornaguia",
        "Borj El Amri",
        "Jedaida",
        "Tebourba"
    ],

    "Nabeul": [
        "Nabeul",
        "Hammamet",
        "Dar Chaabane",
        "Béni Khiar",
        "Korba",
        "Menzel Temime",
        "Kelibia",
        "Grombalia",
        "Béni Khalled",
        "Soliman"
    ],

    "Bizerte": [
        "Bizerte",
        "Menzel Bourguiba",
        "Menzel Jemil",
        "Ras Jebel",
        "Sejnane",
        "Ghar El Melh",
        "Utique",
        "Tinja"
    ],

    "Sousse": [
        "Sousse",
        "Sousse Médina",
        "Sousse Jawhara",
        "Sousse Riadh",
        "Sousse Sidi Abdelhamid",
        "Hammam Sousse",
        "Akouda",
        "Msaken",
        "Enfidha",
        "Hergla"
    ],

    "Monastir": [
        "Monastir",
        "Jemmal",
        "Moknine",
        "Ksar Hellal",
        "Sahline",
        "Téboulba",
        "Bekalta",
        "Menzel Fersi"
    ],

    "Mahdia": [
        "Mahdia",
        "Ksour Essef",
        "El Jem",
        "Chebba",
        "Melloulèche",
        "Sidi Alouane",
        "Bou Merdes"
    ],

    "Sfax": [
        "Sfax",
        "Sfax Ville",
        "Sfax Ouest",
        "Sfax Sud",
        "Sakiet Ezzit",
        "Sakiet Eddaier",
        "El Ain",
        "Agareb",
        "Jebeniana",
        "Mahrès",
        "Kerkennah"
    ],

    "Kairouan": [
        "Kairouan",
        "Kairouan Nord",
        "Kairouan Sud",
        "Chebika",
        "Haffouz",
        "Sbikha",
        "Oueslatia",
        "Nasrallah"
    ],

    "Kasserine": [
        "Kasserine",
        "Kasserine Nord",
        "Kasserine Sud",
        "Sbeitla",
        "Foussana",
        "Feriana",
        "Thala",
        "Majel Bel Abbès"
    ],

    "Sidi Bouzid": [
        "Sidi Bouzid",
        "Sidi Bouzid Est",
        "Sidi Bouzid Ouest",
        "Regueb",
        "Meknassy",
        "Jilma",
        "Bir El Hafey"
    ],

    "Gabès": [
        "Gabès",
        "Gabès Médina",
        "Gabès Ouest",
        "Gabès Sud",
        "Mareth",
        "Matmata",
        "Métouia",
        "El Hamma"
    ],

    "Medenine": [
        "Medenine",
        "Djerba Houmt Souk",
        "Djerba Midoun",
        "Zarzis",
        "Ben Gardane",
        "Beni Khedache"
    ],

    "Tataouine": [
        "Tataouine",
        "Ghomrassen",
        "Remada",
        "Dehiba",
        "Bir Lahmar",
        "Smâr"
    ],

    "Gafsa": [
        "Gafsa",
        "Gafsa Nord",
        "Gafsa Sud",
        "El Ksar",
        "Métlaoui",
        "Redeyef",
        "Moularès"
    ],

    "Tozeur": [
        "Tozeur",
        "Degueche",
        "Nefta",
        "Hazoua",
        "Tamerza"
    ],

    "Kebili": [
        "Kébili",
        "Douz",
        "Souk Lahad",
        "El Faouar",
        "Jemna"
    ]
};


/* =========================
   GOUVERNORATS
========================= */

const governorates =
    Object.keys(zones);


const governorateList =
    document.getElementById(
        "governorates"
    );


if (governorateList) {

    governorates.forEach(gov => {

        const option =
            document.createElement(
                "option"
            );

        option.value = gov;

        governorateList.appendChild(
            option
        );
    });
}


/* =========================
   ZONES RECHERCHE
========================= */

function updateZones() {

    const governorate =
        document
            .getElementById(
                "governorate"
            )
            .value;

    const zoneList =
        document.getElementById(
            "zones"
        );


    zoneList.innerHTML = "";


    if (!zones[governorate]) {
        return;
    }


    zones[governorate].forEach(zone => {

        const option =
            document.createElement(
                "option"
            );

        option.value = zone;

        zoneList.appendChild(
            option
        );
    });
}


/* =========================
   ZONES SIGNALEMENT
========================= */

function updateReportZones() {

    const governorate =
        document
            .getElementById(
                "reportGovernorate"
            )
            .value;

    const zoneList =
        document.getElementById(
            "reportZones"
        );


    zoneList.innerHTML = "";


    if (!zones[governorate]) {
        return;
    }


    zones[governorate].forEach(zone => {

        const option =
            document.createElement(
                "option"
            );

        option.value = zone;

        zoneList.appendChild(
            option
        );
    });
}


/* =========================
   VARIABLES
========================= */

let reports = [];


/* =========================
   SIGNALER
========================= */

async function submitReport(
    isAvailable
) {

    const governorate =
        document
            .getElementById(
                "reportGovernorate"
            )
            .value
            .trim();


    const zone =
        document
            .getElementById(
                "reportZone"
            )
            .value
            .trim();


    const store =
        document
            .getElementById(
                "store"
            )
            .value
            .trim();


    const brand =
        document
            .getElementById(
                "reportBrand"
            )
            .value;


    const price =
        document
            .getElementById(
                "price"
            )
            .value;


    const message =
        document
            .getElementById(
                "reportMessage"
            );


    if (
        !governorate ||
        !zone ||
        !store ||
        !brand
    ) {

        message.textContent =
            "⚠️ Remplis tous les champs obligatoires.";

        return;
    }


    if (!navigator.geolocation) {

        message.textContent =
            "❌ La géolocalisation n'est pas disponible.";

        return;
    }


    message.textContent =
        "📍 Recherche de ta position...";


    navigator.geolocation.getCurrentPosition(

        async (position) => {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            console.log(
                "📍 COORDONNÉES :",
                latitude,
                longitude
            );


            const { error } =
                await supabaseClient
                    .from("reports")
                    .insert({

                        governorate:
                            governorate,

                        zone:
                            zone,

                        store:
                            store,

                        brand:
                            brand,

                        price:
                            price
                                ? Number(price)
                                : null,

                        available:
                            isAvailable,

                        latitude:
                            latitude,

                        longitude:
                            longitude
                    });


            if (error) {

                console.error(
                    "Erreur Supabase :",
                    error
                );

                message.textContent =
                    "❌ " + error.message;

                return;
            }


            message.textContent =
                "✅ Signalement enregistré !";


            document
                .getElementById(
                    "price"
                )
                .value = "";


            await loadReports();
        },


        (error) => {

            console.error(
                "Erreur localisation :",
                error
            );


            message.textContent =
                "❌ Autorise la localisation pour envoyer le signalement.";
        },


        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        }
    );
}


/* =========================
   CHARGER LES SIGNALEMENTS
========================= */

async function loadReports() {

    const { data, error } =
        await supabaseClient
            .from("reports")
            .select("*")
            .order(
                "created_at",
                {
                    ascending: false
                }
            );


    if (error) {

        console.error(
            "Erreur chargement :",
            error
        );

        return;
    }


    reports =
        data || [];


    updateStats();

    displayReports();
}


/* =========================
   STATISTIQUES
========================= */

function updateStats() {

    const available =
        reports.filter(
            report =>
                report.available === true
        ).length;


    const unavailable =
        reports.filter(
            report =>
                report.available === false
        ).length;


    const total =
        document.getElementById(
            "totalReports"
        );


    const availableElement =
        document.getElementById(
            "availableReports"
        );


    const empty =
        document.getElementById(
            "emptyReports"
        );


    if (total) {
        total.textContent =
            reports.length;
    }


    if (availableElement) {
        availableElement.textContent =
            available;
    }


    if (empty) {
        empty.textContent =
            unavailable;
    }
}


/* =========================
   AFFICHER LES RESULTATS
========================= */

function displayReports(
    list = reports
) {

    const results =
        document.getElementById(
            "results"
        );


    if (!results) {
        return;
    }


    results.innerHTML = "";


    if (list.length === 0) {

        results.innerHTML =
            `
            <p class="empty">
                Aucun résultat trouvé.
            </p>
            `;

        return;
    }


    list.forEach(report => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "report";


        const status =
            report.available === true

                ? `
                    <p class="available">
                        🟢 Eau disponible
                    </p>
                  `

                : `
                    <p class="unavailable">
                        🔴 Pas d'eau
                    </p>
                  `;


        const priceText =
            report.price !== null &&
            report.price !== undefined &&
            report.price !== ""

                ? escapeHTML(
                    report.price
                  ) + " DT"

                : "Non indiqué";


        const date =
            report.created_at

                ? new Date(
                    report.created_at
                  ).toLocaleString(
                    "fr-FR"
                  )

                : "Date inconnue";


        card.innerHTML = `

            <h3>
                🏪 ${escapeHTML(
                    report.store
                )}
            </h3>

            <p>
                📍 ${escapeHTML(
                    report.governorate
                )}
                —
                ${escapeHTML(
                    report.zone
                )}
            </p>

            <p>
                💧 ${escapeHTML(
                    report.brand
                )}
            </p>

            <p>
                💰 ${priceText}
            </p>

            ${status}

            <p class="confirmed">
                ⭐ Signalement communautaire
            </p>

            <small>
                🕐 ${escapeHTML(date)}
            </small>
        `;


        results.appendChild(
            card
        );
    });
}


/* =========================
   RECHERCHE
========================= */

function searchReports() {

    const governorate =
        document
            .getElementById(
                "governorate"
            )
            .value
            .trim()
            .toLowerCase();


    const zone =
        document
            .getElementById(
                "zone"
            )
            .value
            .trim()
            .toLowerCase();


    const brand =
        document
            .getElementById(
                "searchBrand"
            )
            .value
            .trim()
            .toLowerCase();


    const filtered =
        reports.filter(report => {

            const reportGovernorate =
                String(
                    report.governorate ||
                    ""
                ).toLowerCase();


            const reportZone =
                String(
                    report.zone ||
                    ""
                ).toLowerCase();


            const reportBrand =
                String(
                    report.brand ||
                    ""
                ).toLowerCase();


            const matchesGovernorate =
                !governorate ||
                reportGovernorate.includes(
                    governorate
                );


            const matchesZone =
                !zone ||
                reportZone.includes(
                    zone
                );


            const matchesBrand =
                !brand ||
                reportBrand.includes(
                    brand
                );


            return (
                matchesGovernorate &&
                matchesZone &&
                matchesBrand
            );
        });


    displayReports(
        filtered
    );


    const results =
        document.getElementById(
            "results"
        );


    if (
        results &&
        results.parentElement
    ) {

        results.parentElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================
   TROUVER AUTOUR DE MOI
========================= */

function findNearby() {

    if (!navigator.geolocation) {

        alert(
            "❌ La géolocalisation n'est pas disponible."
        );

        return;
    }


    navigator.geolocation.getCurrentPosition(

        (position) => {

            const userLatitude =
                position.coords.latitude;

            const userLongitude =
                position.coords.longitude;


            console.log(
                "📍 Ta position :",
                userLatitude,
                userLongitude
            );


            const nearbyReports =
                reports
                    .filter(report => {

                        return (
                            report.latitude !== null &&
                            report.latitude !== undefined &&
                            report.longitude !== null &&
                            report.longitude !== undefined
                        );
                    })
                    .map(report => {

                        const latitude =
                            Number(
                                report.latitude
                            );

                        const longitude =
                            Number(
                                report.longitude
                            );


                        const distance =
                            calculateDistance(
                                userLatitude,
                                userLongitude,
                                latitude,
                                longitude
                            );


                        return {
                            ...report,
                            distance
                        };
                    })
                    .sort(
                        (a, b) =>
                            a.distance -
                            b.distance
                    );


            displayNearbyReports(
                nearbyReports
            );


            const results =
                document.getElementById(
                    "results"
                );


            if (
                results &&
                results.parentElement
            ) {

                results.parentElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        },


        (error) => {

            console.error(
                "Erreur localisation :",
                error
            );


            alert(
                "❌ Impossible de trouver ta position. Autorise la localisation dans Chrome."
            );
        },


        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        }
    );
}


/* =========================
   CALCUL DISTANCE
========================= */

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const earthRadius =
        6371;


    const dLat =
        toRadians(
            lat2 - lat1
        );


    const dLon =
        toRadians(
            lon2 - lon1
        );


    const a =
        Math.sin(
            dLat / 2
        ) *
        Math.sin(
            dLat / 2
        ) +

        Math.cos(
            toRadians(lat1)
        ) *
        Math.cos(
            toRadians(lat2)
        ) *
        Math.sin(
            dLon / 2
        ) *
        Math.sin(
            dLon / 2
        );


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return earthRadius * c;
}


function toRadians(
    degrees
) {

    return (
        degrees *
        Math.PI /
        180
    );
}


/* =========================
   RESULTATS PROCHES
========================= */

function displayNearbyReports(
    list
) {

    const results =
        document.getElementById(
            "results"
        );


    if (!results) {
        return;
    }


    results.innerHTML = "";


    if (list.length === 0) {

        results.innerHTML =
            `
            <p class="empty">
                📍 Aucun signalement avec une position trouvée.
            </p>
            `;

        return;
    }


    list.forEach(report => {

        const card =
            document.createElement(
                "div"
            );


        card.className =
            "report";


        const status =
            report.available === true

                ? `
                    <p class="available">
                        🟢 Eau disponible
                    </p>
                  `

                : `
                    <p class="unavailable">
                        🔴 Pas d'eau
                    </p>
                  `;


        const distance =
            report.distance < 1

                ? Math.round(
                    report.distance * 1000
                  ) + " m"

                : report.distance.toFixed(
                    1
                  ) + " km";


        const priceText =
            report.price !== null &&
            report.price !== undefined &&
            report.price !== ""

                ? escapeHTML(
                    report.price
                  ) + " DT"

                : "Non indiqué";


        card.innerHTML = `

            <h3>
                🏪 ${escapeHTML(
                    report.store
                )}
            </h3>

            <p>
                📍 ${escapeHTML(
                    report.governorate
                )}
                —
                ${escapeHTML(
                    report.zone
                )}
            </p>

            <p>
                💧 ${escapeHTML(
                    report.brand
                )}
            </p>

            <p>
                💰 ${priceText}
            </p>

            <p>
                📏 À environ
                <strong>
                    ${distance}
                </strong>
            </p>

            ${status}

        `;


        results.appendChild(
            card
        );
    });
}


/* =========================
   SCROLL
========================= */

function scrollToReport() {

    const section =
        document.getElementById(
            "reportSection"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   SECURITE HTML
========================= */

function escapeHTML(
    text
) {

    return String(
        text ?? ""
    )

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );
}


/* =========================
   MODE SOMBRE
========================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );
        }
    );
}


/* =========================
   DEMARRAGE
========================= */

loadReports();