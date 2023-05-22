import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const Invoice = () => (
    
        
            <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
       {`<h1>Hello, World!</h1>
        <p>This is a sample HTML content.</p>`
        }
        </Text>
      </View>
    </Page>
  </Document>

        
        
  
  
);

export default Invoice;