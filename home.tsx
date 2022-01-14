import React from 'react';
import {Platform} from 'react-native';
import PSPDFKitView from 'react-native-pspdfkit';

const DOCUMENT =
  Platform.OS === 'ios' ? 'Document.pdf' : 'file:///android_asset/Document.pdf';

const Home = () => {
  const pdfRef = React.useRef();

  return (
    <PSPDFKitView
      document={DOCUMENT}
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
