import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { firstPageStyles } from './components/assets/styles/Styles';
class App extends Component {
  render() {
    return (
      <View style={firstPageStyles.pageView}>
        <View style={firstPageStyles.itemView}>
          <Image source={require('./components/assets/images/line.png')} />
          <Text style={firstPageStyles.seventhText}>الرئيسية </Text>
        </View>

        <View style={firstPageStyles.personView}>
          <View style={firstPageStyles.personContainer}>
            <Image
              style={firstPageStyles.firstImage}
              source={require('./components/assets/images/person.jpg')}
            />
            <View style={firstPageStyles.containerView}>
              <Text style={firstPageStyles.firstContainerText}>مرحبا بك</Text>
              <Text style={firstPageStyles.secondContainerText}>
                محمد العلي
              </Text>
            </View>
          </View>
          <View>
            <View style={firstPageStyles.circleStyle}></View>
            <Image source={require('./components/assets/images/circle.png')} />
          </View>
        </View>

        <View style={firstPageStyles.coloredContainer}>
          <View style={firstPageStyles.firstColoredContainer}>
            <Text style={firstPageStyles.firstColoredText}>إجمالي المهمات</Text>
            <Text style={firstPageStyles.secondColoredText}> 21</Text>
          </View>
          <View style={firstPageStyles.secondColoredContainer}>
            <Text style={firstPageStyles.firstColoredText}>مهمات منتهية </Text>
            <Text style={firstPageStyles.secondColoredText}> 4</Text>
          </View>
          <View style={firstPageStyles.thirdColoredContainer}>
            <Text style={firstPageStyles.thirdColoredText}> مهمات جديدة </Text>
            <Text style={firstPageStyles.fourthColoredText}> 11</Text>
          </View>
        </View>

        <View style={firstPageStyles.coloredContainerTwo}>
          <Text style={firstPageStyles.coloredContainerTwoFirstText}>
            أحدث الطلبات
          </Text>
          <Text style={firstPageStyles.coloredContainerTwoSecondText}>
            ___02
          </Text>
        </View>
        <View style={firstPageStyles.requestContainer}>
          <View></View>
          <View style={firstPageStyles.requestContainerOne}>
            <Text style={firstPageStyles.requestContainerFirstText}>
              عنوان الطلب
            </Text>
            <Text style={firstPageStyles.requestContainerSecondText}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص
            </Text>
          </View>

          <View style={firstPageStyles.innerRequestContainer}>
            <View style={firstPageStyles.innerRequestContainerOne}>
              <Text style={firstPageStyles.innerRequestContainerFirstText}>
                مسئول الطلب
              </Text>
              <Text style={firstPageStyles.innerRequestContainerSecondText}>
                عادل سعيد
              </Text>
            </View>
            <View style={firstPageStyles.innerRequestContainerTwo}>
              <View style={firstPageStyles.innerRequestContainerThirdView}>
                <Text style={firstPageStyles.innerRequestContainerThirdText}>
                  تاريخ الرد
                </Text>
              </View>

              <View style={firstPageStyles.innerRequestContainerFourthView}>
                <Text style={firstPageStyles.innerRequestContainerFourthText}>
                  Dec 18, 2019
                </Text>
              </View>
            </View>
            <View style={firstPageStyles.innerRequestContainerOne}>
              <Text style={firstPageStyles.innerRequestContainerFithText}>
                حالة الطلب
              </Text>
              <Text style={firstPageStyles.innerRequestContainerSixthText}>
                مرفوض
              </Text>
            </View>
          </View>
        </View>
        <Text style={firstPageStyles.redText}>المسئول المباشر </Text>

        <View style={firstPageStyles.personView}>
          <View style={firstPageStyles.personContainer}>
            <Image
              style={firstPageStyles.firstImage}
              source={require('./components/assets/images/personTwo.png')}
            />
            <View style={firstPageStyles.containerView}>
              <Text style={firstPageStyles.personFirstText}>رضا المرزوقي</Text>
              <Text style={firstPageStyles.personSecondText}>
                مدير الجهة الإعلامية
              </Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.personView}>
          <View style={firstPageStyles.iconContainer}>
            <Image
              source={require('./components/assets/images/phoneTwo.png')}
            />
          </View>
          <View style={firstPageStyles.iconContainer}>
            <Image source={require('./components/assets/images/window.png')} />
          </View>
          <View style={firstPageStyles.iconTwoContainer}></View>
        </View>

        <View style={firstPageStyles.bottomView}>
          <View style={firstPageStyles.innerBottomView}>
            <View>
              <Image source={require('./components/assets/images/home.png')} />
              <Text style={firstPageStyles.firstBottomText}>الرئيسية </Text>
            </View>
            <View>
              <Image source={require('./components/assets/images/order.png')} />
              <Text style={firstPageStyles.secondBottomText}>الطلبات </Text>
            </View>
            <View>
              <Image source={require('./components/assets/images/note.png')} />
              <Text style={firstPageStyles.secondBottomText} >الإشعارات </Text>
            </View>
            <View>
              <Image source={require('./components/assets/images/settings.png')} />
              <Text style={firstPageStyles.secondBottomText}>الإعدادات </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default App;
