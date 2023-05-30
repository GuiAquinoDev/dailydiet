import { DietDayListItem } from "@components/DietDayListItem";
import { Container, Heading } from "./style";
import { useState } from "react";
import { SectionList } from "react-native";


export function DietDayList() {
    const [dayDietItem, setDayDietItem] = useState([{
        title: "12.08.23",
        data: ["X-tudo","Torta de chocolate"]
    },
    {
        title: "11.08.23",
        data: ["Lasanha", "Salada"]
    }
    ])

    return (
        <Container>
            <SectionList
                sections={dayDietItem}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <DietDayListItem food={ item } />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading>
                        {section.title}
                    </Heading>
                )}
            />
      </Container>
    )
}