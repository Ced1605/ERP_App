import React from "react";
import { Text } from "react-native";

class DateComponent extends React.Component {
  render() {
    // Annahme: Das Datum wird als props mitgeliefert
    const { date } = this.props;
    const { style } = this.props;

    // Konvertiere das Datum in ein JavaScript Date-Objekt
    const formattedDate = new Date(date);

    // Array von Wochentagen
    const daysOfWeek = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

    // Array von Monaten
    const months = [
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ];

    // Extrahiere den Wochentag, Tag, Monat und Jahr
    const dayName = daysOfWeek[formattedDate.getDay()]; // Tag als Name
    const day = formattedDate.getDate(); // Tag im Monat
    const monthName = months[formattedDate.getMonth()]; // Monat als Name
    const year = formattedDate.getFullYear().toString().slice(-2); // Jahr

    // Kombiniere den Tag, Monat und Jahr
    const formattedDateString = `${dayName}, ${day}. ${monthName} ${year}`;

    return <Text style={style}>{formattedDateString}</Text>;
  }
}

export default DateComponent;
