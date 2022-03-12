import React from 'react';
import {View, Image, Linking, TouchableHighlight, TouchableOpacity} from "react-native";

const Header = () => {
    return (
        <View style={{ flexDirection: 'row' , alignItems: 'center',
            justifyContent: 'space-between'
        }}>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.google.com/')}>
              <Image style={{
                  width: 51,
                  height: 45
              }} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1170px-McDonald%27s_Golden_Arches.svg.png'}} />
          </TouchableHighlight>
            <View>
                 <Image source={{uri:
                 'https://www.trek.ru/images/cart-icon.png'
                 }}
                 style={{
                     width: 45,
                     height: 45,
                 }}
                 />
            </View>
        </View>
    );
};

export default Header;
