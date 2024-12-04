//All countries
const all_countries = {
  "AF": {"es": "Afganistán", "en": "Afghanistan"},
  "AX": {"es": "Islas Åland", "en": "Åland Islands"},
  "AL": {"es": "Albania", "en": "Albania"},
  "DZ": {"es": "Argelia", "en": "Algeria"},
  "AS": {"es": "Samoa Americana", "en": "American Samoa"},
  "AD": {"es": "Andorra", "en": "Andorra"},
  "AO": {"es": "Angola", "en": "Angola"},
  "AI": {"es": "Anguila", "en": "Anguilla"},
  "AQ": {"es": "Antártida", "en": "Antarctica"},
  "AG": {"es": "Antigua y Barbuda", "en": "Antigua and Barbuda"},
  "AR": {"es": "Argentina", "en": "Argentina"},
  "AM": {"es": "Armenia", "en": "Armenia"},
  "AW": {"es": "Aruba", "en": "Aruba"},
  "AU": {"es": "Australia", "en": "Australia"},
  "AT": {"es": "Austria", "en": "Austria"},
  "AZ": {"es": "Azerbaiyán", "en": "Azerbaijan"},
  "BS": {"es": "Bahamas", "en": "Bahamas"},
  "BH": {"es": "Baréin", "en": "Bahrain"},
  "BD": {"es": "Bangladés", "en": "Bangladesh"},
  "BB": {"es": "Barbados", "en": "Barbados"},
  "BY": {"es": "Bielorrusia", "en": "Belarus"},
  "BE": {"es": "Bélgica", "en": "Belgium"},
  "BZ": {"es": "Belice", "en": "Belize"},
  "BJ": {"es": "Benín", "en": "Benin"},
  "BM": {"es": "Bermudas", "en": "Bermuda"},
  "BT": {"es": "Bután", "en": "Bhutan"},
  "BO": {"es": "Bolivia", "en": "Bolivia"},
  "BA": {"es": "Bosnia y Herzegovina", "en": "Bosnia and Herzegovina"},
  "BW": {"es": "Botsuana", "en": "Botswana"},
  "BV": {"es": "Isla Bouvet", "en": "Bouvet Island"},
  "BR": {"es": "Brasil", "en": "Brazil"},
  "IO": {"es": "Territorio Británico del Océano Índico", "en": "British Indian Ocean Territory"},
  "BN": {"es": "Brunéi", "en": "Brunei Darussalam"},
  "BG": {"es": "Bulgaria", "en": "Bulgaria"},
  "BF": {"es": "Burkina Faso", "en": "Burkina Faso"},
  "BI": {"es": "Burundi", "en": "Burundi"},
  "KH": {"es": "Camboya", "en": "Cambodia"},
  "CM": {"es": "Camerún", "en": "Cameroon"},
  "CA": {"es": "Canadá", "en": "Canada"},
  "CV": {"es": "Cabo Verde", "en": "Cape Verde"},
  "KY": {"es": "Islas Caimán", "en": "Cayman Islands"},
  "CF": {"es": "República Centroafricana", "en": "Central African Republic"},
  "TD": {"es": "Chad", "en": "Chad"},
  "CL": {"es": "Chile", "en": "Chile"},
  "CN": {"es": "China", "en": "China"},
  "CX": {"es": "Isla de Navidad", "en": "Christmas Island"},
  "CC": {"es": "Islas Cocos", "en": "Cocos (Keeling) Islands"},
  "CO": {"es": "Colombia", "en": "Colombia"},
  "KM": {"es": "Comoras", "en": "Comoros"},
  "CG": {"es": "Congo", "en": "Congo"},
  "CD": {"es": "República Democrática del Congo", "en": "Congo, The Democratic Republic of the"},
  "CK": {"es": "Islas Cook", "en": "Cook Islands"},
  "CR": {"es": "Costa Rica", "en": "Costa Rica"},
  "CI": {"es": "Costa de Marfil", "en": "Côte d'Ivoire"},
  "HR": {"es": "Croacia", "en": "Croatia"},
  "CU": {"es": "Cuba", "en": "Cuba"},
  "CY": {"es": "Chipre", "en": "Cyprus"},
  "CZ": {"es": "República Checa", "en": "Czech Republic"},
  "DK": {"es": "Dinamarca", "en": "Denmark"},
  "DJ": {"es": "Yibuti", "en": "Djibouti"},
  "DM": {"es": "Dominica", "en": "Dominica"},
  "DO": {"es": "República Dominicana", "en": "Dominican Republic"},
  "EC": {"es": "Ecuador", "en": "Ecuador"},
  "EG": {"es": "Egipto", "en": "Egypt"},
  "SV": {"es": "El Salvador", "en": "El Salvador"},
  "GQ": {"es": "Guinea Ecuatorial", "en": "Equatorial Guinea"},
  "ER": {"es": "Eritrea", "en": "Eritrea"},
  "EE": {"es": "Estonia", "en": "Estonia"},
  "ET": {"es": "Etiopía", "en": "Ethiopia"},
  "FK": {"es": "Islas Malvinas", "en": "Falkland Islands (Malvinas)"},
  "FO": {"es": "Islas Feroe", "en": "Faroe Islands"},
  "FJ": {"es": "Fiyi", "en": "Fiji"},
  "FI": {"es": "Finlandia", "en": "Finland"},
  "FR": {"es": "Francia", "en": "France"},
  "GF": {"es": "Guayana Francesa", "en": "French Guiana"},
  "PF": {"es": "Polinesia Francesa", "en": "French Polynesia"},
  "TF": {"es": "Territorios Australes Franceses", "en": "French Southern Territories"},
  "GA": {"es": "Gabón", "en": "Gabon"},
  "GM": {"es": "Gambia", "en": "Gambia"},
  "GE": {"es": "Georgia", "en": "Georgia"},
  "DE": {"es": "Alemania", "en": "Germany"},
  "GH": {"es": "Ghana", "en": "Ghana"},
  "GI": {"es": "Gibraltar", "en": "Gibraltar"},
  "GR": {"es": "Grecia", "en": "Greece"},
  "GL": {"es": "Groenlandia", "en": "Greenland"},
  "GD": {"es": "Granada", "en": "Grenada"},
  "GP": {"es": "Guadalupe", "en": "Guadeloupe"},
  "GU": {"es": "Guam", "en": "Guam"},
  "GT": {"es": "Guatemala", "en": "Guatemala"},
  "GG": {"es": "Guernsey", "en": "Guernsey"},
  "GN": {"es": "Guinea", "en": "Guinea"},
  "GW": {"es": "Guinea-Bisáu", "en": "Guinea-Bissau"},
  "GY": {"es": "Guyana", "en": "Guyana"},
  "HT": {"es": "Haití", "en": "Haiti"},
  "HM": {"es": "Islas Heard y McDonald", "en": "Heard Island and McDonald Islands"},
  "VA": {"es": "Vaticano", "en": "Holy See (Vatican City State)"},
  "HN": {"es": "Honduras", "en": "Honduras"},
  "HK": {"es": "Hong Kong", "en": "Hong Kong"},
  "HU": {"es": "Hungría", "en": "Hungary"},
  "IS": {"es": "Islandia", "en": "Iceland"},
  "IN": {"es": "India", "en": "India"},
  "ID": {"es": "Indonesia", "en": "Indonesia"},
  "IR": {"es": "Irán", "en": "Iran, Islamic Republic of"},
  "IQ": {"es": "Irak", "en": "Iraq"},
  "IE": {"es": "Irlanda", "en": "Ireland"},
  "IL": {"es": "Israel", "en": "Israel"},
  "IT": {"es": "Italia", "en": "Italy"},
  "JM": {"es": "Jamaica", "en": "Jamaica"},
  "JP": {"es": "Japón", "en": "Japan"},
  "JO": {"es": "Jordania", "en": "Jordan"},
  "KZ": {"es": "Kazajistán", "en": "Kazakhstan"},
  "KE": {"es": "Kenia", "en": "Kenya"},
  "KI": {"es": "Kiribati", "en": "Kiribati"},
  "KW": {"es": "Kuwait", "en": "Kuwait"},
  "KG": {"es": "Kirguistán", "en": "Kyrgyzstan"},
  "LA": {"es": "Laos", "en": "Lao People's Democratic Republic"},
  "LV": {"es": "Letonia", "en": "Latvia"},
  "LB": {"es": "Líbano", "en": "Lebanon"},
  "LS": {"es": "Lesoto", "en": "Lesotho"},
  "LR": {"es": "Liberia", "en": "Liberia"},
  "LY": {"es": "Libia", "en": "Libya"},
  "LI": {"es": "Liechtenstein", "en": "Liechtenstein"},
  "LT": {"es": "Lituania", "en": "Lithuania"},
  "LU": {"es": "Luxemburgo", "en": "Luxembourg"},
  "MO": {"es": "Macao", "en": "Macao"},
  "MK": {"es": "Macedonia del Norte", "en": "North Macedonia"},
  "MG": {"es": "Madagascar", "en": "Madagascar"},
  "MW": {"es": "Malawi", "en": "Malawi"},
  "MY": {"es": "Malasia", "en": "Malaysia"},
  "MV": {"es": "Maldivas", "en": "Maldives"},
  "ML": {"es": "Malí", "en": "Mali"},
  "MT": {"es": "Malta", "en": "Malta"},
  "MH": {"es": "Islas Marshall", "en": "Marshall Islands"},
  "MQ": {"es": "Martinica", "en": "Martinique"},
  "MR": {"es": "Mauritania", "en": "Mauritania"},
  "MU": {"es": "Mauricio", "en": "Mauritius"},
  "YT": {"es": "Mayotte", "en": "Mayotte"},
  "MX": {"es": "México", "en": "Mexico"},
  "FM": {"es": "Micronesia", "en": "Micronesia (Federated States of)"},
  "MD": {"es": "Moldavia", "en": "Moldova"},
  "MC": {"es": "Mónaco", "en": "Monaco"},
  "MN": {"es": "Mongolia", "en": "Mongolia"},
  "ME": {"es": "Montenegro", "en": "Montenegro"},
  "MA": {"es": "Marruecos", "en": "Morocco"},
  "MZ": {"es": "Mozambique", "en": "Mozambique"},
  "MM": {"es": "Birmania", "en": "Myanmar"},
  "NA": {"es": "Namibia", "en": "Namibia"},
  "NR": {"es": "Nauru", "en": "Nauru"},
  "NP": {"es": "Nepal", "en": "Nepal"},
  "NL": {"es": "Países Bajos", "en": "Netherlands"},
  "NC": {"es": "Nueva Caledonia", "en": "New Caledonia"},
  "NZ": {"es": "Nueva Zelanda", "en": "New Zealand"},
  "NI": {"es": "Nicaragua", "en": "Nicaragua"},
  "NE": {"es": "Níger", "en": "Niger"},
  "NG": {"es": "Nigeria", "en": "Nigeria"},
  "NU": {"es": "Niue", "en": "Niue"},
  "NF": {"es": "Isla Norfolk", "en": "Norfolk Island"},
  "KP": {"es": "Corea del Norte", "en": "North Korea"},
  "MP": {"es": "Islas Marianas del Norte", "en": "Northern Mariana Islands"},
  "NO": {"es": "Noruega", "en": "Norway"},
  "OM": {"es": "Omán", "en": "Oman"},
  "PK": {"es": "Pakistán", "en": "Pakistan"},
  "PW": {"es": "Palaos", "en": "Palau"},
  "PA": {"es": "Panamá", "en": "Panama"},
  "PG": {"es": "Papúa Nueva Guinea", "en": "Papua New Guinea"},
  "PY": {"es": "Paraguay", "en": "Paraguay"},
  "PE": {"es": "Perú", "en": "Peru"},
  "PH": {"es": "Filipinas", "en": "Philippines"},
  "PN": {"es": "Islas Pitcairn", "en": "Pitcairn Islands"},
  "PL": {"es": "Polonia", "en": "Poland"},
  "PT": {"es": "Portugal", "en": "Portugal"},
  "PR": {"es": "Puerto Rico", "en": "Puerto Rico"},
  "QA": {"es": "Catar", "en": "Qatar"},
  "RE": {"es": "Reunión", "en": "Réunion"},
  "RO": {"es": "Rumanía", "en": "Romania"},
  "RU": {"es": "Rusia", "en": "Russia"},
  "RW": {"es": "Ruanda", "en": "Rwanda"},
  "BL": {"es": "San Bartolomé", "en": "Saint Barthélemy"},
  "SH": {"es": "Santa Elena", "en": "Saint Helena, Ascension and Tristan da Cunha"},
  "KN": {"es": "San Cristóbal y Nieves", "en": "Saint Kitts and Nevis"},
  "LC": {"es": "Santa Lucía", "en": "Saint Lucia"},
  "MF": {"es": "San Martín", "en": "Saint Martin"},
  "PM": {"es": "San Pedro y Miquelón", "en": "Saint Pierre and Miquelon"},
  "VC": {"es": "San Vicente y las Granadinas", "en": "Saint Vincent and the Grenadines"},
  "WS": {"es": "Samoa", "en": "Samoa"},
  "SM": {"es": "San Marino", "en": "San Marino"},
  "ST": {"es": "Santo Tomé y Príncipe", "en": "Sao Tome and Principe"},
  "SA": {"es": "Arabia Saudita", "en": "Saudi Arabia"},
  "SN": {"es": "Senegal", "en": "Senegal"},
  "RS": {"es": "Serbia", "en": "Serbia"},
  "SC": {"es": "Seychelles", "en": "Seychelles"},
  "SL": {"es": "Sierra Leona", "en": "Sierra Leone"},
  "SG": {"es": "Singapur", "en": "Singapore"},
  "SX": {"es": "Sint Maarten", "en": "Sint Maarten"},
  "SK": {"es": "Eslovaquia", "en": "Slovakia"},
  "SI": {"es": "Eslovenia", "en": "Slovenia"},
  "SB": {"es": "Islas Salomón", "en": "Solomon Islands"},
  "SO": {"es": "Somalia", "en": "Somalia"},
  "ZA": {"es": "Sudáfrica", "en": "South Africa"},
  "GS": {"es": "Islas Georgias del Sur", "en": "South Georgia and the South Sandwich Islands"},
  "SS": {"es": "Sudán del Sur", "en": "South Sudan"},
  "ES": {"es": "España", "en": "Spain"},
  "LK": {"es": "Sri Lanka", "en": "Sri Lanka"},
  "SD": {"es": "Sudán", "en": "Sudan"},
  "SR": {"es": "Surinam", "en": "Suriname"},
  "SJ": {"es": "Svalbard y Jan Mayen", "en": "Svalbard and Jan Mayen"},
  "SZ": {"es": "Suazilandia", "en": "Swaziland"},
  "SE": {"es": "Suecia", "en": "Sweden"},
  "CH": {"es": "Suiza", "en": "Switzerland"},
  "SY": {"es": "Siria", "en": "Syrian Arab Republic"},
  "TW": {"es": "Taiwán", "en": "Taiwan"},
  "TJ": {"es": "Tayikistán", "en": "Tajikistan"},
  "TZ": {"es": "Tanzania", "en": "Tanzania"},
  "TH": {"es": "Tailandia", "en": "Thailand"},
  "TL": {"es": "Timor Oriental", "en": "Timor-Leste"},
  "TG": {"es": "Togo", "en": "Togo"},
  "TK": {"es": "Tokelau", "en": "Tokelau"},
  "TO": {"es": "Tonga", "en": "Tonga"},
  "TT": {"es": "Trinidad y Tobago", "en": "Trinidad and Tobago"},
  "TN": {"es": "Túnez", "en": "Tunisia"},
  "TR": {"es": "Turquía", "en": "Turkey"},
  "TM": {"es": "Turkmenistán", "en": "Turkmenistan"},
  "TC": {"es": "Islas Turcas y Caicos", "en": "Turks and Caicos Islands"},
  "TV": {"es": "Tuvalu", "en": "Tuvalu"},
  "UG": {"es": "Uganda", "en": "Uganda"},
  "UA": {"es": "Ucrania", "en": "Ukraine"},
  "AE": {"es": "Emiratos Árabes Unidos", "en": "United Arab Emirates"},
  "GB": {"es": "Reino Unido", "en": "United Kingdom"},
  "US": {"es": "Estados Unidos", "en": "United States"},
  "UY": {"es": "Uruguay", "en": "Uruguay"},
  "UZ": {"es": "Uzbekistán", "en": "Uzbekistan"},
  "VU": {"es": "Vanuatu", "en": "Vanuatu"},
  "VE": {"es": "Venezuela", "en": "Venezuela"},
  "VN": {"es": "Vietnam", "en": "Vietnam"},
  "WF": {"es": "Wallis y Futuna", "en": "Wallis and Futuna"},
  "EH": {"es": "Sáhara Occidental", "en": "Western Sahara"},
  "YE": {"es": "Yemen", "en": "Yemen"},
  "ZM": {"es": "Zambia", "en": "Zambia"},
  "ZW": {"es": "Zimbabue", "en": "Zimbabwe"}
};
//All country codes
const all_country_codes = Object.keys(all_countries);

