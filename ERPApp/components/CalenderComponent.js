import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from "react-native-modal";
import { getCurrentDate } from "../assets/CurrentDate";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../assets/color";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CalendarComponent = () => {
  const currentDate = getCurrentDate();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    toggleModal();
  };

  return (
    <View>
      <Calendar
        current={currentDate}
        onDayPress={onDayPress}
        markedDates={{
          "2024-01-01": { selected: true, marked: true },
        }}
        theme={{
          backgroundColor: colors.background1,
          calendarBackground: colors.background1,
          textSectionTitleColor: Colors.color3,
          selectedDayBackgroundColor: colors.color3,
          selectedDayTextColor: colors.text,
          todayTextColor: colors.color3,
          dayTextColor: colors.text,
          textDisabledColor: "#d9e1e8",
          dotColor: colors.color3,
          selectedDotColor: colors.white,
          arrowColor: colors.color2,
          monthTextColor: colors.color3,
          textDayFontWeight: "400",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "400",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
          monthNames: [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
          ],
          dayNames: [
            "Sontag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
          ],
          dayNamesShort: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa"],
        }}
        renderArrow={(direction) => (
          <View>
            {direction === "left" ? (
              <Icon name="ios-arrow-back" size={30} color="#00adf5" />
            ) : (
              <Icon name="ios-arrow-forward" size={30} color="#00adf5" />
            )}
          </View>
        )}
      />
      <Modal isVisible={isModalVisible}>
        <View style={Styles.msBox}>
          <Text style={Styles.msText}>{`Nachricht für ${selectedDate}`}</Text>
          <View style={Styles.msButton}>
            <Button title="Schließen" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Styles = StyleSheet.create({
  msBox: {
    flex: 1,
    backgroundColor: "#d1d1d1",
    marginVertical: 50,
    marginHorizontal: 20,
  },
  msText: {
    alignSelf: "center",
    padding: 20,
    fontSize: 20,
  },
  msButton: {
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: 10,
  },
});

export default CalendarComponent;
