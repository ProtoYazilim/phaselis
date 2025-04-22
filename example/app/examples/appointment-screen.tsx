import { StyleSheet } from "react-native";
import { Block, Row, Button, Col, Datepicker, Textfield } from "phaselis";
import StoryView from "../../src/StoryView";
import { doctor_1 } from "../../assets/images";
import { DoctorProfileCard } from "./doctors-screen";
import { useState } from "react";

const TimeSlot = ({
  time,
  disabled = false,
  selected = false,
  onSelect,
}: {
  time: string;
  disabled?: boolean;
  selected?: boolean;
  onSelect: (time: string) => void;
}) => {
  const variation = selected ? "primary" : "primary_outline";

  return (
    <Col>
      <Button
        variation={variation}
        text={time}
        size="sm"
        disabled={disabled}
        onPress={() => onSelect(time)}
      />
    </Col>
  );
};

const TimeSelectionSection = ({
  selectedTime,
  onSelectTime,
}: {
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}) => {
  const morningSlots = [
    { time: "09:00", disabled: false },
    { time: "09:30", disabled: false },
    { time: "10:00", disabled: true },
    { time: "10:30", disabled: true },
    { time: "11:00", disabled: false },
  ];

  const afternoonSlots = [
    { time: "11:30", disabled: false },
    { time: "12:00", disabled: false },
    { time: "13:30", disabled: false },
    { time: "14:00", disabled: false },
    { time: "14:30", disabled: false },
  ];

  const eveningSlots = [
    { time: "15:00", disabled: false },
    { time: "15:30", disabled: true },
    { time: "16:00", disabled: false },
    { time: "16:30", disabled: false },
    { time: "17:00", disabled: false },
  ];

  return (
    <Block
      style={{
        borderRadius: 16,
        padding: 16,
        gap: 12,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        ...styles.shadowMD,
      }}
    >
      <Row style={{ gap: 4 }}>
        {morningSlots.map((slot) => (
          <TimeSlot
            key={slot.time}
            time={slot.time}
            disabled={slot.disabled}
            selected={selectedTime === slot.time}
            onSelect={onSelectTime}
          />
        ))}
      </Row>
      <Row style={{ gap: 4 }}>
        {afternoonSlots.map((slot) => (
          <TimeSlot
            key={slot.time}
            time={slot.time}
            disabled={slot.disabled}
            selected={selectedTime === slot.time}
            onSelect={onSelectTime}
          />
        ))}
      </Row>
      <Row style={{ gap: 4 }}>
        {eveningSlots.map((slot) => (
          <TimeSlot
            key={slot.time}
            time={slot.time}
            disabled={slot.disabled}
            selected={selectedTime === slot.time}
            onSelect={onSelectTime}
          />
        ))}
      </Row>
    </Block>
  );
};

const DatePickerSection = ({
  onDateChange,
}: {
  onDateChange: (date: Date) => void;
}) => {
  return (
    <Block
      style={{
        borderRadius: 16,
        padding: 16,
        backgroundColor: "#FFF",
        ...styles.shadowMD,
      }}
    >
      <Datepicker
        size="xxl"
        onChange={onDateChange}
        style={{
          container: {
            flex: 1,
            justifyContent: "center",
          },
        }}
      />
    </Block>
  );
};

const CommentSection = ({
  comment,
  onCommentChange,
}: {
  comment: string;
  onCommentChange: (text: string) => void;
}) => {
  return (
    <Block
      style={{
        borderRadius: 16,
        padding: 16,
        backgroundColor: "#FFF",
        ...styles.shadowMD,
      }}
    >
      <Textfield
        placeholder="Comments"
        textarea
        value={comment}
        onChangeText={onCommentChange}
      />
    </Block>
  );
};

const AppointmentScreenView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const handleConfirm = () => {
    // Handle appointment confirmation
    console.log("Appointment confirmed:", {
      date: selectedDate,
      time: selectedTime,
      comment,
    });
  };

  return (
    <StoryView style={{ gap: 16 }}>
      <DoctorProfileCard
        imageUri={doctor_1.uri}
        name="Dr. John Doe"
        specialty="Neurologist"
        patientCount="537+"
      />

      <DatePickerSection onDateChange={setSelectedDate} />

      <TimeSelectionSection
        selectedTime={selectedTime}
        onSelectTime={setSelectedTime}
      />

      <CommentSection comment={comment} onCommentChange={setComment} />

      <Button
        text="Confirm Appointment"
        size="lg"
        leftIcon="CalendarCheck"
        onPress={handleConfirm}
      />
    </StoryView>
  );
};

export default AppointmentScreenView;

const styles = StyleSheet.create({
  shadowMD: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 8,
  },
});