//EU countries
const europe_countries = {
  "AT": {"es": "Austria", "en": "Austria", "coordinates": {"lat": 47.5162, "long": 14.5501}},
  "BE": {"es": "Bélgica", "en": "Belgium", "coordinates": {"lat": 50.8503, "long": 4.3517}},
  "BG": {"es": "Bulgaria", "en": "Bulgaria", "coordinates": {"lat": 42.7339, "long": 25.4858}},
  "HR": {"es": "Croacia", "en": "Croatia", "coordinates": {"lat": 45.1, "long": 15.2}},
  "CY": {"es": "Chipre", "en": "Cyprus", "coordinates": {"lat": 35.1265, "long": 33.4299}},
  "CZ": {"es": "República Checa", "en": "Czech Republic", "coordinates": {"lat": 49.8175, "long": 15.473}},
  "DK": {"es": "Dinamarca", "en": "Denmark", "coordinates": {"lat": 56.2639, "long": 9.5018}},
  "EE": {"es": "Estonia", "en": "Estonia", "coordinates": {"lat": 58.5953, "long": 25.0136}},
  "FI": {"es": "Finlandia", "en": "Finland", "coordinates": {"lat": 61.9241, "long": 25.7482}},
  "FR": {"es": "Francia", "en": "France", "coordinates": {"lat": 46.6034, "long": 1.8883}},
  "DE": {"es": "Alemania", "en": "Germany", "coordinates": {"lat": 51.1657, "long": 10.4515}},
  "GR": {"es": "Grecia", "en": "Greece", "coordinates": {"lat": 39.0742, "long": 21.8243}},
  "HU": {"es": "Hungría", "en": "Hungary", "coordinates": {"lat": 47.1625, "long": 19.5033}},
  "IE": {"es": "Irlanda", "en": "Ireland", "coordinates": {"lat": 53.1424, "long": -7.6921}},
  "IT": {"es": "Italia", "en": "Italy", "coordinates": {"lat": 41.8719, "long": 12.5674}},
  "LV": {"es": "Letonia", "en": "Latvia", "coordinates": {"lat": 56.8796, "long": 24.6032}},
  "LT": {"es": "Lituania", "en": "Lithuania", "coordinates": {"lat": 55.1694, "long": 23.8813}},
  "LU": {"es": "Luxemburgo", "en": "Luxembourg", "coordinates": {"lat": 49.6117, "long": 6.13}},
  "MT": {"es": "Malta", "en": "Malta", "coordinates": {"lat": 35.9375, "long": 14.3754}},
  "NL": {"es": "Países Bajos", "en": "Netherlands", "coordinates": {"lat": 52.1326, "long": 5.2913}},
  "PL": {"es": "Polonia", "en": "Poland", "coordinates": {"lat": 51.9194, "long": 19.1451}},
  "PT": {"es": "Portugal", "en": "Portugal", "coordinates": {"lat": 39.3999, "long": -8.2245}},
  "RO": {"es": "Rumanía", "en": "Romania", "coordinates": {"lat": 45.9432, "long": 24.9668}},
  "SK": {"es": "Eslovaquia", "en": "Slovakia", "coordinates": {"lat": 48.669, "long": 19.699}},
  "SI": {"es": "Eslovenia", "en": "Slovenia", "coordinates": {"lat": 46.1511, "long": 14.9955}},
  "ES": {"es": "España", "en": "Spain", "coordinates": {"lat": 40.4637, "long": -3.7492}},
  "SE": {"es": "Suecia", "en": "Sweden", "coordinates": {"lat": 60.1282, "long": 18.6435}},
  "IS": {"es": "Islandia", "en": "Iceland", "coordinates": {"lat": 64.9631, "long": -19.0208}},
  "AL": {"es": "Albania", "en": "Albania", "coordinates": {"lat": 41.1533, "long": 20.1683}},
  "AM": {"es": "Armenia", "en": "Armenia", "coordinates": {"lat": 40.0691, "long": 45.0382}},
  "AZ": {"es": "Azerbaiyán", "en": "Azerbaijan", "coordinates": {"lat": 40.1431, "long": 47.5769}},
  "BY": {"es": "Bielorrusia", "en": "Belarus", "coordinates": {"lat": 53.9, "long": 27.5667}},
  "MD": {"es": "Moldavia", "en": "Moldova", "coordinates": {"lat": 47.4116, "long": 28.3699}},
  "MC": {"es": "Mónaco", "en": "Monaco", "coordinates": {"lat": 43.7333, "long": 7.4167}},
  "RS": {"es": "Serbia", "en": "Serbia", "coordinates": {"lat": 44.0165, "long": 21.0059}},
  "ME": {"es": "Montenegro", "en": "Montenegro", "coordinates": {"lat": 42.7087, "long": 19.3744}},
  "MK": {"es": "Macedonia del Norte", "en": "North Macedonia", "coordinates": {"lat": 41.6086, "long": 21.7453}},
  "GE": {"es": "Georgia", "en": "Georgia", "coordinates": {"lat": 42.3154, "long": 43.3569}},
  "TR": {"es": "Turquía", "en": "Turkey", "coordinates": {"lat": 38.9637, "long": 35.2433}},
  "UA": {"es": "Ucrania", "en": "Ukraine", "coordinates": {"lat": 48.3794, "long": 31.1656}},
  "RU": {"es": "Rusia", "en": "Russia", "coordinates": {"lat": 55.7558, "long": 37.6173}},
};

