import React, { useState, useEffect } from 'react'
import { PDFViewer, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer'
import InvoiceDocument from '../../components/InvoiceDocument'
import { useParams } from 'react-router-dom';
import purchaseService from '../../services/purchase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'; 

const Invoice = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState({
        id: '',
        address: {
            address: '',
            city: '',
            state: '',
            zip: ''
        },
        order: [],
        created_at: '01/01/0000'
    })
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        purchaseService.getPurchase(id, token).then((response) => {
            setPurchase(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
            toast.error("No se pudo obtener la informacion");
            navigate('../');
        })
    }, [])

    return (
        <div className=' mt-24 w-full flex flex-col'>
            <div className=' w-full flex items-center justify-evenly'>
                <PDFViewer className=' w-[600px] mx-10 h-[700px] max-sm:h-[500px] max-[350px]:h-[250px] max-[350px]:w-[150px] max-sm:w-[350px]'>
                    <InvoiceDocument purchase={purchase} />
                </PDFViewer>
            </div>
            <div className=' mt-8 w-full flex items-center justify-evenly flex-wrap'>
                <PDFDownloadLink className=' max-sm:w-[80%] px-5 py-2 bg-teal-700 text-white text-xl font-semibold rounded-3xl mb-8' document={<InvoiceDocument purchase={purchase} />} fileName="invoice.pdf">
                    {({ blob, url, loading, error }) => (
                        loading ? 'Generando recibo...' : 'Descargar recibo'
                    )}
                </PDFDownloadLink>
                <BlobProvider document={<InvoiceDocument purchase={purchase} />}>
                    {({ blob, url, loading, error }) => (
                        <div className=' max-sm:mt-5 max-sm:w-[80%] px-5 py-2 bg-teal-700 text-white text-xl font-semibold rounded-3xl mb-8'>
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