import { Alert, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//bước 1: import
import { MyTheme, useTheme } from './Components/Theme/MyTheme'
import Section from './Components/Section'
import TextInputDemo from './Components/TextInputDemo'
import ButtomCustom from './Components/ButtomCustom'


const App = () => {
  //B2: return cấu trúc theme
  return (
    <MyTheme>




      <BodyApp />
    </MyTheme>
  )
}


const BodyApp = () => {
  // sử dụng hook để thao tác với theme
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={[st.khung, { backgroundColor: theme === 'light' ? '#fff' : 'red' }]}>
        <Text style={{ color: theme === 'light' ? '#000' : '#fff', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
          Đăng kí thông tin học</Text>



        {theme === 'light' ?

          <Image source={require('../Lab1/Components/img/logo.png')} style={{ width: "100%", height: 150 }} resizeMode='stretch' />
          :
          <Image source={require('../Lab1/Components/img/gg.png')} style={{ width: "100%", height: 150 }} resizeMode='stretch' />
        }

        <Section title="Thông tin cá nhân" style={{ backgroundColor: theme === 'light' ? 'aqua' : 'white' }}>
          <View>
            <TextInputDemo placeholder="Nhập tên" label="Họ và tên" />
            <TextInputDemo placeholder="Nhập MSV" label="Mã sinh viên" />
            <ButtomCustom title={"Save"} onPress={() => { Alert.alert('Saved') }} backgroundColor="#4CAF50"
              textColor="#fff" />
          </View>
        </Section>
        <Section title="Thông tin Khóa học" style={{ backgroundColor: theme === 'light' ? 'aqua' : 'white' }}>
          <View>
            <TextInputDemo placeholder="Nhập Thông tin khóa học" label="Thông tin khóa học" />

            <ButtomCustom title={"Save"} onPress={() => { Alert.alert('Saved') }} backgroundColor="#4CAF50"
              textColor="#fff" />
          </View>
        </Section>
        <Section title="Thông tin liên hệ" style={{ backgroundColor: theme === 'light' ? 'aqua' : 'white' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text>
              Address : Thái Bình

            </Text>
            <Text >
              Hotline : 012345667

            </Text>

          </View>
        </Section>

      </ScrollView >
      <View style={{ position: 'absolute', zIndex: 3000, bottom: 70, right: 70 }}>

        <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', position: 'absolute' }} onPress={toggleTheme}>

          <Image source={require('../Lab1/Components/img/theme.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}




export default App


const st = StyleSheet.create({
  khung: {

    height: 100,

    flex: 1,
    padding: 10
  }
})
