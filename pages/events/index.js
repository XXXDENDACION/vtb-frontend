import { PageTitle } from "../../components/PageTitle";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Event } from "../../components/Event";

const EventsPage = () => {
  return (
    <>
      <Flex flexDirection="column" ml="57px">
        <PageTitle
          icon="/arch.svg"
          iconWidth={53}
          iconHeight={53}
          title="Задания"
          fontSize="18px"
        />

        <Event
          title="Исследования"
          description="Чтоооооооо за исследование рпарпиа лапвав понятие не имею"
        />

        <Event
          title="Митап"
          description="Чтоооооооо за исследование понятие не имею"
        />
      </Flex>
    </>
  );
};

export default EventsPage;
