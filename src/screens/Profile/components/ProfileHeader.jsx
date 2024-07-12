import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BurgerMenu, Dropdown, Plus} from '../../../Icons';
import {StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
        <Text style={styles.username}>username</Text>
        <Dropdown />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}>
        <TouchableOpacity>
          <Plus size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <BurgerMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
