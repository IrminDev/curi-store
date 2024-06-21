import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import logo  from '../assets/logo.png'
import { format } from 'date-fns'
import address from '../services/address';

const styles = StyleSheet.create({
    page: {fontSize: 11,paddingTop: 20,paddingLeft: 40,paddingRight: 40,lineHeight: 1.5,flexDirection: 'column' },

    spaceBetween : {flex : 1,flexDirection: 'row',alignItems:'center',justifyContent:'space-between',color: "#3E3E3E" },

    titleContainer: {flexDirection: 'row',marginTop: 24},
    
    logo: { width: 90 },

    reportTitle: {  fontSize: 16,  textAlign: 'center' },

    addressTitle : {fontSize: 11,fontStyle: 'bold'}, 
    
    invoice : {fontWeight: 'bold',fontSize: 20},
    
    invoiceNumber : {fontSize: 11,fontWeight: 'bold'}, 
    
    address : { fontWeight: 400, fontSize: 10},
    
    theader : {marginTop : 20,fontSize : 10,fontStyle: 'bold',paddingTop: 4 ,paddingLeft: 7 ,flex:1,height:20,backgroundColor : '#DEDEDE',borderColor : 'whitesmoke',borderRightWidth:1,borderBottomWidth:1},

    theader2 : { flex:2, borderRightWidth:0, borderBottomWidth:1},

    tbody:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1, borderColor : 'whitesmoke', borderRightWidth:1, borderBottomWidth:1},

    total:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1.5, borderColor : 'whitesmoke', borderBottomWidth:1},

    tbody2:{ flex:2, borderRightWidth:1, }
});

const InvoiceHeader = () => {
    return (
        <View style={styles.titleContainer} >
            <View style={styles.spaceBetween}>
                <Image style={styles.logo} src={logo} ></Image>
                <Text style={styles.reportTitle}>Curistore</Text>
            </View>
        </View>
    )
}

const InvoiceInfo = ({id}) => {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View>
                    <Text style={styles.invoice}>Recibo </Text>
                    <Text style={styles.invoiceNumber}>Número de recibo: {id} </Text>
                </View>
                <View>
                    <Text style={styles.addressTitle}>MZA 46 LT 36 5A, Condominio Cali, </Text>
                    <Text style={styles.addressTitle}>Ecatepec de Morelos,</Text>
                    <Text style={styles.addressTitle}>México, México.</Text>
                </View>
            </View>
        </View>
    )
}

const UserAddress = ({address, date}) => {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View style={{maxWidth : 200}}>
                    <Text style={styles.addressTitle}>Enviar a: </Text>
                    <Text style={styles.address}>
                        {address.address}
                    </Text>
                    <Text style={styles.address}>
                        {address.city}
                    </Text>
                    <Text style={styles.address}>
                        {address.state}
                    </Text>
                    <Text style={styles.address}>
                        {address.zip}
                    </Text>
                </View>
                <Text style={styles.addressTitle}>{date}</Text>
            </View>
        </View>
    )
}

const TableHeader = () => {
    return (
        <View style={{ width:'100%', flexDirection :'row', marginTop:10}}>
            <View style={[styles.theader, styles.theader2]}>
                <Text>Producto</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Precio</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Cantidad</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Monto</Text>   
            </View>
        </View>
    )
}

const TableRow = ({product}) => {
    return (
        <View style={{ width:'100%', flexDirection :'row'}}>
            <View style={[styles.tbody, styles.tbody2]}>
                <Text >{product.title}</Text>   
            </View>
            <View style={styles.tbody}>
                <Text>${product.price}.00</Text>   
            </View>
            <View style={styles.tbody}>
                <Text>{product.quantity}</Text>   
            </View>
            <View style={styles.tbody}>
                <Text>${(product.price * product.quantity).toFixed(2)}</Text>   
            </View>
        </View>
    )
}

const Summary = ({total}) => {
    return (
        <View style={{ width:'100%', flexDirection :'row'}}>
            <View style={styles.total}>
                <Text></Text>   
            </View>
            <View style={styles.total}>
                <Text> </Text>   
            </View>
            <View style={styles.tbody}>
                <Text>Total</Text>   
            </View>
            <View style={styles.tbody}>
                <Text>
                    ${total}
                </Text>  
            </View>
        </View>
    )
}

const InvoiceDocument = ({purchase}) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <InvoiceHeader />
                <InvoiceInfo id={purchase.id} />
                <UserAddress address={{address: purchase.address.address, city: purchase.address.city, state: purchase.address.state, zip: purchase.address.zip}} date={
                    format(
                        new Date(purchase.created_at),
                        'dd/MM/yyyy HH:mm'
                    )
                } />
                <TableHeader />
                {
                    purchase.order.map((order) => (
                        <TableRow key={order.id} product={{title: order.product.title, price: order.product.price, quantity: order.quantity}} />
                    ))
                }
                <Summary total={purchase.total} />
            </Page>
        </Document>
    )
}

export default InvoiceDocument