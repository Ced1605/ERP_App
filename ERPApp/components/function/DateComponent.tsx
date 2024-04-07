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
    const daysOfWeek = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];

    // Extrahiere den Wochentag und das Datum
    const dayName = daysOfWeek[formattedDate.getDay()]; // Tag als Name
    const day = formattedDate.getDate(); // Tag im Monat

    // Kombiniere den Tag und das Datum
    const formattedDateString = `${dayName}, ${day}`;

    return <Text style={style}>{formattedDateString}</Text>;
  }
}

export default DateComponent;