const europe_codes = Object.keys(europe_countries);

//America countries
const america_countries = {
  "AR": {"es": "Argentina", "en": "Argentina"},
  "BR": {"es": "Brasil", "en": "Brazil"},
  "CA": {"es": "Canadá", "en": "Canada"},
  "CL": {"es": "Chile", "en": "Chile"},
  "CO": {"es": "Colombia", "en": "Colombia"},
  "CR": {"es": "Costa Rica", "en": "Costa Rica"},
  "CU": {"es": "Cuba", "en": "Cuba"},
  "DO": {"es": "República Dominicana", "en": "Dominican Republic"},
  "EC": {"es": "Ecuador", "en": "Ecuador"},
  "SV": {"es": "El Salvador", "en": "El Salvador"},
  "GT": {"es": "Guatemala", "en": "Guatemala"},
  "HN": {"es": "Honduras", "en": "Honduras"},
  "MX": {"es": "México", "en": "Mexico"},
  "NI": {"es": "Nicaragua", "en": "Nicaragua"},
  "PA": {"es": "Panamá", "en": "Panama"},
  "PY": {"es": "Paraguay", "en": "Paraguay"},
  "PE": {"es": "Perú", "en": "Peru"},
  "PR": {"es": "Puerto Rico", "en": "Puerto Rico"},
  "UR": {"es": "Uruguay", "en": "Uruguay"},
  "VE": {"es": "Venezuela", "en": "Venezuela"},
  "US": {"es": "Estados Unidos", "en": "United States"},
  "BZ": {"es": "Belice", "en": "Belize"},
  "GY": {"es": "Guyana", "en": "Guyana"},
  "SR": {"es": "Surinam", "en": "Suriname"},
  "JM": {"es": "Jamaica", "en": "Jamaica"},
  "HT": {"es": "Haití", "en": "Haiti"},
  "BB": {"es": "Barbados", "en": "Barbados"},
  "LC": {"es": "Santa Lucía", "en": "Saint Lucia"},
  "KN": {"es": "San Cristóbal y Nieves", "en": "Saint Kitts and Nevis"},
  "VC": {"es": "San Vicente y las Granadinas", "en": "Saint Vincent and the Grenadines"},
  "TT": {"es": "Trinidad y Tobago", "en": "Trinidad and Tobago"},
  "GL": {"es": "Groenlandia", "en": "Greenland"},
  "FK": {"es": "Islas Malvinas", "en": "Falkland Islands"},
  "MQ": {"es": "Martinica", "en": "Martinique"},
  "GP": {"es": "Guadalupe", "en": "Guadeloupe"},
  "BO": {"es": "Bolivia", "en": "Bolivia"},
  "BL": {"es": "San Bartolomé", "en": "Saint Barthélemy"},
  "GF": {"es": "Guayana Francesa", "en": "French Guiana"},
  "PF": {"es": "Polinesia Francesa", "en": "French Polynesia"},
  "PM": {"es": "San Pedro y Miquelón", "en": "Saint Pierre and Miquelon"},
  "AS": {"es": "Samoa Americana", "en": "American Samoa"},
  "AW": {"es": "Aruba", "en": "Aruba"},
  "AI": {"es": "Anguila", "en": "Anguilla"},
  "KY": {"es": "Islas Caimán", "en": "Cayman Islands"},
  "TC": {"es": "Islas Turcas y Caicos", "en": "Turks and Caicos Islands"},
  "FM": {"es": "Micronesia", "en": "Micronesia"},
  "GU": {"es": "Guam", "en": "Guam"},
  "VI": {"es": "Islas Vírgenes de los EE. UU.", "en": "U.S. Virgin Islands"},
  "BS": {"es": "Bahamas", "en": "Bahamas"},
  "BL": {"es": "San Bartolomé", "en": "Saint Barthelemy"},
};

