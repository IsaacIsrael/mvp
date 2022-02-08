import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sizes } from '../helper/Sizes';


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: Sizes.GUTTER,
    alignItems: 'stretch',
  },
  scrollContainer:{
    flex: 0,
    position: 'relative'
  },
});

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  scroll?: boolean,
  footerComponent?: React.ReactNode
};

const Container: React.FC<Props> = ({ children, footerComponent, style , scroll }) => {
    const Content = scroll ? ScrollView : View;
    const contentStyle = scroll ? {contentContainerStyle: [styles.container,styles.scrollContainer, style]} : {style: [styles.container, style]};
    const FooterComponent: React.ReactNode = footerComponent ||View;
    
    return (
        <SafeAreaView style={styles.wrapper}>
            <Content {...contentStyle}>{children}</Content>
            <FooterComponent />
        </SafeAreaView>
    );
};

Container.defaultProps = {
  style: {},
  scroll: false,
  footerComponent:View,
};

export default Container;
