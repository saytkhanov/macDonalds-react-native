import React, {useState} from 'react'
import { Text, Image, TouchableHighlight, View } from 'react-native'

import { COLORS, SIZES } from '../../constants'
import { categories } from '../categories'

const Categories = () => {
    const [active, setActive] = useState();
    return (
        <View style={{ paddingTop: 60 }}>
            <Text
                style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}
            >
                Hey,
            </Text>
            <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>
                what's up?
            </Text>

            <View
                style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {categories.map((cat, idx) => (
                    <View
                        key={`categories ${idx}`}
                        style={{
                            width: '30%',
                            marginBottom: 20,
                        }}
                    >
                        <TouchableHighlight
                            onPress={() => setActive(idx)}
                            underlayColor={COLORS.secondary}
                            style={{
                                height: 100,
                                backgroundColor: active === idx ? COLORS.secondary : COLORS.gray,
                                justifyContent: 'center',
                                borderRadius: SIZES.radius,
                                paddingLeft: 5,
                                paddingRight: 5,
                            }}
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={{ uri: cat.image }}
                                    style={{ width: 40, height: 40 }}
                                />
                                <Text
                                    style={{
                                        fontSize: SIZES.h4,
                                        color: COLORS.white,
                                        marginTop: 10,
                                        textAlign: 'center',
                                    }}
                                >
                                    {cat.name}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Categories
