import React, {useMemo, useState} from 'react';

import {moment} from '../../../utils/moment';

import {
  Container,
  Label,
  ButtonInput,
  Value,
  Icon,
  Modal,
  ModalContent,
  ModalHeader,
  ButtonClose,
  Placeholder,
  ButtonSubmit,
  ButtonSubmitText,
  DatePicker,
} from './styles';

interface InputSelectDateProps {
  label?: string;
  placeholder?: string;
  error?: string;
  date: string | Date;
  onChangeDate: (date: string | Date) => void;
}

const InputSelectDate = ({
  label,
  date,
  placeholder,
  error,
  onChangeDate,
}: InputSelectDateProps) => {
  const [visible, setVisible] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());

  const dateFormatted = useMemo(() => {
    if (!date) {
      return null;
    }

    return moment(date).format('ll');
  }, [date]);

  const handleSubmit = () => {
    onChangeDate(selectDate);
    setVisible(false);
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <ButtonInput error={error} onPress={() => setVisible(!visible)}>
        {dateFormatted ? (
          <Value>{dateFormatted}</Value>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
        <Icon name="menu-down" />
      </ButtonInput>

      <Modal isVisible={visible}>
        <ModalContent>
          <ModalHeader>
            <ButtonClose onPress={() => setVisible(false)}>
              <Icon name="close" />
            </ButtonClose>
            <ButtonSubmit onPress={handleSubmit}>
              <ButtonSubmitText>Ok</ButtonSubmitText>
            </ButtonSubmit>
          </ModalHeader>
          <DatePicker
            mode="date"
            modal={false}
            open={visible}
            date={selectDate}
            onDateChange={setSelectDate}
            locale="pt-Br"
          />
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default InputSelectDate;
