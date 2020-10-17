import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import SmoothPicker from 'react-native-smooth-picker';

const categories = [
    "General",
    "Books",
    "Film",
    "Music",
    "Musicals",
    "Video",
    "Board",
    "Natural",
    "Computer",
    "Mathematics",
    "Mithology",
    "Sports",
    "Geography",
    "Geography",
    "Politics",
    "Arts",
    "Celebrities",
    "Animal",
]

const opacities = {
    0: 1,
    1: 1,
    2: 0.6,
    3: 0.3,
    4: 0.1,
};
const sizeText = {
    0: 20,
    1: 15,
    2: 10,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
    return (
        <View
            style={[
                styles.OptionWrapper,
                {
                    opacity,
                    borderColor: selected ? '#ABC9AF' : 'transparent',
                    width: vertical ? 190 : 'auto',
                },
            ]}>
            <Text style={{ fontSize }}>{name}</Text>
        </View>
    );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
    const selected = index === indexSelected;
    const gap = Math.abs(index - indexSelected);

    let opacity = opacities[gap];
    if (gap > 3) {
        opacity = opacities[4];
    }
    let fontSize = sizeText[gap];
    if (gap > 1) {
        fontSize = sizeText[2];
    }

    return (
        <Item
            opacity={opacity}
            selected={selected}
            vertical={vertical}
            fontSize={fontSize}
            name={item}
        />
    );
};

export default function App() {
    function handleChange(index) {
        setSelected(index);
    }

    const [selected, setSelected] = React.useState(4);

    return (
        <View style={styles.container}>
            <View style={styles.wrapperVertical}>
                <SmoothPicker
                    initialScrollToIndex={selected}
                    keyExtractor={(_, index) => index.toString()}
                    data={categories}
                    onSelected={({ item, index }) => handleChange(index)}
                    renderItem={(option) => ItemToRender(option, selected, true)}
                    selectOnPress
                />
            </View>
            {/* <View>
                <Text>{`Your selection is ${categories[selected]}`}</Text>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingBottom: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    wrapperVertical: {
        width: 250,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        color: 'black',
    },
    OptionWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 50,
        borderWidth: 3,
        borderRadius: 10,
    },
});
