import React from 'react'
import { PDFViewer, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer'
import InvoiceDocument from '../../components/InvoiceDocument'

const Invoice = () => {
    return (
        <div className=' mt-24 w-full flex flex-col'>
            <div className=' w-full flex items-center justify-evenly'>
                <PDFViewer className=' w-[600px] mx-10 h-[700px] max-sm:h-[500px] max-[350px]:h-[250px] max-[350px]:w-[150px] max-sm:w-[350px]'>
                    <InvoiceDocument />
                </PDFViewer>
            </div>
            <div className=' mt-10 w-full flex items-center justify-evenly flex-wrap'>
                <PDFDownloadLink className=' max-sm:w-[80%] px-5 py-2 bg-teal-700 text-white rounded-lg' document={<InvoiceDocument />} fileName="invoice.pdf">
                    {({ blob, url, loading, error }) => (
                        loading ? 'Generando recibo...' : 'Descargar recibo'
                    )}
                </PDFDownloadLink>
                <BlobProvider document={<InvoiceDocument />}>
                    {({ blob, url, loading, error }) => (
                        <div className=' max-sm:mt-5 max-sm:w-[80%] px-5 py-2 bg-teal-700 text-white rounded-lg'>
                            <a href={url} className=''>
                                {loading ? 'Generando recibo...' : 'Imprimir recibo'}
                            </a>
                        </div>
                    )}
                </BlobProvider>
            </div>
        </div>
    )
}

export default Invoice