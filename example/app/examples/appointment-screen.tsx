import {
  Block,
  Row,
  Button,
  Col,
  Datepicker,
  Textfield,
  useColors,
  type PhaselisColors,
} from "phaselis";
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
  return (
    <Col>
      <Button
        variation={
          disabled ? "primary" : selected ? "primary" : "primary_outline"
        }
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
  const Colors = useColors<PhaselisColors>();

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
        backgroundColor: Colors.Shades.white,
        alignItems: "center",
        justifyContent: "center",
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
  const Colors = useColors<PhaselisColors>();

  return (
    <Block
      style={{
        borderRadius: 16,
        padding: 16,
        backgroundColor: Colors.Shades.white,
      }}
    >
      <Datepicker
        size="xxl"
        onChange={onDateChange}
        style={{
          container: {
            width: "100%",
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
  const Colors = useColors<PhaselisColors>();
  return (
    <Block
      style={{
        borderRadius: 16,
        padding: 16,
        backgroundColor: Colors.Shades.white,
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
  const Colors = useColors<PhaselisColors>();

  const handleConfirm = () => {
    // Handle appointment confirmation
    console.log("Appointment confirmed:", {
      date: selectedDate,
      time: selectedTime,
      comment,
    });
  };

  return (
    <StoryView
      style={{
        gap: 16,
        backgroundColor: Colors.Shades.grayBackground,
        flex: 1,
      }}
    >
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
