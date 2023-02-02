import pixnft      from './images/pixnft.webp'
import nexus       from './images/nexus.webp'
import carco       from './images/carco_prj.webp'
import dlab        from './images/3dlab.webp'



export const projectDB = [
    {id:1, image:`${carco}`, title:'Carco.Ge', description:'ავტო იმპორტის ვებ-გვერდი,ტრანსპორტირებისა და განბაჟების კალკულატორით.', button:'ნახვა',
                                                descriptionEng:'Auto import Web page, with transportation and Customs Clearnece calculator.', buttonEng:'Visit',  link:'https://carco.ge/'},

    {id:2, image:`${dlab}`, title:'3Dlab.Group', description:'ანიმაციური სტუდია, რომელიც ქმნის სხვადასხვა ტიპის 3D სარეკლამო ანიმაციებს კომპანიებისთვის.', button:'ნახვა',
                                                descriptionEng:'3Dlab is Animation studio, famous in social networks, with its funny projects.', buttonEng:'Visit',  link:'https://3dlab.group/'},

    {id:3, image:`${pixnft}`, title:'pixnft.me', description:'NFT - ვებ-გვერდი, ინოვაციური გეგმებით.', button:'ნახვა',
                                                descriptionEng:'NFT project Landing page, with road map and OpenSea account link', buttonEng:'Visit', link:'https://pixnft.me/'},

    {id:4, image:`${nexus}`, title:'Nexus Logistic LLC', description:'Nexus Logistics გადამზიდი კომპანია', button:'ნახვა',
                                                descriptionEng:'Nexus Logistics LLC is a 24/7 delivery/dispatching/carrier company', buttonEng:'Visit', link:'https://teamofnexus.com/', framework:' React Js.'},
]