const america_codes = Object.keys(america_countries);


const askingFor = getRandomElement(europe_codes);



//Learning mode
const countryName = document.getElementById("country_name");
let lastMarker;

// Espera a que la página cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {




  const map = L.map('map').setView([51.505, -0.09], 2);  // Centro del mapa y nivel de zoom

  let lastCountry;



      // Inicializa el mapa y centra la vista
  fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
  .then(response => response.json())
  .then(data => {
    // Mapa base

    // Capa base de OpenStreetMap
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
      detectRetina: true
    }).addTo(map);

    // Función para resaltar el país específico
    function highlightFeature(e) {

      

      if(lastCountry!=e.target){
        geojson.resetStyle(e.target);
        lastCountry=e.target;
      }



      // Cambiar estilo del país resaltado
      e.target.setStyle({
        weight: 3,
        color: 'green',  // Color de la frontera
        dashArray: '',
        fillOpacity: 0.3  // Opacidad del relleno
      });
    }



    // Función para aplicar eventos de interacción (hover, click, etc.)
    function onEachFeature(feature, layer) {
      layer.on({
        "click": highlightFeature
      });
    }

    // Cargar los países en el mapa
    var geojson = L.geoJSON(data, {
      style: function (feature) {
        return {
          color: 'blue',  // Color de la frontera
          weight: 1,      // Grosor de la frontera
          opacity: 0.5    // Opacidad de la frontera
        };
      },
      onEachFeature: onEachFeature
    }).addTo(map);




  });



  const apiKey = "278e107c7b7be0a3e2bb291233e4bcfd";


  map.on("click", async (e) => {

    let coord = e.latlng;

    let link = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + coord.lat + "&lon=" + coord.lng + "&appid=" + apiKey;

    let result = await fetch(link);
    let city = await result.json();
    let countryCode = city[0].country;


    createOneMarker(coord,map);




  });


  map.on("click",async (e)=>{
    let coord = e.latlng;
    let link = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + coord.lat + "&lon=" + coord.lng + "&appid=" + apiKey;



    let result = await fetch(link);
    let city = await result.json();
    let countryCode = city[0].country;



    countryName.innerHTML = all_countries[countryCode].es;


  });


















});


function createOneMarker(coord,map){



  if(lastMarker){
    map.removeLayer(lastMarker)
  }
  lastMarker = L.marker([coord.lat, coord.lng]);
  lastMarker.addTo(map);
  


}


function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}