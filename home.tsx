import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Platform} from 'react-native';
import PSPDFKitView from 'react-native-pspdfkit';

const DOCUMENT =
  Platform.OS === 'ios' ? 'Document.pdf' : 'file:///android_asset/Document.pdf';

const Home = ({
  navigation,
}: NativeStackScreenProps<{Home: undefined}, 'Home'>) => {
  const pdfRef = React.useRef();

  return (
    <PSPDFKitView
      document={DOCUMENT}
      showNavigationButtonInToolbar
      onNavigationButtonClicked={() => {
        navigation.goBack(); // It doesn't do anything
      }}
      configuration={{
        thumbnailBarMode: 'scrollable',
        pageTransition: 'scrollContinuous',
        scrollDirection: 'vertical',
        useParentNavigationBar: true,
      }}
      ref={pdfRef}
      fragmentTag="PDF1"
      style={{flex: 1}}
    />
  );
};

export default Home;
