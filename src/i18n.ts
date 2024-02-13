import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      Add: "Add",
      Failed: "Failed to get country name",

      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
      Sunday: "Sunday",

      January: "January",
      February: "February",
      March: "March",
      April: "April",
      May: "May",
      June: "June",
      July: "July",
      August: "August",
      September: "September",
      October: "October",
      November: "November",
      December: "December",

      Feels: "Feels like: ",
      Wind: "Wind: ",
      Humidity: "Humidity: ",
      Pressure: "Pressure: ",
      ms: "m/s",

      Thunderstorm: "Thunderstorm",
      Drizzle: "Drizzle",
      Rain: "Rain",
      Snow: "Snow",
      Mist: "Mist",
      Smoke: "Smoke",
      Haze: "Haze",
      Dust: "Dust",
      Fog: "Fog",
      Sand: "Sand",
      Ash: "Ash",
      Squall: "Squall",
      Tornado: "Tornado",
      Clear: "Clear",
      Clouds: "Clouds"
    }
  },
  UA: {
    translation: {
      Add: "Додати",
      Failed: "Не вдалося отримати назву країни",

      Monday: "Понеділок",
      Tuesday: "Вівторок",
      Wednesday: "Середа",
      Thursday: "Четвер",
      Friday: "П'ятниця",
      Saturday: "Субота",
      Sunday: "Недія",

      January: "Січня",
      February: "Лютого",
      March: "Березня",
      April: "Квітня",
      May: "Травня",
      June: "Червня",
      July: "Липня",
      August: "Серпня",
      September: "Вересня",
      October: "Жовтня",
      November: "Листопада",
      December: "Грудня",

      Feels: "Відчувається як: ",
      Wind: "Вітер: ",
      Humidity: "Вологість: ",
      Pressure: "Тиск: ",
      ms: "м/с",

      Thunderstorm: "Гроза",
      Drizzle: "Мряка",
      Rain: "Дощ",
      Snow: "Сніг",
      Mist: "Туман",
      Smoke: "Дим",
      Haze: "Імла",
      Dust: "Пил",
      Fog: "Туман",
      Sand: "Пісок",
      Ash: "Попіл",
      Squall: "Шквал",
      Tornado: "Торнадо",
      Clear: "Ясно",
      Clouds: "Хмарно"
    }
  },
  HE: {
    translation: {
      Add: "לְהוֹסִיף",
      Failed: "השגת שם המדינה נכשלה",

      Monday: "יוֹם שֵׁנִי",
      Tuesday: "יוֹם שְׁלִישִׁי",
      Wednesday: "יום רביעי",
      Thursday: "יוֹם חֲמִישִׁי",
      Friday: "יוֹם שִׁישִׁי",
      Saturday: "יום שבת",
      Sunday: "יוֹם רִאשׁוֹן",

      January: "יָנוּאָר",
      February: "פברואר",
      March: "מרץ",
      April: "אַפּרִיל",
      May: "מאי",
      June: "יוני",
      July: "יולי",
      August: "אוגוסט",
      September: "סֶפּטֶמבֶּר",
      October: "אוֹקְטוֹבֶּר",
      November: "נוֹבֶמבֶּר",
      December: "דֵצֶמבֶּר",

      Feels: " מרגיש כמו " ,
      Wind: "רוּחַ " ,
      Humidity: "לחות " ,
      Pressure: "לַחַץ " ,
      ms: "מטרים/שְׁנִיָה",

      Thunderstorm: "סוּפַת רַעֲמִים",
      Drizzle: "זרזיף",
      Rain: "גֶשֶׁם",
      Snow: "שֶׁלֶג",
      Mist: "עֲרָפֶל",
      Smoke: "עָשָׁן",
      Haze: "עֲרָפֶל",
      Dust: "אָבָק",
      Fog: "עֲרָפֶל",
      Sand: "חוֹל",
      Ash: "אֵפֶר",
      Squall: "תְזָזִית",
      Tornado: "טוֹרנָדוֹ",
      Clear: "בָּהִיר",
      Clouds: "עננים"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') ?? 'EN',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;